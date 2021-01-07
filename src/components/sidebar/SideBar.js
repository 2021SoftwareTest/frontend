import './SideBar.css';

import {BookOutlined} from '@ant-design/icons';
import {Layout, Menu, message} from 'antd';
import React from 'react';
import {Link} from 'react-router-dom';

import {getCourseList} from '../../services/courseService';

const {Sider} = Layout;

const {SubMenu} = Menu;

export class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            courseList: [],
            homeworkList: [],
        };
    }

    componentDidMount() {
        const courseList = sessionStorage.getItem('courseList');
        if (courseList)
        {
            console.log(courseList);
            this.setState({
                courseList: JSON.parse(courseList)
            });
            return;
        }

        const userId = JSON.parse(localStorage.getItem('user')).userID;
        const data = {
            userId: userId,
        };
        const callback = (data) => {
            console.log(data);
            if (data.status === 200) {
                if (data.data) {
                    this.setState({
                        courseList: data.data,
                    });
                }
                sessionStorage.setItem('courseList', JSON.stringify(data.data));
            } else {
                message.error(data.msg);
            }
        };
        getCourseList(data, callback);
    }

    render() {

        const courseList = this.state.courseList.map((item) => (
            <Menu.Item key={item.courseId}>
                <Link to={{pathname: '/class', search: '?id=' + item.courseId}}>
                    <BookOutlined/>
                    {item.courseName}
                </Link>
            </Menu.Item>
        ));
        return (
            <Sider
                width="16%"
                className="site-layout-background"
                collapsible={true}
                style={{
                    overflow: 'auto',
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                }}
                theme={'white'}
            >
                <Menu style={{height: '100%', borderRight: 0}} defaultSelectedKeys={[]}
                      defaultOpenKeys={['sub1']} mode="inline">
                    <SubMenu
                        key="sub1"
                        title={<div><BookOutlined/>我的课程</div>}>
                        {courseList}
                    </SubMenu>
                </Menu>
            </Sider>
        );
    }
}
