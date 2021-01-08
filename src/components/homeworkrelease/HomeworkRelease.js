import './HomeworkRelease.css';

import {
    Avatar,
    Button,
    Col,
    Comment,
    DatePicker,
    Divider,
    Input,
    InputNumber,
    message,
    Row,
    Space,
    Typography
} from 'antd';
import React from 'react';

import {createHomework} from "../../services/homeworkService";

const {TextArea} = Input;
const {Title} = Typography;

class HomeworkRelease extends React.Component {
    constructor(props) {
        super(props);
        this.courseId = this.props.courseId;
        this.state = {
            title: '',
            description: 'default description',
            note: '',
            content: '',
            state: 0,
            score: 0,
            endTime: '',
            startTime: ''
        };
    }

    dateChange = (date, dateString) => {
        this.setState({endTime: dateString});
        // console.log(date, dateString);
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

    scoreOnchange = (value) => {
        this.setState({score: value});
    };

    PrefixInteger(num, length) {
        return (Array(length).join('0') + num).slice(-length);
    }

    onSubmit = () => {
        const myDate = new Date();
        const data = this.state;
        data.courseId = this.courseId;
        data.startTime = myDate.getFullYear() + '-' + this.PrefixInteger((myDate.getMonth() + 1), 2) + '-' + this.PrefixInteger(myDate.getDate(), 2);

        data.state = 1;
        console.log(data);
        const callback = (data) => {
            if (data.status === 200) {
                message.success(data.msg);
            } else {
                message.error(data.msg);
            }
        };
        createHomework(data, callback);
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
                                        <Input placeholder="作业名" style={{width: 200}} onChange={this.titleOnchange}
                                               value={title}/>
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
                                    <TextArea rows={4} placeholder="作业描述" onChange={this.contentOnchange}
                                              value={content}/>
                                </Col>
                            </Row>
                            <Divider/>
                            <Row>
                                <Col span={24}>
                                    <Comment
                                        avatar={<Avatar
                                            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
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
