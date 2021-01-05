import './HomeworkView.css';

import { Button, Col, Row } from 'antd';
import React from 'react';
import { withRouter } from 'react-router-dom';

import MyFooter from '../../components/footer/MyFooter';
import { HomeworkHeader } from '../../components/homeworkheader/HomeworkHeader';
import LoginedHeader from '../../components/loginedheader/LoginedHeader';
import {SideBar} from '../../components/sidebar/SideBar';
import HomeworkContent from '../../components/homeworkcontent/HomeworkContent';
import HomeworkSubmitList from '../../components/homeworksubmitlist/HomeworkSubmitList';
import StuHomeworkCorrect from "../../components/stuhomeworkcorrect/StuHomeworkCorrect";
import TeacherHomeworkCorrect from "../../components/teacherhomeworkcorrect/TeacherHomeworkCorrect";

const data = {
  title: "作业一",
  description: "我是description",
  note: "我是note",
  content: "我是content",
  endTime: "0000-00-00 00:00:00",
  startTime: "1111-11-11 11:11:11",
  score: 100,
  courseId: 0,
  courseName: "六年级语文",
  state: 1,
  checkId: null,
  answerId: null,
  standardAnswerId: null,
  hwId: 1,
  userId: 1
};


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
    const userType = 1;       // 0: 管理员 1: 老师 2: 学生
    const content =
      curSection === 0 ? (
        <HomeworkContent data={data} />
      ) : curSection === 1 ? (
        <HomeworkSubmitList data={data} />
      ) : curSection === 2 ? (
          userType === 1 ? (
              <TeacherHomeworkCorrect data={data} />
          ) : (userType === 2) ? (
              <StuHomeworkCorrect data={data} />
          ) : (
              <></>
          )
      ) : curSection === 3 ? (
        <></>
      ) : curSection === 4 ? (
        <></>
      ) : (
        <></>
      );

    return (
      <div>
        <LoginedHeader />
        <Row>
          <Col span={4}>
            <SideBar />
          </Col>
          <Col span={20}>
            <HomeworkHeader menuCallback={this.menuCallback} data={data}/>
            <div className="homework-container">
              {content}
            </div>
            <MyFooter />
          </Col>
        </Row>
      </div>
    );
  };
}

export default withRouter(HomeworkView);
