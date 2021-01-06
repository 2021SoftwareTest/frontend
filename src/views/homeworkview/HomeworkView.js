import './HomeworkView.css';

import {Col, message, Row} from 'antd';
import React from 'react';
import {withRouter} from 'react-router-dom';

import MyFooter from '../../components/footer/MyFooter';
import {HomeworkHeader} from '../../components/homeworkheader/HomeworkHeader';
import LoginedHeader from '../../components/loginedheader/LoginedHeader';
import {SideBar} from '../../components/sidebar/SideBar';
import HomeworkContent from '../../components/homeworkcontent/HomeworkContent';
import HomeworkSubmitList from '../../components/homeworksubmitlist/HomeworkSubmitList';
import TeacherHomeworkCorrect from "../../components/teacherhomeworkcorrect/TeacherHomeworkCorrect";
import StandardAnswer from "../../components/standardanswer/StandardAnswer";

import {teacherGetHomework} from "../../services/homeworkService";
import {getStudentAnswer} from "../../services/homeworkService";
import {getHomeworkDetail} from "../../services/homeworkService";

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
    homeworkId: 1,
    userId: 1
};


class HomeworkView extends React.Component {
    constructor(props) {
        super(props);
        this.userType = 1;  // 需要从localstorage中拿
        this.setKeyFun = null;
        this.state = {
            curSection: 0,
            homeworkData: {
                hwId: -1,
                courseId: -1,
                teacherId: -1,
                startTime: '',
                endTime: '',
                title: '',
                score: '',
                standardAnswerId: -1,
                content: '',
                description: '',
                note: ''
            },
            ansCheckData:{
                hwId: -1,
                answerId: -1,
                checkId: -1,
                studentId: -1,
                state: -1
            },
            userData: {
                userId: 0,
                name: "",
                school: "",
                ID: ""
            }
        };
    };

    componentDidMount() {
        const query = this.props.location.search;
        const arr = query.split('&');
        this.homeworkId = arr[0].substr(12);
        if (this.userType === 1) {  // 老师
            const args = {hwId: this.homeworkId};
            const callback = (data) => {
                if (data.status === 200){
                    this.setState({homeworkData:data.data});
                    message.success(data.msg);
                }
                else {
                    message.error(data.msg);
                }
            };
            teacherGetHomework(args, callback);
        }
        else if (this.userType === 2) {
            const args = {hwId: this.homeworkId};
            const callback = (data) => {
                if (data.status === 200) {
                    this.setState({
                        homeworkData: {
                            hwId: data.data.hwId,
                            courseId: data.data.courseId,
                            teacherId: data.data.teacherId,
                            startTime: data.data.startTime,
                            endTime: data.data.endTime,
                            title: data.data.title,
                            score: data.data.score,
                            standardAnswerId: data.data.standardAnswerId,
                            content: data.data.content,
                            description: data.data.description,
                            note: data.data.note
                        },
                        ansCheckData: {
                            hwId: data.data.hwId,
                            answerId: data.data.answerId,
                            checkId: data.data.checkId,
                            studentId: -1,
                            state: data.data.state
                        }
                    });
                    message.success(data.msg);
                }
                else {
                    message.error(data.msg);
                }
            };
            getHomeworkDetail(args, callback);
        }
    }

    menuCallback = (key) => {
        switch (key) {
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
            default:
                this.setState({curSection: 0});
                console.log("error");
        }
    };

    submitListCallback = (userData) => {
        this.setState({userData: userData, curSection: 2});
        this.setKeyFun("Correct");
    };

    homeworkHeaderSetKeyFunCallback = (fun) => {
        this.setKeyFun = fun;
    };

    render() {
        const curSection = this.state.curSection;
        const userType = this.userType;       // 0: 管理员 1: 老师 2: 学生
        const content =
            curSection === 0 ? (
                <HomeworkContent homeworkData={this.state.homeworkData}
                                 ansCheckData={this.state.ansCheckData}
                                 data={data}
                />
            ) : curSection === 1 ? (
                <HomeworkSubmitList data={data} submitListCallback={this.submitListCallback}/>
            ) : curSection === 2 ? (
                <TeacherHomeworkCorrect data={data} userType={userType} userData={this.state.userData}/>
            ) : curSection === 3 ? (
                <StandardAnswer data={data} userType={userType}/>
            ) : (
                <></>
            );

        return (
            <div>
                <LoginedHeader/>
                <Row>
                    <Col span={4}>
                        <SideBar/>
                    </Col>
                    <Col span={20}>
                        <HomeworkHeader menuCallback={this.menuCallback} data={data} userType={userType}
                                        homeworkHeaderSetKeyFunCallback={this.homeworkHeaderSetKeyFunCallback}/>
                        <div className="homework-container">
                            {content}
                        </div>
                        <MyFooter/>
                    </Col>
                </Row>
            </div>
        );
    };
}

export default withRouter(HomeworkView);
