import "./HomeView.css";

import {Col, Divider, Row} from 'antd';
import React from 'react';
import {withRouter} from "react-router-dom";

import {BackToTop} from "../../components/backtotop/BackToTop";
import MyFooter from "../../components/footer/MyFooter";
import {HomeworkList} from "../../components/homeworklist/HomeworkList";
import LoginedHeader from "../../components/loginedheader/LoginedHeader";
import {ReplyList} from "../../components/replylist/ReplyList";
import {SideBar} from "../../components/sidebar/SideBar";


const todoHomework = [
    {
        title: '语文作业3',
        tag: '未读',
        comment:'deadline: Today'
    },
    {
        title: '语文作业4',
        tag: '未读',
        comment:'deadline: Today'
    },
    {
        title: '数学作业2',
        tag: '未读',
        comment:'最后一题比较难，同学们注意一下'
    },
    {
        title: '英语作业2',
        tag: '正在做',
        comment:'deadline: Today'
    },
];
const doneHomework = [
    {
        title: '语文作业1',
        tag: '已完成',
        comment: '做的不错'
    },
    {
        title: '语文作业2',
        tag: '请订正',
        comment: '作文自己再琢磨琢磨'
    },
    {
        title: '数学作业1',
        tag: '已完成',
        comment: '有进步'
    },
    {
        title: '英语作业1',
        tag: '已结束',
        comment: '无'
    },
];

class HomeView extends React.Component {

    constructor(props) {
        super(props);

    }

    componentDidMount() {
        const user = localStorage.getItem("user");
        this.setState({user: user});
    }

    render() {
        return (
            <div className="home-view">
                <LoginedHeader />
                <Row style={{minHeight: "100vh"}}>
                    <Col span={4}>
                        <SideBar />
                    </Col>
                    <Col span={20} style={{paddingLeft:10}}>
                        <Row>
                            <Col span={18} style={{paddingRight:10}}>
                                <Divider orientation="left">最近要做的作业</Divider>
                                <HomeworkList data={todoHomework} />
                                <Divider orientation="left">已经完成的作业</Divider>
                                <HomeworkList data={doneHomework} />
                            </Col>
                            <Col span={6}>
                                <ReplyList />
                            </Col>
                        </Row>
                        <Row>
                            <Col span={16}>
                                <MyFooter />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <BackToTop />
            </div>
        );
    }
}

export default withRouter(HomeView);
