import './CorrectView.css'

import { Col, Divider, Row } from 'antd';
import React from 'react';
import { withRouter } from 'react-router-dom';

import MyFooter from '../../components/footer/MyFooter';
import { HomeworkCorrect } from '../../components/homeworkcorrect/HomeworkCorrect';
import { HomeworkDetail } from '../../components/homeworkdetail/HomeworkDetail';
import { HomeworkDone } from '../../components/homeworkdone/HomeworkDone';
import { HomeworkHeader } from '../../components/homeworkheader/HomeworkHeader';
import LoginedHeader from '../../components/loginedheader/LoginedHeader';
import {SideBar} from '../../components/sidebar/SideBar';

class CorrectView extends React.Component {
  render() {
    return (
      <div>
        <LoginedHeader />
        <Row>
          <Col span={4}>
            <SideBar />
          </Col>
          <Col span={20}>
            <HomeworkHeader />
            <div className="homwork-correct-container">
              <Divider orientation="left"> 作业内容 </Divider>
              <HomeworkDetail />
              <Divider orientation="left"> 作业提交 </Divider>
              <HomeworkDone />
              <Divider orientation="left"> 批改 </Divider>
              <HomeworkCorrect />
            </div>
            <MyFooter />
          </Col>
        </Row>
      </div>
    );
  }
}

export default withRouter(CorrectView);
