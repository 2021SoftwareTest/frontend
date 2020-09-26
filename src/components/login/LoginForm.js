import '../../css/login.css';

import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

import * as userService from '../../services/userService';

class LoginForm extends React.Component {
  onFinish = (values) => {
    console.log('Received values of form: ', values);
    userService.login(values);
  };

  render() {
    return (
      <Form name="normal_login" className="login-form" initialValues={{ remember: true }} onFinish={this.onFinish}>
        <Form.Item name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true, message: 'Please input your Password!' }]}>
          <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="http://www.baidu.com">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button block type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <Link to="/register">register now!</Link>
        </Form.Item>
      </Form>
    );
  }
}

export default LoginForm;
