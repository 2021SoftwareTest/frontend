import 'antd/dist/antd.css';
import './LoginForm.css';

import { DropboxOutlined } from '@ant-design/icons';
import { Button, Col, Input, Row } from 'antd';
import React from 'react';

import {login} from '../../services/userService';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { username:"", password:"" };
    }

    usernameOnChange = (e) => {
        this.setState({username: e.target.value});
    };

    passwordOnChange = (e) => {
        this.setState({password: e.target.value});
    };

    onSubmit = () => {
        const loginInfo = {
            "userName": this.state.username,
            "password": this.state.password
        };
        login(loginInfo);
    };

    render () {
        return (
            <div className="login-form-container">
                <Row className="login-header">
                    <Col span={24}>
                        <div style={{textAlign:"center"}}>
                            <div>
                                <DropboxOutlined className="icon"/>
                            </div>
                            <div>
                                <h1>登录到小箱交</h1>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="login-form">
                    <Col span={24}>
                        <div>
                            <p className="login-hint">用户名或邮箱</p>
                        </div>
                        <div>
                            <Input placeholder="username & email address" value={this.state.username} onChange={this.usernameOnChange} className="login-input"/>
                        </div>
                        <div>
                            <p className="login-hint">密码</p>
                        </div>
                        <div>
                            <Input placeholder="请输入密码" value={this.state.password} onChange={this.passwordOnChange} className="login-input" />
                        </div>
                        <div style={{textAlign:"center"}}>
                            <Button onClick={this.onSubmit} className="login-button">
                                登&nbsp;&nbsp;&nbsp;录
                            </Button>
                        </div>
                    </Col>
                </Row>
                <Row className="login-register">
                    <Col span={24} style={{padding:"15px 20px"}}>
                        <div style={{textAlign:"center"}}>
                            <p className="register-link">没有账号？<a href={'/register'}>注册一个账号</a></p>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default LoginForm;
