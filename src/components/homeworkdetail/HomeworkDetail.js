import './HomeworkDetail.css';

import {Col, Row} from 'antd';
import React from 'react';

export class HomeworkDetail extends React.Component {
    state = {
        current: 'Homework',
    };

    handleClick = (e) => {
        console.log('click ', e);
        this.setState({current: e.key});
    };

    render() {
        const {title, content, endTime, score} = this.props.data;
        return (
            <div className="homework-detail">
                <h2 className="homework-title">
                    {title}
                </h2>
                <Row>
                    <Col span={6}>
                        <p>
                            <strong>截止时间:&nbsp;&nbsp;</strong>{endTime}
                        </p>
                    </Col>
                    <Col span={4}>
                        <p>
                            <strong>总分:</strong>{score}
                        </p>
                    </Col>
                </Row>
                <div className="description">
                    <p>
                        <strong>作业描述:</strong><br/>
                        {content}
                    </p>
                </div>
            </div>
        );
    }
}
