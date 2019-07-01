import Commands from '../Components/Commands.js'
import DroneState from '../Components/DroneState.js'
import styled, { createGlobalStyle} from 'styled-components'


const GlobalStyle = createGlobalStyle `
body {
    background: white;
    /* font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; */
    font-family: 'Operator Mono', monospace;
    font-weight: 900;
    font-size: 1rem;
    background:#272D39;
    color: white;
  }
   {
    font-family: 'Operator Mono', monospace;
    box-sizing: border-box;
  }
  h2 {
    text-align: center;
    font-style: italic;
  }
`;
const IndexStyle = styled.div `
  max-width: 500px;
  margin: 0 auto;
`;

const IndexPage = () => (
    <IndexStyle>
        <Commands/>
        <DroneState/>
        <GlobalStyle/>
    </IndexStyle>
)

export default IndexPage;
