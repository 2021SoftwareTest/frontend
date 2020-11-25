import './SideBar.css';

import {
    BookOutlined, TeamOutlined
} from '@ant-design/icons';
import {Layout, Menu, message} from 'antd';
import React from 'react';

import {getCourseList} from '../../services/courseService';

const {Sider} = Layout;

const {SubMenu} = Menu;

export class SideBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          courseList:[]
        };
    }
    handleClick = (e) => {
        console.log('click ', e);
    };

    componentDidMount() {
        let userId = 1;
        let user = JSON.parse(localStorage.getItem('user'));
        if(user)
        {
            userId = user.userID;
        }
        const data = {
            userId:userId,
        };
        const callback = (data) => {
            console.log(data);
            if(data.status === 200){
                console.log(data);
                if(!!data.data){
                    this.setState({
                        courseList:data.data
                    });
                }
                message.success(data.msg);
            }
            else{
                message.error(data.msg);
            }
        };
        getCourseList(data, callback);
    }

    render() {
        const courseList = this.state.courseList.map((item) => (<Menu.Item key={item.courseID}><BookOutlined/>{item.courseName}</Menu.Item>));
        return (
            <Sider width="16%" className="site-layout-background"
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
                      style={{ height: '100%', borderRight: 0}}
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
                        {courseList}
                    </SubMenu>
                    {/* no teams */}
                    {/* <SubMenu
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
                    </SubMenu> */}
                </Menu>
            </Sider>
        );
    }
}
