import { useState, useEffect } from 'react';
import socket from "../socket.js";

const useDroneState = () => {
  const [droneState, updateDroneState] = useState([]);
  useEffect(() => {
    console.log("useDroneState");
    socket.on("droneState", updateDroneState);
  }, []);
  return droneState;
};

function useSocket() {
  const [status, updateStatus] = useState("DISCONNECTED");
  useEffect(() => {
    socket.on("status", updateStatus);
  }, []);
  return status;
};
const DroneState = () => {
  const status = useSocket();
  const droneState = useDroneState([]);
  console.log(droneState);
  return (
    <div>
      <p>Status: {status}</p>
      <p>State: {droneState}</p>
    </div>
  );
};

export default DroneState;
