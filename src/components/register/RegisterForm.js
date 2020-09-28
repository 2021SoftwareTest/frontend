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
              <p className="title">UserName</p>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Input placeholder="Pick a username" onChange={this.usernameOnChange} className="input" />
            </Col>
          </Row>
          <Row>
            <Col span={5}>
              <p className="title">Email</p>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Input placeholder="you@example.com" onChange={this.emailOnChange} className="input" />
            </Col>
          </Row>
          <Row>
            <Col span={5}>
              <p className="title">Password</p>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Input placeholder="Create a password" onChange={this.passwordOnChange} className="input" />
            </Col>
          </Row>
          <Row>
            <p>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              Make sure it's at least 7 characters, including a number, and a lowercase letter.
            </p>
          </Row>
          <Row>
            <Col span={24}>
              <Button onChange={this.onSubmit} className="register-button">
                Sign up for Homework Hub
              </Button>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <p className="term">By clicking “Sign up for Homework Hub”, you agree to ourterms of service andprivacy statement. We’ll occasionally send you account related emails.</p>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default RegisterForm;
