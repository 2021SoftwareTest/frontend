import './HomeworkView.css';

import { Button, Col, Row } from 'antd';
import React from 'react';
import { withRouter } from 'react-router-dom';

import MyFooter from '../../components/footer/MyFooter';
import { HomeworkDetail } from '../../components/homeworkdetail/HomeworkDetail';
import { HomeworkHandin } from '../../components/homeworkhandin/HomeworkHandin';
import { HomeworkHeader } from '../../components/homeworkheader/HomeworkHeader';
import LoginedHeader from '../../components/loginedheader/LoginedHeader';

class HomeworkView extends React.Component {
  render() {
    return (
      <div>
        <LoginedHeader />
        <HomeworkHeader />
        <div className="homework-container">
          <Row>
            <Col span={24} style={{ display: 'flex' }}>
              <p className="homework-title-name">
                <a href = {'/'}>作业1</a>&nbsp;/&nbsp;<a href = {'/'}>文件1</a>
              </p>
              <Button className="cancel-button">取消</Button>
            </Col>
          </Row>
          <Row>
            <Col spa={24}>
              <HomeworkDetail />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <HomeworkHandin />
            </Col>
          </Row>
        </div>
        <MyFooter />
      </div>
    );
  }
}

export default withRouter(HomeworkView);
