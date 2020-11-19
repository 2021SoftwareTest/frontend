import './CardInfo.css';

import {Avatar, Col, Input, Row, message} from 'antd';
import React from 'react';

import {getStudent} from '../../services/courseService';

const { TextArea } = Input;

class ClassInfo extends React.Component {
    constructor(props) {
        super(props);
        // eslint-disable-next-line react/prop-types
        const {subject, semester, grade, year, students, courseId} = this.props.classInfo;
        this.state = {
            subject: subject,
            semester: semester,
            grade: grade,
            year: year,
            students: students,
            courseId: courseId,
            description: '这个老师很懒，什么也没有写',
            detail: '这个老师很懒，什么也没有写'
        };
    }

    subjectOnChange = (e) => {
        this.setState({subject: e.target.value});
    };

    semesterOnChange = (e) => {
        this.setState({semester: e.target.value});
    };

    gradeChange = (e) => {
        this.setState({grade: e.target.value});
    };

    yearOnChange = (e) => {
        this.setState({year: e.target.value});
    };

    descriptionOnChange = (e) => {
        this.setState({description: e.target.value});
    };

    detailOnChange = (e) => {
        this.setState({detail: e.target.value});
    };

    renderStudentList = (list) => {
        return list.map((item, index) => (
            <div key={index} className="list-item">
                <Row>
                    <Col span={3}>
                        {item.userID}
                    </Col>
                    <Col span={3}>
                        {item.userName}
                    </Col>
                    <Col span={3}>
                        {item.school}
                    </Col>
                    <Col span={3}>
                        {item.phone}
                    </Col>
                    <Col span={3}>
                        {item.email}
                    </Col>
                </Row>
                {item}
            </div>
        ));
    };

    _getStudent = () => {
        const data = {
            'courseId': this.state.courseId
        };
        const callback = (data) => {
            if (data.status === 200){
                this.setState({students: data.data});
                message.success(data.msg);
            }
            else{
                message.error(data.msg);
            }
        };
        getStudent(data, callback)
    }

    componentDidMount() {
        // this._getStudent();
    }

    render() {
        return (
            <div className="class-card">
                <Row>
                    <Col span={5} style={{paddingLeft:"4.5%", paddingTop:15}}>
                        <Avatar size={100} />
                    </Col>
                    <Col span={19}>
                        <div className="class-name">
                            <Row>
                                <Col span={11}>
                                    <Row>
                                        <Col span={24}>
                                            <h2>课程名称</h2>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={24}>
                                            <Input value={this.state.subject} onChange={this.subjectOnChange}/>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col span={12} offset={1}>
                                    <Row>
                                        <Col span={24}>
                                            <h2>年级</h2>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={24}>
                                            <Input value={this.state.grade} onChange={this.gradeChange}/>
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
                                            <h2>学年</h2>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={24}>
                                            <Input value={this.state.year} onChange={this.yearOnChange}/>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col span={12} offset={1}>
                                    <Row>
                                        <Col span={24}>
                                            <h2>学期</h2>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={24}>
                                            <Input value={this.state.semester} onChange={this.semesterOnChange}/>
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
                            <h2>课程简介</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <TextArea value={this.state.description}
                                      placeholder="请填写课程简介"
                                      autoSize={{minRows: 3, maxRows: 5}}
                                      onChange={this.descriptionOnChange}
                            />
                        </Col>
                    </Row>
                </div>
                <div className="class-detail">
                    <Row>
                        <Col span={24}>
                            <h2>课程详情</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <TextArea value={this.state.detail}
                                      placeholder="请填写课程详情"
                                      autoSize={{minRows: 5, maxRows: 8}}
                                      onChange={this.detailOnChange}
                            />
                        </Col>
                    </Row>
                </div>
                <div className="student-list-container">
                    <h2>学生列表</h2>
                    <div className="student-list">
                        {this.renderStudentList(this.state.students)}
                    </div>
                </div>
            </div>
        );
    }
}

export default ClassInfo;
