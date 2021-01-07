import './ClassView.css';

import {Col, Row} from 'antd';
import React from 'react';

import {withRouter} from 'react-router-dom';
import {ClassDiscuss} from '../../components/classdiscuss/ClassDiscuss';
import ClassEdit from '../../components/classedit/ClassEdit';
import ClassHomework from '../../components/classhomework/ClassHomework';
import ClassMainPage from '../../components/classmainpage/ClassMainPage';
import {ClassNotice} from '../../components/classnotice/ClassNotice';
import {ClassOutline} from '../../components/classoutline/ClassOutline';
import {ClassUnit} from '../../components/classunit/ClassUnit';
import ClassUser from '../../components/classuser/ClassUser';
import MyFooter from '../../components/footer/MyFooter';
import HomeworkRelease from "../../components/homeworkrelease/HomeworkRelease";
import LoginedHeader from '../../components/loginedheader/LoginedHeader';
import {SideBar} from '../../components/sidebar/SideBar';
import TeacherHeader from '../../components/teacherheader/TeacherHeader';
import UserImport from '../../components/userimport/UserImport';
import {getCourseDetail} from "../../services/courseService";

class ClassView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            curSection: 1,
            courseId:2,
        };
    }

    componentDidMount() {
        const user = localStorage.getItem("user");
        let userType = 0;
        if (user) {
            userType = JSON.parse(user).userType;
        }

        this.setState({
            userType: userType
        });

        const query = this.props.location.search;
        const arr = query.split('&');
        const id = arr[0].substr(4);
        this.setState({courseId:parseInt(id)});

        const data = {
            // eslint-disable-next-line react/prop-types
            courseId: parseInt(id),
        };
        const callback = (data) => {
            console.log(data);
            this.setState({
                courseName: data.data.courseName,
            });
        };
        getCourseDetail(data, callback);
    }

    menuCallback = (key) => {
        switch (key) {
            case 'MainPage':
                this.setState({curSection: 0});
                break;
            case 'Announcement':
                this.setState({curSection: 1});
                break;
            case 'Teams':
                this.setState({curSection: 2});
                break;
            case 'Project':
                this.setState({curSection: 3});
                break;
            case 'Score':
                this.setState({curSection: 4});
                break;
            case 'User':
                this.setState({curSection: 5});
                break;
            case 'File':
                this.setState({curSection: 6});
                break;
            case 'Outline':
                this.setState({curSection: 7});
                break;
            case 'Test':
                this.setState({curSection: 8});
                break;
            case 'Unit':
                this.setState({curSection: 9});
                break;
            case 'Edit':
                this.setState({curSection: 10});
                break;
            case 'Import':
                this.setState({curSection: 11});
                break;
            case 'Release':
                this.setState({curSection: 12});
                break;
            default:
                this.setState({curSection: 0});
                console.log("error");
                break;
        }
    };

    render() {
        const curSection = this.state.curSection;
        const userType = this.state.userType;
        console.log("userType in view:" + userType);
        const content =
            curSection === 0 ? (
                <ClassMainPage courseId={this.state.courseId}/>
            ) : curSection === 1 ? (
                <ClassNotice courseId={this.state.courseId}/>
            ) : curSection === 2 ? (
                <ClassHomework courseId={this.state.courseId}/>
            ) : curSection === 3 ? (
                <ClassDiscuss courseId={this.state.courseId}/>
            ) : curSection === 4 ? (
                <></>
            ) : curSection === 5 ? (
                <ClassUser courseId={this.state.courseId}/>
            ) : curSection === 6 ? (
                <></>
            ) : curSection === 7 ? (
                <ClassOutline courseId={this.state.courseId}/>
            ) : curSection === 8 ? (
                <></>
            ) : curSection === 9 ? (
                <ClassUnit courseId={this.state.courseId}/>
            ) : curSection === 10 ? (
                <ClassEdit courseId={this.state.courseId}/>
            ) : curSection === 11 ? (
                <UserImport courseId={this.state.courseId}/>
            ) : curSection === 12 ? (
                <HomeworkRelease courseId={this.state.courseId}/>
            ) : (
                <></>
            );
        return (
            <div className="teacher-view">
                <LoginedHeader/>
                <Row>
                    <Col span={4}>
                        <SideBar/>
                    </Col>
                    <Col span={20}>
                        <TeacherHeader title= {this.state.courseName} menuCallback={this.menuCallback} userType={userType}/>
                        <div className="teacher-view-content">{content}</div>
                        <MyFooter/>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default withRouter(ClassView);
