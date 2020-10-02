import '../css/register.css';

import { Col, Row } from 'antd';
import React from 'react';
import { withRouter } from 'react-router-dom';

import MyFooter from '../components/footer/MyFooter';
import MyHeader from '../components/header/MyHeader';
import RegisterForm from '../components/register/RegisterForm';

class RegisterView extends React.Component {
  render() {
    return (
      <div>
        <MyHeader />
        <Row className="middle">
          <Col span={13}>
            <div className="middle-content">
              <Row>
                <Col span={24} className="middle-content-1">
                  <h1>专为学生打造</h1>
                </Col>
                <Col span={24} className="middle-content-2">
                  <p>小箱交作为一个云作业平台，在这里你可以找到几乎所有科目的作业以供学习和参考。</p>
                </Col>
              </Row>
            </div>
          </Col>
          <Col span={11}>
            <div className="form-container">
              <RegisterForm />
            </div>
          </Col>
        </Row>
        <MyFooter />
      </div>
    );
  }
}

export default withRouter(RegisterView);
