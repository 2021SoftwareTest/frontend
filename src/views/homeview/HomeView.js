import './HomeView.css';

import {Col, Divider, message, Row} from 'antd';
import React from 'react';
import {withRouter} from 'react-router-dom';

import {BackToTop} from '../../components/backtotop/BackToTop';
import CourseCard from '../../components/coursecard/CourseCard';
import MyFooter from '../../components/footer/MyFooter';
import LoginedHeader from '../../components/loginedheader/LoginedHeader';
import {ReplyList} from '../../components/replylist/ReplyList';
import {SideBar} from '../../components/sidebar/SideBar';
import {getCourseList} from "../../services/courseService";

class HomeView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            courseList: []
        };
        this.state = {
            courseList: []
        };
    }

    componentDidMount() {
        const courseList = sessionStorage.getItem('courseList');
        if (courseList)
        {
            this.setState({
                courseList: JSON.parse(courseList)
            });
            return;
        }
        let userId = 1;
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            userId = user.userID;
        }
        const data = {
            userId: userId,
        };
        const callback = (data) => {
            if (data.status === 200) {
                if (data.data) {
                    this.setState({
                        courseList: data.data,
                    });
                }
                // message.success(data.msg);
            } else {
                message.error(data.msg);
            }
        };
        getCourseList(data, callback);
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
