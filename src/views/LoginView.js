import React from "react";
import {withRouter} from "react-router-dom";

class LoginView extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // let user = localStorage.getItem("user");
        // this.setState({user:user});
        console.log('LoginView');
    }

    render() {
        return (
            <div>LoginView</div>
        );
    }
}

export default withRouter(LoginView);

