import React,{Component} from 'react';
import {HashRouter,Route,Switch} from 'react-router-dom';
import Home from "../Component/Home/Home";
import Login from "../Component/inquire/inquire ";

class Router extends Component{
  render() {
    return (
      <div>
        <HashRouter>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/login" component={Login}/>
          </Switch>
        </HashRouter>
      </div>
    );
  }
}
export default Router;
