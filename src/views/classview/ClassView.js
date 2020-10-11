import './ClassView.css';

import { Col, Row } from 'antd';
import React from 'react';
import { withRouter } from 'react-router-dom';

import {ClassHeader} from "../../components/classheader/ClassHeader";
import Dashboard from "../../components/dashboard/Dashboard";
import MyFooter from '../../components/footer/MyFooter';
import {HomeworkList} from "../../components/homeworklist/HomeworkList";
import LoginedHeader from "../../components/loginedheader/LoginedHeader";

const Homework = [
    {
        title: '作业1',
        tag: '已完成',
        comment: '做的不错'
    },
    {
        title: '作业2',
        tag: '请订正',
        comment: '作文自己再琢磨琢磨'
    },
    {
        title: '作业3',
        tag: '已完成',
        comment: '有进步'
    },
    {
        title: '作业4',
        tag: '已结束',
        comment: '无'
    },
];

class ClassView extends React.Component {
    render() {
        return (
            <div>
                <LoginedHeader />
                <ClassHeader />
                <div className="class-container">
                    <Row>
                        <Col span={19} style={{paddingRight:27}}>
                            <HomeworkList data={Homework} />
                        </Col>
                        <Col span={5}>
                            <Dashboard />
                        </Col>
                    </Row>
                </div>
                <MyFooter />
            </div>
        );
    }
}

export default withRouter(ClassView);
