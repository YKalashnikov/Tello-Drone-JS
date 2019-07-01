import styled from 'styled-components'

const BatteryStyles = styled.div `

   --color: ${props => (props.level > 20? '#00FFFF': '#bb0707')};
    height:40px;
    width:250px;
    border: 1px solid lightblue;
    box-shadow: 0px 0px 5px 1px #00FEFC;
    border-radius:10px;
    overflow: hidden;
    background: #002145;
.batteryLevel {
    height:40px;
    align-items:center;
    width: ${props => props.level}%;
    color:white;
    background:var(--color);
    display:flex;
    transition: all 0.5s;
    padding-left:5px;
}

`
;

const Battery = props => <BatteryStyles level={props.battery}
>
<span className="batteryLevel">{props.battery}%</span></BatteryStyles>
;

Battery.defaultProps = {
    battery:40
    //battery:'......'
}

export default Battery;
