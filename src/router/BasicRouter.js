import React from 'react';
import {Redirect, Router, Switch} from 'react-router-dom';

import {history} from "../utils/history";
import AddClassView from '../views/addclassview/AddClassView';
import ClassView from '../views/classview/ClassView';
import HomeView from '../views/homeview/HomeView';
import HomeworkView from '../views/homeworkview/HomeworkView';
import LoginView from '../views/loginview/LoginView';
import RegisterView from '../views/registerview/RegisterView';
import UserView from '../views/userview/UserView';
import LoginRoute from "./LoginRoute";
import PrivateRoute from './PrivateRoute';

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
                    <LoginRoute exact path="/login" component={LoginView}/>
                    <PrivateRoute exact path="/" component={HomeView}/>
                    <PrivateRoute exact path="/class" component={ClassView}/>
                    <PrivateRoute exact path="/register" component={RegisterView}/>
                    <PrivateRoute exact path="/homework" component={HomeworkView}/>
                    <PrivateRoute exact path="/user" component={UserView}/>
                    <PrivateRoute exact path="/addclass" component={AddClassView}/>
                    <Redirect from="/*" to="/"/>
                </Switch>
            </Router>
        );
    }
}

export default BasicRouter;
