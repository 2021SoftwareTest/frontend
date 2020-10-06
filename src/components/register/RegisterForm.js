import 'antd/dist/antd.css';
import './registercss.css';

import { Button, Col, Input, Row } from 'antd';
import React from 'react';

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', email: '', password: '' };
  }

  usernameOnChange = (value) => {
    this.setState({ username: value });
  };

  emailOnChange = (value) => {
    this.setState({ email: value });
  };

  passwordOnChange = (value) => {
    this.setState({ password: value });
  };

  onSubmit = () => {};

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
              <Input placeholder="选择一个用户名" onChange={this.usernameOnChange} className="input" />
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
              <p>
                确保密码至少有7位字符，包括数字和小写字母。
              </p>
            </Col>
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
              <p className="term">点击“注册到小箱交”，代表你同意我们的<a>服务条款</a>。我们会不定期寄给你相关邮件。</p>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default RegisterForm;
