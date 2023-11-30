import ThreeJSParticlesText from "./ThreeJSParticlesText";
import Try from "./sections/Try";
import GlobalStyle from "./globalStyle";
import styled from 'styled-components';
import MainVideo from "./sections/MainVideo";
import About from "./sections/About";
import Internal from "./sections/Internal";
import Code from "./sections/Code";
import {useMediaQuery} from "usehooks-ts";
import MobileHome from "./components/MobileHome";

function App() {
    const isMobile = useMediaQuery('(max-width: 768px)');
  return (
      <div>
        <Wrapper>
            <GlobalStyle/>
            {!isMobile ?
                <>
                    <div style={{height: '0px'}}>
                        <ThreeJSParticlesText/>
                        <MainVideo/>
                        <Try/>
                    </div>
                </>
                :
                <MobileHome/>
            }

        </Wrapper>
        <About/>
        <Internal/>
        <Code/>
      </div>
  );
}

export default App;
const Wrapper = styled.div`
    position: relative;
    height: 100vh;
    width: 100vw;
`
