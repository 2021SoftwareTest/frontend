import './Dashboard.css';

import { BellOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';
import React from 'react';

class Dashboard extends React.Component {
  render() {
    return (
      <div className="dashboard">
        <Row>
          <Col span={24}>
            <h4>
              <BellOutlined />
              &nbsp;&nbsp;公告板
            </h4>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <p>六年级语文由刘瑾玖老师授课</p>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
