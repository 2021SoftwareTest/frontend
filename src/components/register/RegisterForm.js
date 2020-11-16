import 'antd/dist/antd.css';
import './registercss.css';

import { Button, Col, Input, Row } from 'antd';
import React from 'react';

import {register} from "../../services/userService";

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', email: '', password: '', school: '', ID: '', phone: '', authCode: '' };
  }

  usernameOnChange = (value) => {
    this.setState({ username: value });
  };

  IDOnChange = (value) => {
    this.setState({ number: value });
  };

  emailOnChange = (value) => {
    this.setState({ email: value });
  };

  phoneOnChange = (value) => {
    this.setState({ phone: value });
  };

  passwordOnChange = (value) => {
    this.setState({ password: value });
  };

  authCodeOnChange = (value) => {
    this.setState({authCode: value});
  };

  schoolOnChange = (value) => {
    this.setState({school: value});
  };

  onSubmit = () => {
      const registerInfo = {
        userName: this.state.username,
        password: this.state.password,
        school: this.state.school,
        ID: this.state.ID,
        phone: this.state.phone,
        email: this.state.email,
        authcode: this.state.authCode
      };
      register(registerInfo);
  };

  render() {
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
              <Input placeholder="用户名" onChange={this.usernameOnChange} className="input" />
            </Col>
          </Row>
          <Row>
            <Col span={5}>
              <p className="title">学校</p>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Input placeholder="输入学校全称" onChange={this.schoolOnChange} className="input" />
            </Col>
          </Row>
          <Row>
            <Col span={5}>
              <p className="title">学号/工号</p>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Input placeholder="学号/工号" onChange={this.IDOnChange} className="input" />
            </Col>
          </Row>
          <Row>
            <Col span={5}>
              <p className="title">密码</p>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Input placeholder="创建密码" onChange={this.passwordOnChange} className="input" />
            </Col>
          </Row>
          <Row style={{marginTop:5}}>
            <Col span={24}>
              <p style={{marginBottom:0}}>
                确保密码至少有7位字符，包括数字和小写字母。
              </p>
            </Col>
          </Row>
          <Row>
            <Col span={5}>
              <p className="title">手机号</p>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Input placeholder="您的手机号" onChange={this.phoneOnChange} className="input" />
            </Col>
          </Row>
          <Row>
            <Col span={5}>
              <p className="title">邮箱</p>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Input placeholder="you@example.com" onChange={this.emailOnChange} className="input" />
            </Col>
          </Row>
          <Row>
            <Col span={5}>
              <p className="title">验证码</p>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Input placeholder="请输入收到的验证码" onChange={this.authCodeOnChange} className="input" />
            </Col>
          </Row>
          <Row>
             <p> </p>
          </Row>
          <Row>
            <Col span={24}>
              <a href={'/'}>
              <Button onChange={this.onSubmit} className="register-button">
                注册到小箱交
              </Button>
              </a>
            </Col>
          </Row>
          <Row style={{ marginTop: 25 }}>
            <Col span={24}>
              <p className="term">点击“注册到小箱交”，代表你同意我们的<a href={"#"}>服务条款</a>。我们会不定期寄给你相关邮件。</p>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default RegisterForm;
