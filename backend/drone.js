const dgram = require("dgram");
const wait = require("waait");
const app = require('express')();
const http = require('http').Server(app)
const io = require('socket.io')(http)
const throttle = require('lodash/throttle');
const commandDelays = require("./commandDelays");


const PORT = 8889;
const HOST = "192.168.10.1";

const server = dgram.createSocket("udp4");
server.bind(PORT);

const serverState = dgram.createSocket("udp4");
serverState.bind(8890);

function parseState(state) {
  return state
    .split(';')
    .map(item => item.split(':'))
    .reduce((data, [key, value]) => {
      data[key] = value;
      return data;
    }, {});
}

server.on("message", message => {
  console.log(`👽: ${message}`);
  io.sockets.emit('status', message.toString())
});

/* serverState.on("message", state => {
  console.log(state.toString());
  const formattedState = parseState(state.toString());
  console.log(formattedState);
}); */

function handleError(err) {
  if (err) {
    console.log("ERROR");
    console.log(err);
  }
}

/* serverState.send('command', 0, 7, PORT, HOST, handleError);

server.send('battery?', 0, 8, PORT, HOST, handleError); */

const commands = ['command', 'battery?', 'takeoff', 'land'];

let i = 0;
server.send('command', 0, 'command'.length, PORT, HOST, handleError);
/* async function start() {
  const command = commands[i];
  const delay = commandDelays[command];
  console.log(`running command: ${command}`);

  server.send(command, 0, command.length, PORT, HOST, handleError);

  await wait(delay);
  i++;
  if (i < commands.length) {
    return start();
  }
  console.log("Finished");
}
start(); */

io.on('connection', socket=> {
   socket.on('command', command=> {
     console.log('command sent from browser')
     console.log(command)
     server.send(command, 0, command.length, PORT, HOST, handleError)
   });
   socket.emit('status', 'CONNECTED');

   const throttledEmit = throttle(socket.emit, 300);

   serverState.on('message', throttle(state => {
     const formattedState = parseState(state.toString());
     socket.emit('droneState', formattedState)
   }, 100)
  );

});
http.listen(6767, () => {
  console.log('Socket io server up and running')
})
