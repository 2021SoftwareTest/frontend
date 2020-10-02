import {Layout, Menu} from 'antd';
import { Icon } from '@ant-design/compatible';
import React from 'react';

import {history} from "../../utils/history";

// eslint-disable-next-line no-unused-vars
const { SubMenu } = Menu;
const { Sider } = Layout;

export class SideBar extends React.Component {

    state = {
        collapsed: false,
    };

    onCollapse = (collapsed) => {
        // eslint-disable-next-line no-empty
        if (collapsed) {

        }
        console.log(collapsed);
        this.setState({ collapsed });
    };

    bookOnClick = () => {
        history.push("/");
    };

    render() {
        return (
            <div style={{width:this.state.collapsed ? "80px" : "180px", maxWidth:this.state.collapsed ? "80px" : "180px", minWidth:this.state.collapsed ? "80px" : "180px" }}>
                <div className="mySider">
                    <Sider collapsible collapsed={this.state.collapsed} width="180px" onCollapse={this.onCollapse} className="sider" style={{ background: '#fff'}}>
                        <Menu defaultSelectedKeys={['1']} mode="inline">
                            <Menu.Item key="1" onClick={this.bookOnClick}>
                                <Icon type="read" style={{ fontSize: '18px'}}/>
                                <span style={{ fontSize: '16px'}}>控制面板</span>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Icon type="shopping-cart" style={{ fontSize: '18px'}} />
                                <span style={{ fontSize: '16px'}}>课程</span>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Icon type="solution"  style={{ fontSize: '18px'}}/>
                                <span style={{ fontSize: '16px'}}>作业</span>
                            </Menu.Item>
                            <Menu.Item key="4">
                                <Icon type="user" style={{ fontSize: '18px'}}/>
                                <span style={{ fontSize: '16px'}}>小组</span>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                </div>
            </div>

        );
    }

}
