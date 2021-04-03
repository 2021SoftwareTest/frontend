import 'antd/dist/antd.css';
import './registercss.css';

import {Button, Col, Input, message, Row} from 'antd';
import React from 'react';

import {register, sendVerification} from '../../services/userService';

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {username: '', email: '', password: '', school: '', ID: '', phone: '', authCode: '', name:''};
    }

    usernameOnChange = (e) => {
        this.setState({username: e.target.value});
    };

    nameOnChange = (e) => {
      this.setState({name: e.target.value});
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

    nameOnChange = (e) => {
        this.setState({name: e.target.value});
    };


    sendVerification = () => {
        const data = {
            userName: this.state.username,
            email: this.state.email
        };
        console.log(data);
        const callback = (data) => {
            if (data.status === 200) {
                message.success(data.msg);
            } else {
                message.error(data.msg);
            }
        };
        sendVerification(data, callback);
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
            name:this.state.name
        };
        const callback = (data) => {
            console.log(data);
            if (data.status === 200) {
                window.location.href = '/login';
                message.success("注册成功，请登录");
            } else {
                message.error(data.msg);
            }
        };
        if(registerInfo.password.length < 7){
            message.error("请使用至少7位密码");
            //return;
        };
        if(!this.containsLetter(registerInfo.password)){
            message.error("密码中请包含字母");
            //return;
        }
        if(!this.containsNum(registerInfo.password)){
            message.error("密码中请包含数字");
            //return;
        }
        if(!this.verifyPhone(registerInfo.phone)){
            message.error("请输入正确的手机号！");
            //return;
        }
        if(!this.verifyEmail(registerInfo.email)){
            message.error("请输入正确的邮箱！");
        }
       
        register(registerInfo, callback);
    };

    containsLetter = (str) => {
        for (var i in str) {
            var asc = str.charCodeAt(i);
            if ((asc >= 65 && asc <= 90 )) {
                return true;
            }
            if((asc >= 97 && asc <= 122)){
                return true;
            }
        }
        return false;
    };

    containsNum = (str) => {
        for (var i in str) {
            var asc = str.charCodeAt(i);
            if ((asc >= 47 && asc <= 57)) {
                return true;
            }
        }
        return false;
    };

    verifyPhone = (str) => {
        if(str.length != 11){
            return false;
        }
        for(var i in str){
            var asc = str.charCodeAt(i);
            if((asc < 47 || asc > 57)){
                return false;
            }
        }
        return true;
    }


    verifyEmail = (str)=>{
        var pattern= /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
        var strEmail=pattern.test(str);
        if(strEmail){
            return true;
        }else{
            return false;
        }
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
                            <p className="title">姓名</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <Input placeholder="姓名" value={registerInfo.name} onChange={this.nameOnChange}
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
                        <Col span={16}>
                            <Input placeholder="请输入收到的验证码" value={registerInfo.authCode}
                                   onChange={this.authCodeOnChange} className="input"/>
                        </Col>
                        <Col span={6} offset={1}>
                            <Button style={{marginTop: 10}} onClick={this.sendVerification}>发送验证码</Button>
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
