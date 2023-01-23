import React from "react";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import Loader from "./components/Loader";
import Button from "./components/Button";
import Toggle from "./components/Toggle";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Home = () => (<div className="App">

<ul>
  <li> 
   <Link to="Nav-Bar">NavBar</Link>
  </li>
  <li> 
   <Link to="Login">Login</Link>
   </li>
   <li> 
   <Link to="Loader">Loader</Link>
   </li>
   <li> 
   <Link to="Button">Button</Link>
   </li>
   <li> 
   <Link to="Toggle">Toggle</Link>
   </li>
   

</ul>

</div>
);


function App(){
  return(
    <Router>
      

      <Switch>
        <Route path="/Nav-Bar">
          <NavBar/>
        </Route>
        <Route path="/Login">
          <Login/>
        </Route>
        <Route path="/Loader">
          <Loader/>
        </Route>
        <Route path="/Button">
          <Button/>
        </Route>
        <Route path="/Toggle">
          <Toggle/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
        
      </Switch>
      
    </Router>
  );
};
export default App;
