import { Col, Row } from 'antd';
import React from 'react';
import { withRouter } from 'react-router-dom';

import {ClassHeader} from "../../components/classheader/ClassHeader";
import MyFooter from '../../components/footer/MyFooter';
import MyHeader from '../../components/header/MyHeader';
import {HomeworkList} from "../../components/homeworklist/HomeworkList";

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
                <MyHeader />
                <Col span={12} offset={6}>
                <Row>
                   <ClassHeader/>
                </Row>
                    <HomeworkList data={Homework}/>
                </Col>
                <MyFooter />
            </div>
        );
    }
}

export default withRouter(ClassView);
