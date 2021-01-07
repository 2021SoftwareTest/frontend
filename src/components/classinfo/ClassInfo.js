import './CardInfo.css';

import {Avatar, Button, Col, Input, message, Row} from 'antd';
import React from 'react';
import {editCourse, getCourseDetail} from "../../services/courseService";

// import {getCourseUser} from '../../services/courseService';

const {TextArea} = Input;

class ClassInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            endTime: "",
            startTime: "",
            courseName: "",
            courseId: 0,
            introduction: "",
            textbooks: "",
            status: ""
        };
    }

    componentDidMount() {
        const data = {
            // eslint-disable-next-line react/prop-types
            courseId: this.props.courseId,
        };
        const callback = (data) => {
            console.log(data);
            this.setState({
                endTime: data.data.endTime,
                startTime: data.data.startTime,
                courseName: data.data.courseName,
                courseId: data.data.courseId,
                introduction: data.data.introduction,
                textbooks: data.data.textbooks,
                status: data.data.status
            });
        };
        getCourseDetail(data, callback);
    };

    endTimeOnChange = (e) => {
        this.setState({endTime: e.target.value});
    };

    startTimeOnChange = (e) => {
        this.setState({startTime: e.target.value});
    };

    courseNameOnChange = (e) => {
        this.setState({courseName: e.target.value});
    };

    introductionOnChange = (e) => {
        this.setState({introduction: e.target.value});
    };

    textbooksOnChange = (e) => {
        this.setState({textbooks: e.target.value});
    };


    saveCourse = () => {
        const data = {
            courseId: this.state.courseId,
            courseName: this.state.courseName,
            introduction: this.state.introduction,
            textbooks: this.state.textbooks,
            startTime: this.state.startTime,
            endTime: this.state.endTime,
            status: this.state.status,
        };
        const callback = (data) => {
            if (data.status === 200) {
                message.success(data.msg);
            } else {
                message.error(data.msg);
            }
        };
        editCourse(data, callback);
    };

    render() {
        return (
            <div className="class-card">
                <Row>
                    <Col span={5} style={{paddingLeft: '4.5%', paddingTop: 15}}>
                        <Avatar size={100}/>
                    </Col>
                    <Col span={19}>
                        <div className="class-name">
                            <Row>
                                <Col span={24}>
                                    <Row>
                                        <Col span={24}>
                                            <h2>课程名称</h2>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={24}>
                                            <Input value={this.state.courseName} onChange={this.courseNameOnChange} placeholder="输入课名"/>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                        <div className="class-detail">
                            <Row>
                                <Col span={11}>
                                    <Row>
                                        <Col span={24}>
                                            <h2>开始时间</h2>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={24}>
                                            <Input value={this.state.startTime} onChange={this.startTimeOnChange}/>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col span={12} offset={1}>
                                    <Row>
                                        <Col span={24}>
                                            <h2>结束时间</h2>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={24}>
                                            <Input value={this.state.endTime} onChange={this.endTimeOnChange}/>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
                <div className="class-intro">
                    <Row>
                        <Col span={24}>
                            <h2>课程教材</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <TextArea value={this.state.textbooks} placeholder="请填写课程教材"
                                      autoSize={{minRows: 3, maxRows: 5}} onChange={this.textbooksOnChange}/>
                        </Col>
                    </Row>
                </div>
                <div className="class-detail">
                    <Row>
                        <Col span={24}>
                            <h2>课程介绍</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <TextArea value={this.state.introduction} placeholder="请填写课程介绍"
                                      autoSize={{minRows: 5, maxRows: 8}} onChange={this.introductionOnChange}/>
                        </Col>
                    </Row>
                </div>
                {/* <div className="student-list-container">*/}
                {/*    <h2>学生列表</h2>*/}
                {/*    {this.renderStudentList(this.state.students)}*/}
                {/* </div>*/}
                <div className="submit">
                    <Button onClick={this.saveCourse}>保存</Button>
                </div>
            </div>
        );
    }
}

export default ClassInfo;
