import {Divider, Layout} from 'antd';
import React from 'react';
import {withRouter} from "react-router-dom";

import {BackToTop} from "../../components/backtotop/BackToTop";
import MyFooter from "../../components/footer/MyFooter";
import MyHeader from "../../components/header/MyHeader";
import {HomeworkList} from "../../components/homeworklist/HomeworkList";
import {ReplyList} from "../../components/replylist/ReplyList";
import {SideBar} from "../../components/sidebar/SideBar";

const {Sider, Content, Footer} = Layout;

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
            <Layout>
                <MyHeader/>
                <Layout>
                    <Sider theme={'light'} width={300}>
                        <SideBar/>
                    </Sider>
                    <Layout>
                    <Content>
                        <Divider orientation="left">最近要做的作业</Divider>
                        <HomeworkList data={todoHomework}/>
                        <Divider orientation="left">已经完成的作业</Divider>
                        <HomeworkList data={doneHomework}/>
                    </Content>
                    <Sider theme={'light'} reverseArrow={true} width={300}>
                        <ReplyList/>
                    </Sider>
                    </Layout>
                </Layout>
                <BackToTop/>
                <Footer>
                    <MyFooter/>
                </Footer>
            </Layout>
        );
    }
}

export default withRouter(HomeView);
