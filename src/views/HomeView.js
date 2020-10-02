import '../css/home.css';

import {Layout} from 'antd';
import React from 'react';
import {withRouter} from "react-router-dom";

// import {Header} from "../components/header/Header";
import {SideBar} from "../components/sidebar/SideBar";
import {ClassList} from "../components/classlist/Classlist";

const { Header, Content} = Layout;

class HomeView extends React.Component {

    constructor(props) {
        super(props);

    }

    componentDidMount() {
        const user = localStorage.getItem("user");
        this.setState({user:user});
    }

    render() {
        return (
            <Layout className="layout">

                <Header>
                    {/* <HeaderInfo />*/}
                </Header>
                <Layout>
                    <SideBar />
                    <Content style={{ padding: '0 50px' }}>
                        <div className="home-content">
                            <ClassList />
                            <div className={"foot-wrapper"}>
                            </div>
                        </div>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default withRouter(HomeView);
