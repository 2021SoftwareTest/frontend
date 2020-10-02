import './footer.css';

import { Col, Row } from 'antd';
import React from 'react';

class MyFooter extends React.Component {
  render() {
    return (
      <div className="footer">
        <Row>
          <Col span={2}>
            <div className="footer-item">
              <a>item1</a>
            </div>
          </Col>
          <Col span={2}>
            <div className="footer-item">
              <a>item1</a>
            </div>
          </Col>
          <Col span={2}>
            <div className="footer-item">
              <a>item1</a>
            </div>
          </Col>
          <Col span={2}>
            <div className="footer-item">
              <a>item1</a>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default MyFooter;
