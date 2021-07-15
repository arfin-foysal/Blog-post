import React from 'react'
import Home from './Components/Home'
import Nomatch from './Components/Nomatch';
import PersonInfo from './Components/PersonInfo';
import {




  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
export default function App() {
  return (
    <div>
      
      <Router>
        <Switch>
        <Route path="/home" exact><Home></Home></Route>
        <Route path="/" exact><Home></Home></Route>
        <Route path="/person/:id" exact><PersonInfo></PersonInfo></Route>
        <Route path="*"><Nomatch></Nomatch></Route>
        </Switch>
      </Router>
      
    </div>
  )
}

