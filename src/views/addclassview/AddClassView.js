import './AddClassView.css';

import { Col, Row } from 'antd';
import React from 'react';
import { withRouter } from 'react-router-dom';

import AddClassForm from '../../components/addClassForm/AddClassForm';
import { BackToTop } from '../../components/backtotop/BackToTop';
import MyFooter from '../../components/footer/MyFooter';
import LoginedHeader from '../../components/loginedheader/LoginedHeader';
import { SideBar } from '../../components/sidebar/SideBar';

class AddClassView extends React.Component {

  componentDidMount() {
    const user = localStorage.getItem('user');
    this.setState({ user: user });
  }

  render() {
    return (
      <div className="home-view">
        <LoginedHeader />
        <Row style={{ minHeight: '100vh' }}>
          <Col span={4}>
            <SideBar />
          </Col>
          <Col span={20} style={{ paddingLeft: 10 }}>
            <Row>
              <Col span={18} style={{ paddingRight: 10 }}>
                <AddClassForm/>
              </Col>
              <Col span={6}>
              </Col>
            </Row>
            <Row>
              <Col span={16}>
                <MyFooter />
              </Col>
            </Row>
          </Col>
        </Row>
        <BackToTop />
      </div>
    );
  }
}

export default withRouter(AddClassView);
