import styled from "styled-components";

const TitlWrapper = styled.div`
  perspective: 500px;
  margin:10px;
  display: grid;
  overflow: hidden;
  text-align: center;
  transform-style: preserve-3d;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  grid-gap:0px;
  box-shadow: 0px 0px 5px 1px #00FEFC;
  border-radius:15px;
  span{
      background: #018BFE;
      color:lightblue;
      box-shadow: 0px 0px 5px 1px #00FEFC;
      padding:6px;
  }
`;
const TiltStyles = styled.div`
  background-image: url("/static/drone.png");
  height: 200px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  transform: rotateX(${props => props.pitch}deg)
    rotate(${props => props.yaw * -1}deg)
    rotateY(${props => props.roll * -1}deg);
  position: relative;
  grid-column: 1 / -1;
  
`;

const Tilt = props => (
  <TitlWrapper>
    <span>Pitch:{props.pitch}</span>
    <span>Roll:{props.roll}</span>
    <span>Yaw:{props.yaw}</span>
    <span>Height:{props.height / 100} M</span>
    <TiltStyles pitch={props.pitch} roll={props.roll} yaw={props.yaw} />
  </TitlWrapper>
);

Tilt.defaultProps = {
  pitch: 0,
  height: 0,
  yaw: 0,
  roll: 0
};

export default Tilt;
