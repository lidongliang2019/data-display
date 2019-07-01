import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from "./Component/Home/Home";
import inquire  from "./Component/inquire/inquire ";
import keyWord from "./Component/keyWord/keyWord";
import addData from "./Component/addData/addData";
// import { PageHeader } from 'antd';
// import Router from "./Routes/Router";
class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <HashRouter>
        <Switch>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/inquire" component={inquire} />
            <Route path="/keyWord" component={keyWord} />
            <Route path="/addData" component={addData} />
          </div>
        </Switch>
      </HashRouter>

    );
  }
}
ReactDOM.render(<App />, document.getElementById('root'))
