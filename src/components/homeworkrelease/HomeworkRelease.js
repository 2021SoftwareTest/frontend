import './HomeworkRelease.css';

import {Avatar, Button, Col, Comment, DatePicker, Divider, Input, InputNumber, Row, Space, Typography} from 'antd';
import React from 'react';

import {HomeworkHandin} from '../homeworkhandin/HomeworkHandin';

const {TextArea} = Input;
const {Title} = Typography;

class HomeworkRelease extends React.Component {
    constructor(props) {
        super(props);
        this.courseId = this.props.courseId;
        this.state = {
            title: '',
            description: '',
            note: '',
            content: '',
            state: 0,
            score: 0,
            endTime: '',
            startTime: ''
        };
    };

    dateChange = (date, dateString) => {
        console.log(date, dateString);
    };

    titleOnchange = (e) => {
        this.setState({title: e.target.value});
    };


    noteOnChang = (e) => {
        this.setState({note: e.target.value});
    };

    contentOnchange = (e) => {
        this.setState({content: e.target.value});
    };

    scoreOnchange = (e) => {
        this.setState({score: e.target.value});
    };

    onSubmit = () => {

    };

    render() {
        const {title, note, content, score} = this.state;
        return (
            <div className="release-container">
                <Row>
                    <Col span={20}>
                        <div className="release-container">
                            <Row style={{marginTop: 10}}>
                                <Col span={24} style={{display: 'flex'}}>
                                    <Title>创建新作业</Title>
                                </Col>
                            </Row>
                            <Divider/>
                            <Row style={{marginTop: 10}}>
                                <Col span={24}>
                                    <Space>
                                        <strong>作业名:</strong>
                                        <Input placeholder="作业名" style={{width: 200}} onChange={this.titleOnchange} value={title}/>
                                        <strong>截止日期:</strong>
                                        <DatePicker onChange={this.dateChange}/>
                                        <strong>总分:</strong>
                                        <InputNumber onChange={this.scoreOnchange} value={score}/>
                                    </Space>
                                </Col>
                            </Row>
                            <Row style={{marginTop: 10}}>
                                <Col span={24}>
                                    <strong>作业内容:</strong>
                                    <TextArea rows={4} placeholder="作业描述" onChange={this.contentOnchange} value={content}/>
                                </Col>
                            </Row>
                            <Divider/>
                            <Row>
                                <Col span={24}>
                                    <Comment
                                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                                                        alt="Han Solo"/>}
                                        content={<TextArea rows={4} onChange={this.noteOnChang} placeholder={"备注"}
                                                           value={note}/>}
                                    />
                                    <Button className="submit-button" onClick={this.onSubmit}>提交</Button>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default HomeworkRelease;
