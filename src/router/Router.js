import React from 'react';
import {HashRouter, Redirect, Switch} from 'react-router-dom';
import {history} from "../utils/history";
import AddClassView from '../views/addclassview/AddClassView';
import HomeView from '../views/homeview/HomeView';
import HomeworkView from '../views/homeworkview/HomeworkView';
import LoginView from '../views/loginview/LoginView';
import RegisterView from '../views/registerview/RegisterView';
import ClassView from '../views/classview/ClassView';
import UserView from '../views/userview/UserView';
import PrivateRoute from './PrivateRoute';
import LoginRoute from "./LoginRoute";

class Router extends React.Component {
    constructor(props) {
        super(props);

        history.listen((location, action) => {
            // clear alert on location change
            console.log(location, action);
        });
    }

    render() {
        return (
            <HashRouter history={history}>
                <Switch>
                    <PrivateRoute exact path="/" component={HomeView}/>
                    <LoginRoute exact path="/login" component={LoginView}/>
                    <PrivateRoute exact path="/class" component={ClassView}/>
                    <PrivateRoute exact path="/register" component={RegisterView}/>
                    <PrivateRoute exact path="/homework" component={HomeworkView}/>
                    <PrivateRoute exact path="/user" component={UserView}/>
                    <PrivateRoute exact path="/addclass" component={AddClassView}/>
                    <Redirect from="/*" to="/"/>
                </Switch>
            </HashRouter>
        );
    }
}

export default Router;
