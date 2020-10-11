import './HomeworkDetail.css';

import {Col, Row} from 'antd';
import React from "react";

export class HomeworkDetail extends React.Component {
    state = {
        current: 'Homework',
    };

    handleClick = (e) => {
        console.log('click ', e);
        this.setState({current: e.key});
    };

    render() {
        return (
            <div className="homework-detail">
                <Row>
                    <Col span={24}>
                        <p className={"deadline"} > 截止时间 10月10日， 12:00 之前  总分 100</p>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <p className={"content"} > 请写一篇500字以上的游记</p>
                    </Col>
                </Row>
            </div>
        );
    }
}
