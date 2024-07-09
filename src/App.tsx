import styled from 'styled-components';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/ResearchProjects';
import Papers from './pages/Papers';
import {
  HashRouter,
  Routes,
  Route
} from "react-router-dom";

const App = () => (
  <HashRouter>
    <AppContainer>
      <Routes>
        <Route path="/papers" element={<Papers/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </AppContainer>
  </HashRouter>
);

const AppContainer = styled.div`
  max-width: 900px;
  margin: auto;
  padding: 24px;
  font-size: 16px;
`

export default App;