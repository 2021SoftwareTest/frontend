import 'antd/dist/antd.css';
import './registercss.css';

import {Button, Col, Input, message, Row} from 'antd';
import React from 'react';

import {register} from '../../services/userService';

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {username: '', email: '', password: '', school: '', ID: '', phone: '', authCode: ''};
    }

    usernameOnChange = (e) => {
        this.setState({username: e.target.value});
    };

    IDOnChange = (e) => {
        this.setState({ID: e.target.value});
    };

    emailOnChange = (e) => {
        this.setState({email: e.target.value});
    };

    phoneOnChange = (e) => {
        this.setState({phone: e.target.value});
    };

    passwordOnChange = (e) => {
        this.setState({password: e.target.value});
    };

    authCodeOnChange = (e) => {
        this.setState({authCode: e.target.value});
    };

    schoolOnChange = (e) => {
        this.setState({school: e.target.value});
    };

    onSubmit = () => {
        const registerInfo = {
            userName: this.state.username,
            password: this.state.password,
            school: this.state.school,
            ID: this.state.ID,
            phone: this.state.phone,
            email: this.state.email,
            authcode: this.state.authCode,
        };
        const callback = (data) => {
            console.log(data);
            if (data.status === 200) {
                message.success(data.msg);
                window.location.href = '/login';
            } else {
                message.error(data.msg);
            }
        };
        register(registerInfo, callback);
    };

    render() {
        const registerInfo = this.state;
        return (
            <div className="register-form">
                <div className="register-form-wrapper">
                    <Row>
                        <Col span={5}>
                            <p className="title">用户名</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <Input placeholder="用户名" value={registerInfo.username} onChange={this.usernameOnChange}
                                   className="input"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={5}>
                            <p className="title">学校</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <Input placeholder="输入学校全称" value={registerInfo.school} onChange={this.schoolOnChange}
                                   className="input"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={5}>
                            <p className="title">学号/工号</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <Input placeholder="学号/工号" value={registerInfo.ID} onChange={this.IDOnChange}
                                   className="input"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={5}>
                            <p className="title">密码</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <Input placeholder="创建密码" value={registerInfo.password} onChange={this.passwordOnChange}
                                   className="input"/>
                        </Col>
                    </Row>
                    <Row style={{marginTop: 5}}>
                        <Col span={24}>
                            <p style={{marginBottom: 0}}>确保密码至少有7位字符，包括数字和小写字母。</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={5}>
                            <p className="title">手机号</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <Input placeholder="您的手机号" value={registerInfo.phone} onChange={this.phoneOnChange}
                                   className="input"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={5}>
                            <p className="title">邮箱</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <Input placeholder="you@example.com" value={registerInfo.email}
                                   onChange={this.emailOnChange} className="input"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={5}>
                            <p className="title">验证码</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <Input placeholder="请输入收到的验证码" value={registerInfo.authCode}
                                   onChange={this.authCodeOnChange} className="input"/>
                        </Col>
                    </Row>
                    <Row>
                        <p></p>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <Button onClick={this.onSubmit} className="register-button">
                                注册到小箱交
                            </Button>
                        </Col>
                    </Row>
                    <Row style={{marginTop: 25}}>
                        <Col span={24}>
                            <p className="term">
                                点击“注册到小箱交”，代表你同意我们的<a href={'#top'}>服务条款</a>。我们会不定期寄给你相关邮件。
                            </p>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default RegisterForm;
