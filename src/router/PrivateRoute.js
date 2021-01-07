import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {message} from "antd";
import {checkAuth} from "../services/userService";

export default class PrivateRoute extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuthed: true,
            hasAuthed: true,
        };
    }

    // componentDidMount() {
    //     const callback = (data) => {
    //         console.log(data);
    //         if (data.status === 200) {
    //             this.setState({isAuthed: true, hasAuthed: true});
    //         } else {
    //             message.error(data.msg);
    //             localStorage.removeItem('user');
    //             this.setState({isAuthed: false, hasAuthed: true});
    //         }
    //     };
    //     checkAuth(callback);
    // }

    render() {
        // eslint-disable-next-line react/prop-types
        const {component: Component, path = '/', exact = false, strict = false} = this.props;

        console.log(this.state.isAuthed);

        if (!this.state.hasAuthed) {
            return null;
        }

        return (
            <Route
                path={path}
                exact={exact}
                strict={strict}
                render={(props) =>
                    this.state.isAuthed ? (
                        <Component {...props} />
                    ) : (
                        <Redirect
                            to={{
                                pathname: '/login',
                                state: {from: props.location},
                            }}
                        />
                    )
                }
            />
        );
    }
}
