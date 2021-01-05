import './ClassOutline.css';

import {Calendar, Col, Divider, Row, Table} from 'antd';
import React from 'react';

const dataSource = [
    {
        key: '1',
        date: '2020.9.5',
        detail: '测试1',
        deadline: '2020.9.10',
    },
    {
        key: '2',
        date: '2020.9.10',
        detail: '测试2',
        deadline: '2020.9.15',
    },
];

const columns = [
    {
        title: '日期',
        dataIndex: 'date',
        key: 'date',
    },
    {
        title: '详细信息',
        dataIndex: 'detail',
        key: 'detail',
    },
    {
        title: '到期时间',
        dataIndex: 'deadline',
        key: 'deadline',
    },
];

function onPanelChange(value, mode) {
    console.log(value, mode);
}

export class ClassOutline extends React.Component {

    render() {
        return (
            <div className="class-outline">
                <Row>
                    <Col span={17}>
                        <div className="main-content">
                            <div className="announcement-section">
                                <h2>教学活动</h2>
                                <Divider style={{margin: '10px 0'}}/>
                                <Table dataSource={dataSource} columns={columns}/>
                            </div>
                        </div>
                    </Col>
                    <Col span={5}>
                        <div className="operation-board">
                            <h2>教学日历</h2>
                            <div className="site-calendar-demo-card">
                                <Calendar fullscreen={false} onPanelChange={onPanelChange}/>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}
