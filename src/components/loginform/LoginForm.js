import 'antd/dist/antd.css';
import './LoginForm.css';

import {DropboxOutlined} from '@ant-design/icons';
import {Button, Col, Input, message, Row} from 'antd';
import React from 'react';
import {Link} from 'react-router-dom';

import {login, logout} from '../../services/userService';
import {history} from "../../utils/history";

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {username: '', password: ''};
    }

    usernameOnChange = (e) => {
        this.setState({username: e.target.value});
    };

    passwordOnChange = (e) => {
        this.setState({password: e.target.value});
    };

    onSubmit = () => {
        const data = {
            userName: this.state.username,
            password: this.state.password,
        };
        const callback = (data) => {
            if (data.status === 200) {
                if (data.data.user.userType === -1) {
                    message.error('您的账号已经被禁用！');
                } else {
                    localStorage.setItem('user', JSON.stringify(data.data.user));
                    message.success(data.msg);
                    history.push("/");
                }
            } else {
                message.error(data.msg);
            }
        };
        login(data, callback);
    }

    render() {
        return (
            <div className="login-form-container">
                <Row className="login-header">
                    <Col span={24}>
                        <div style={{textAlign: 'center'}}>
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
                            <Input placeholder="username & email address" value={this.state.username}
                                   onChange={this.usernameOnChange} className="login-input"/>
                        </div>
                        <div>
                            <p className="login-hint">密码</p>
                        </div>
                        <div>
                            <Input placeholder="请输入密码" value={this.state.password} onChange={this.passwordOnChange}
                                   className="login-input"/>
                        </div>
                        <div style={{textAlign: 'center'}}>
                            <Button onClick={this.onSubmit} className="login-button">
                                登&nbsp;&nbsp;&nbsp;录
                            </Button>
                        </div>
                    </Col>
                </Row>
                <Row className="login-register">
                    <Col span={24} style={{padding: '15px 20px'}}>
                        <div style={{textAlign: 'center'}}>
                            <p className="register-link">
                                没有账号？<Link to={{pathname: '/register'}}>注册一个账号</Link>
                            </p>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default LoginForm;
