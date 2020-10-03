import './SideBar.css';

import {
    BookOutlined, TeamOutlined
} from '@ant-design/icons';
import {Layout, Menu} from 'antd';
import React from 'react';

const {Sider} = Layout;

const {SubMenu} = Menu;

export class SideBar extends React.Component {

    handleClick = (e) => {
        console.log('click ', e);
    };

    render() {
        return (
            <Sider width={300} className="site-layout-background"
                collapsible={true}
                style={{
                    overflow: 'auto',
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                }}
                theme={'white'}
            >
                <Menu onClick={this.handleClick}
                      style={{width: 256, height: '100%', borderRight: 0}}
                      defaultSelectedKeys={[]}
                      defaultOpenKeys={['sub1', 'sub2']}
                      mode="inline">
                    <SubMenu
                        key="sub1"
                        title={
                            <span>
                                <BookOutlined/>
                                <span>我的课程</span>
                            </span>
                        }
                    >
                        <Menu.Item key="1"><BookOutlined/>语文</Menu.Item>
                        <Menu.Item key="2"><BookOutlined/>数学</Menu.Item>
                        <Menu.Item key="3"><BookOutlined/>英语</Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub2"
                        title={
                            <span>
                                <TeamOutlined/>
                                <span>我的小组</span>
                            </span>
                        }
                    >
                        <Menu.Item key="4"><TeamOutlined/>语文学习小组</Menu.Item>
                        <Menu.Item key="5"><TeamOutlined/>数学学习小组</Menu.Item>
                        <Menu.Item key="6"><TeamOutlined/>英语学习小组</Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
        );
    }
}
