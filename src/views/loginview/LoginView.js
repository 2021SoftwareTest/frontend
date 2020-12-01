import './LoginView.css';

import { Col, Row } from 'antd';
import React from 'react';
import { withRouter } from 'react-router-dom';

import LoginForm from '../../components/loginform/LoginForm';

class LoginView extends React.Component {
  componentDidMount() {
    // let user = localStorage.getItem("user");
    // this.setState({user:user});
    console.log('LoginView');
  }

  render() {
    return (
      <div>
        <Row>
          <Col span={24} style={{ margin: '40px 39.5%' }}>
            <LoginForm />
          </Col>
        </Row>
        <Row>
          <Col span={6} style={{ margin: '40px 42%' }}>
            <div>
              <a href={'#top'} className="bottom-link">
                条款
              </a>
              <a href={'#top'} className="bottom-link">
                隐私
              </a>
              <a href={'#top'} className="bottom-link">
                安全
              </a>
              <a href={'#top'} className="bottom-link">
                联系小箱交
              </a>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default withRouter(LoginView);
