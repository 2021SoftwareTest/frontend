import React from 'react';
import { Redirect, Router, Switch } from 'react-router-dom';

import { history } from '../utils/history';
import HomeView from '../views/HomeView';
import LoginView from '../views/loginview/LoginView';
import RegisterView from '../views/RegisterView';
import LoginRouter from './LoginRouter';
import PrivateRouter from './PrivateRouter';

class BasicRouter extends React.Component {
  constructor(props) {
    super(props);

    history.listen((location, action) => {
      // clear alert on location change
      console.log(location, action);
    });
  }

  render() {
    return (
      <Router history={history}>
        <Switch>
          <PrivateRouter exact path="/register" component={RegisterView} />
          <PrivateRouter exact path="/" component={HomeView} />
          <LoginRouter exact path="/login" component={LoginView} />
          <Redirect from="/*" to="/" />
        </Switch>
      </Router>
    );
  }
}

export default BasicRouter;
