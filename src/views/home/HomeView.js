import {Layout} from 'antd';
import Sider from "antd/lib/layout/Sider";
import React from 'react';
import {withRouter} from "react-router-dom";

import MyFooter from "../../components/footer/MyFooter";
import MyHeader from "../../components/header/MyHeader";
import {HomeworkList} from "../../components/homeworklist/HomeworkList";
import {ReplyList} from "../../components/replylist/ReplyList";
import {SideBar} from "../../components/sidebar/SideBar";

const {Header, Content, Footer} = Layout;

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
            <Layout theme={'light'}>
                <Header theme={'light'}>
                    <MyHeader/>
                </Header>
                <Layout>
                    <Sider theme={'light'}>
                        <SideBar/>
                    </Sider>
                    <Content>
                        <div>
                            最近要做的作业
                        </div>
                        <HomeworkList/>
                        <div>
                            已经完成的作业
                        </div>
                        <HomeworkList/>
                    </Content>
                    <Sider theme={'light'}>
                        <div>
                            教师回复
                        </div>
                        <ReplyList/>
                    </Sider>
                </Layout>
                <Footer>
                    <MyFooter/>
                </Footer>
            </Layout>
        );
    }
}

export default withRouter(HomeView);
