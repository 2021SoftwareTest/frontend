import './HomeworkDetail.css';

import {Col, Row} from 'antd';
import React from 'react';

export class HomeworkDetail extends React.Component {
    render() {
        const {title, content, endTime, score} = this.props.data;
        return (
            <div className="homework-detail">
                <h2 className="homework-title">
                    {title}
                </h2>
                <Row>
                    <Col span={7}>
                        <p>
                            <strong>截止时间:&nbsp;&nbsp;</strong>{endTime}
                        </p>
                    </Col>
                    <Col span={6}>
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
