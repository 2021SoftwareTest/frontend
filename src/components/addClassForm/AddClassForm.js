import './AddClassForm.css';

import {Avatar, Button, Col, DatePicker, Input, message, Row} from 'antd';
import React from 'react';

import {putNewCourse} from '../../services/courseService';

const {TextArea} = Input;
const {RangePicker} = DatePicker;

class AddClassForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            courseName: '',
            introduction: '',
            textbooks: '',
            startTime: '',
            endTime: '',
        };
    }

    courseNameOnChange = (e) => {
        this.setState({courseName: e.target.value});
    };

    introductionOnChange = (e) => {
        this.setState({introduction: e.target.value});
    };

    textbooksOnChange = (e) => {
        this.setState({textbooks: e.target.value});
    };

    dateOnChange = (dates, dateString) => {
        console.log(dates, dateString);
        this.setState({
            startTime: dateString[0],
            endTime: dateString[1],
        });
    };

    onSubmit = () => {
        console.log(this.state);
        const data = {
            courseName: this.state.courseName,
            introduction: this.state.introduction,
            textbooks: this.state.textbooks,
            startTime: this.state.startTime,
            endTime: this.state.endTime,
        };
        const callback = (data) => {
            if (data.status === 200) {
                message.success(data.msg);
            } else {
                message.error(data.msg);
            }
        };
        putNewCourse(data, callback);
    };

    render() {
        return (
            <div className="class-card add-class-card ">
                <Row>
                    <Col span={5} style={{paddingLeft: '4.5%', paddingTop: 15}}>
                        <Avatar size={100}/>
                    </Col>
                    <Col span={19}>
                        <div className="class-name">
                            <Row>
                                <Col span={24}>
                                    <h2>课程名称</h2>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={24}>
                                    <Input value={this.state.courseName} onChange={this.courseNameOnChange}/>
                                </Col>
                            </Row>
                        </div>
                        <div className="time-range">
                            <h2>开始和结束时间</h2>
                            <RangePicker onChange={this.dateOnChange}/>
                        </div>
                    </Col>
                </Row>
                <div className="class-textbook">
                    <Row>
                        <Col span={24}>
                            <h2>所需教材</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <TextArea value={this.state.textbooks} placeholder="请填写课程详情"
                                      autoSize={{minRows: 3, maxRows: 5}} onChange={this.textbooksOnChange}/>
                        </Col>
                    </Row>
                </div>
                <div className="class-intro">
                    <Row>
                        <Col span={24}>
                            <h2>课程简介</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <TextArea value={this.state.introduction} placeholder="请填写课程简介"
                                      autoSize={{minRows: 5, maxRows: 8}} onChange={this.introductionOnChange}/>
                        </Col>
                    </Row>
                </div>
                <div className="submit">
                    <Button onClick={this.onSubmit}>提交</Button>
                </div>
            </div>
        );
    }
}

export default AddClassForm;
