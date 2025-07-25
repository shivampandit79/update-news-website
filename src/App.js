import { Component } from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import News from "./Components/News";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

export default class App extends Component{
  apikey = process.env.REACT_APP_API_KEY
  render(){
  return (
    <div>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element = {<Navigate to="/General" replace/>}/>
        <Route exact path="/General" element = {<News apikey={this.apikey} key="general" pageSize={6} country="us" category="general"/>}/>
        <Route exact path="/Business" element = {<News apikey={this.apikey}key="business" pageSize={6} country="us" category="business"/>}/>
        <Route exact path="/Entertainment" element = {<News apikey={this.apikey}key="entertainment" pageSize={6} country="us" category="entertainment"/>}/>
        <Route exact path="/Health" element = {<News apikey={this.apikey}key="health" pageSize={6} country="us" category="health"/>}/>
        <Route exact path="/Science" element = {<News apikey={this.apikey}key="science" pageSize={6} country="us" category="science"/>}/>
        <Route exact path="/Sports" element = {<News apikey={this.apikey}key="sports" pageSize={6} country="us" category="sports"/>}/>
        <Route exact path="/Technology" element = {<News apikey={this.apikey}key="technology" pageSize={6} country="us" category="technology"/>}/>
      </Routes>
    </Router>
    </div>
  );
}
}