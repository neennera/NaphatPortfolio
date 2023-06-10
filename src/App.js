import "./App.css";
import Intro from "./component/Intro";
import ProjectWrap from "./component/ProjectWrap";
import Profile from "./component/Profile";
import Background from "./component/Background"

function App() {
  return (
    <div className="App">
      <Intro/>
      <Profile/>
      <ProjectWrap/>    
      <div className="footer-bar"> || Email : neennera@gmail.com   ||  Discord : LeViAtHaN#4494 || </div>  
      <Background/>
    </div>
  );
}

export default App;
