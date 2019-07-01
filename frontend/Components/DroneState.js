import { useState, useEffect } from "react";
import socket from "../socket.js";
import styled from "styled-components";
import Battery from "./Battery";
import Tilt from "./Tilt";

const useDroneState = () => {
  const [droneState, updateDroneState] = useState([]);
  useEffect(() => {
    console.log("useDroneState");
    socket.on("droneState", updateDroneState);
    return () => socket.removeListener("droneState");
  }, []);
  return droneState;
};

function useSocket() {
  const [status, updateStatus] = useState("DISCONNECTED");
  useEffect(() => {
    socket.on("status", updateStatus);
    return () => socket.removeListener("status");
  }, []);
  return status;
}

const DroneStateStyles = styled.div`
  display: flex;
  flex-direction:column;

    .status {
    display: flex;
    text-shadow: 0px 0px 2px  #00FEFC;
    }
    .friends {
        display: flex;
        flex-direction:column;
        justify-content: center;
        align-items:center;
        margin:2px;
    }
`;

const DroneState = () => {
  const status = useSocket();
  const droneState = useDroneState([]);
  //console.log(droneState);
  return (
    <DroneStateStyles>
        <div className='friends'>
      <p className="status">Status:{status}</p>
      <Battery battery={droneState.bat} />
      </div>
      <Tilt
        pitch={droneState.pitch}
        roll={droneState.roll}
        yaw={droneState.yaw}
        height={droneState.h}
      />
      
    </DroneStateStyles>
  );
};

export default DroneState;
