import "./App.css";
import NavBar from "./Components/NavBar";
import News from "./Components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element = {<News pageSize= {6} country="us" />}/>
        <Route exact path="/General" element = {<News key="general" pageSize={6} country="us" category="general"/>}/>
        <Route exact path="/Business" element = {<News key="business" pageSize={6} country="us" category="business"/>}/>
        <Route exact path="/Entertainment" element = {<News key="entertainment" pageSize={6} country="us" category="entertainment"/>}/>
        <Route exact path="/Health" element = {<News key="health" pageSize={6} country="us" category="health"/>}/>
        <Route exact path="/Science" element = {<News key="science" pageSize={6} country="us" category="science"/>}/>
        <Route exact path="/sports" element = {<News key="sports" pageSize={6} country="us" category="sports"/>}/>
        <Route exact path="/Technology" element = {<News key="technology" pageSize={6} country="us" category="technology"/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
