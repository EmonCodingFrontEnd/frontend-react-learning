import React from 'react';
import {Router, Route, Switch} from 'dva/router';
import IndexPage from "./routes/IndexPage";
import App from './routes/App';

function RouterConfig({history}) {
  return (
    <Router history={history}>
      <Switch>
        {/*<Route path="/" exact component={IndexPage}/>*/}
        <Route path="/" component={App}/>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
