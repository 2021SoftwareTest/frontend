import './ReleaseView.css';

import {Col, DatePicker, Divider, Input, InputNumber, Row, Space, Typography} from 'antd';
import React from 'react';

import MyFooter from "../../components/footer/MyFooter";
import LoginedHeader from "../../components/loginedheader/LoginedHeader";
import {HomeworkHandin} from "../../components/homeworkhandin/HomeworkHandin";
import {HomeworkHeader} from "../../components/homeworkheader/HomeworkHeader";

const {TextArea} = Input;
const { Title } = Typography;

class ReleaseView extends React.Component {
    dateChange = (date, dateString) => {
        console.log(date, dateString);
    };

    render() {
        return (
            <div>
                <LoginedHeader/>
                <HomeworkHeader/>
                <div className="release-container">
                    <Row style={{marginTop:10}}>
                        <Col span={24} style={{display: "flex"}}>
                            <Title>创建新作业</Title>
                        </Col>
                    </Row>
                    <Divider/>
                    <Row style={{marginTop:10}}>
                        <Col span={24}>
                            <Space>
                            作业名: <Input placeholder="作业名" style={{width: 200}}/>
                            截止日期: <DatePicker onChange={this.dateChange}/>
                            总分: <InputNumber/>
                            </Space>
                        </Col>
                    </Row>
                    <Row style={{marginTop:10}}>
                        <Col span={24}>
                            作业描述(可选）: <TextArea rows={4} placeholder="作业描述"/>
                        </Col>
                    </Row>
                    <Divider/>
                    <Row>
                        <Col span={24}>
                            <HomeworkHandin/>
                        </Col>
                    </Row>
                </div>
                <MyFooter/>
            </div>
        );
    }
}

export default ReleaseView;
