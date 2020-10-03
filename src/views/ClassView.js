import {Layout} from 'antd';
import React from 'react';
import {withRouter} from "react-router-dom";

import MyHeader from "../components/header/MyHeader";
import {SideBar} from "../components/sidebar/SideBar";

const { Header, Content, Footer } = Layout;

class ClassView extends React.Component {

    constructor(props) {
        super(props);

    }

    componentDidMount() {
    }

    render() {
        return (
            <Layout className="layout">

                <Header>
                    <MyHeader />
                </Header>
                <Layout>
                    <SideBar/>
                    <Content style={{ padding: '0 50px' }}>
                        <div className="home-content">

                            <div className={"foot-wrapper"}>
                            </div>
                        </div>
                    </Content>
                </Layout>
                <Layout>
                    <Footer/>
                </Layout>
            </Layout>
        );
    }
}

export default withRouter(ClassView);
