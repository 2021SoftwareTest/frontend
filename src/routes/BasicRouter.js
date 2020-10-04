import React from 'react';
import { Redirect, Router, Switch } from 'react-router-dom';

import { history } from '../utils/history';
import ClassView from "../views/classview/ClassView";
import CorrectView from "../views/correctview/CorrectView";
import HomeView from '../views/homeview/HomeView';
import HomeworkView from "../views/homeworkview/HomeworkView";
import LoginView from '../views/loginview/LoginView';
import RegisterView from '../views/registerview/RegisterView';
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
          <PrivateRouter exact path="/class" component={ClassView} />
          <PrivateRouter exact path="/homework" component={HomeworkView} />
          <PrivateRouter exact path="/correct" component={CorrectView} />
          <LoginRouter exact path="/login" component={LoginView} />
          <Redirect from="/*" to="/" />
        </Switch>
      </Router>
    );
  }
}

export default BasicRouter;
