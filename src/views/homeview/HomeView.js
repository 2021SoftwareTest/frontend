import './HomeView.css';

import {Col, Divider, Row} from 'antd';
import React from 'react';
import {withRouter} from 'react-router-dom';

import {BackToTop} from '../../components/backtotop/BackToTop';
import CourseCard from '../../components/coursecard/CourseCard';
import MyFooter from '../../components/footer/MyFooter';
import LoginedHeader from '../../components/loginedheader/LoginedHeader';
import {ReplyList} from '../../components/replylist/ReplyList';
import {SideBar} from '../../components/sidebar/SideBar';

const data = [
    {courseImage: "xxx", courseId: 1, courseName: "CSE1", courseTerm: "2020-2021 Fall"},
    {courseImage: "xxx", courseId: 2, courseName: "CSE2", courseTerm: "2020-2021 Fall"},
    {courseImage: "xxx", courseId: 3, courseName: "CSE3", courseTerm: "2020-2021 Fall"},
    {courseImage: "xxx", courseId: 4, courseName: "CSE4", courseTerm: "2020-2021 Fall"}
];

class HomeView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: [],
            courseList: []
        };
    }

    componentDidMount() {
        const user = localStorage.getItem('user');
        this.setState({user: user, courseList: data});
    }

    render() {
        const content = this.state.courseList.map((item, index) => (<CourseCard data={item} key={index}/>));
        return (
            <div className="home-view">
                <LoginedHeader/>
                <Row style={{minHeight: '100vh'}}>
                    <Col span={4}>
                        <SideBar/>
                    </Col>
                    <Col span={20} style={{paddingLeft: 10}}>
                        <Row>
                            <Col span={18} style={{paddingRight: 10}}>
                                <Divider orientation="left">课程列表</Divider>
                                {content}
                            </Col>
                            <Col span={6}>
                                <ReplyList/>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={16}>
                                <MyFooter/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <BackToTop/>
            </div>
        );
    }
}

export default withRouter(HomeView);
