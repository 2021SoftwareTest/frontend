import React from 'react';
import {Redirect, HashRouter, Switch, Route} from 'react-router-dom';

import {history} from "../utils/history";
import AddClassView from '../views/addclassview/AddClassView';
import ClassView from '../views/classview/ClassView';
import HomeView from '../views/homeview/HomeView';
import HomeworkView from '../views/homeworkview/HomeworkView';
import LoginView from '../views/loginview/LoginView';
import PicHandleView from "../views/pichandleview/PicHandleView";
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
            <HashRouter history={history}>
                <Switch>
                    <PrivateRoute exact path="/" component={HomeView}/>
                    <LoginRoute exact path="/login" component={LoginView}/>
                    {/*<PrivateRoute exact pah="/test" component ={PicHandleView}/>*/}
                    <PrivateRoute exact path="/class" component={ClassView}/>
                    <Route exact path="/register" component={RegisterView}/>
                    <PrivateRoute exact path="/homework" component={HomeworkView}/>
                    <PrivateRoute exact path="/user" component={UserView}/>
                    <PrivateRoute exact path="/addclass" component={AddClassView}/>
                    <Redirect from="/*" to="/"/>
                </Switch>
            </HashRouter>
        );
    }
}

export default BasicRouter;
