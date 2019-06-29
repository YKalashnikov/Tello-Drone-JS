import socket from '../socket';
const sendCommand = (command) => {
  return ()=> {
    console.log(`Sending Command!${command}`);
    socket.emit('command', command);
  }

};

const Commands = () => {
  return (
    <div>
      <button onClick={sendCommand("takeoff")}>Take off</button>
      <button onClick={sendCommand("land")}>Land</button>
      <button onClick={sendCommand("up 20")}>up 20</button>
      <button onClick={sendCommand("down 20")}>Down 20</button>
      <button onClick={sendCommand("right 20")}>Right 20</button>
      <button onClick={sendCommand("left 20")}>Left 20</button>
      <button onClick={sendCommand("forward 20")}>Forward 20</button>
      <button onClick={sendCommand("back 20")}>Back 20</button>
      <button onClick={sendCommand("land")}>Land</button>
      <button onClick={sendCommand("flip f")}>Flip left</button>
      <button onClick={sendCommand("emergency")}>Emergency</button>
    </div>
  );
};

export default Commands;
