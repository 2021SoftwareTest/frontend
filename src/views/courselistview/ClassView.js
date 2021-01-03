import './ClassView.css';

import { Col, Divider, Row } from 'antd';
import React from 'react';
import { withRouter } from 'react-router-dom';

import CourseCard from '../../components/coursecard/CourseCard';
import MyFooter from '../../components/footer/MyFooter';
import LoginedHeader from '../../components/loginedheader/LoginedHeader';
import {SideBar} from '../../components/sidebar/SideBar';


const data = [
  {courseImage:"xxx", courseId:1, courseName: "CSE", courseTerm:"2020-2021 Fall"},
  {courseImage:"xxx", courseId:1, courseName: "CSE", courseTerm:"2020-2021 Fall"},
  {courseImage:"xxx", courseId:1, courseName: "CSE", courseTerm:"2020-2021 Fall"},
  {courseImage:"xxx", courseId:1, courseName: "CSE", courseTerm:"2020-2021 Fall"}
];

class CourseListView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courseList: []
    };
  }

  componentDidMount () {
    this.setState({courseList: data});
  }

  render() {
    const content = this.state.courseList.map((item, index) => (<CourseCard data={item} key={index} />));
    return (
      <div className="course-list">
        <LoginedHeader />
          <Row>
            <Col span={4}>
              <SideBar />
            </Col>
            <Col span={20}>
              <div className="course-list-container">
                <h1>课程列表</h1>
                <Divider />
                {content}
              </div>
            </Col>
          </Row>
        <MyFooter />
      </div>
    );
  }
}

export default withRouter(CourseListView);
