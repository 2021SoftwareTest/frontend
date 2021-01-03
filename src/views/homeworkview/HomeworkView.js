import './HomeworkView.css';

import { Button, Col, Row } from 'antd';
import React from 'react';
import { withRouter } from 'react-router-dom';

import MyFooter from '../../components/footer/MyFooter';
import { HomeworkDetail } from '../../components/homeworkdetail/HomeworkDetail';
import { HomeworkHandin } from '../../components/homeworkhandin/HomeworkHandin';
import { HomeworkHeader } from '../../components/homeworkheader/HomeworkHeader';
import LoginedHeader from '../../components/loginedheader/LoginedHeader';
import {SideBar} from '../../components/sidebar/SideBar';

class HomeworkView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curSection: 0
    }
  };

  menuCallback = (key) => {
    switch(key){
      case "Homework":
        this.setState({curSection: 0});
        break;
      case "Submit":
        this.setState({curSection: 1});
        break;
      case "Correct":
        this.setState({curSection: 2});
        break;
      case "Answer":
        this.setState({curSection: 3});
        break;
      case "Score":
        this.setState({curSection: 4});
        break;
      default:
        this.setState({curSection: 0});
        console.log("error");
    }
  };

  render() {
    const curSection = this.state.curSection;
    const content =
      curSection === 0 ? (
        <></>
      ) : curSection === 1 ? (
        <></>
      ) : curSection === 2 ? (
        <></>
      ) : curSection === 3 ? (
        <></>
      ) : curSection === 4 ? (
        <></>
      ): (
        <></>
      )

    return (
      <div>
        <LoginedHeader />
        <Row>
          <Col span={4}>
            <SideBar />
          </Col>
          <Col span={20}>
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
          </Col>
        </Row>
      </div>
    );
  };
}

export default withRouter(HomeworkView);
