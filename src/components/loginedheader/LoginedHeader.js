import 'antd/dist/antd.css';
import './LoginHeader.css';

import {BellOutlined, CaretDownOutlined, UserOutlined} from '@ant-design/icons';
import {Avatar, Badge, Col, Dropdown, Input, Menu, message, Row} from 'antd';
import {Link} from 'react-router-dom';
import {history} from "../../utils/history";
import React from 'react';

import logo from '../../assets/logo.png';
import {logout} from '../../services/userService';

const {Search} = Input;

class LoginedHeader extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userType: 2
        };
    }

    componentDidMount() {
        const user = localStorage.getItem("user");
        let userType = 1;
        if (user) {
            userType = JSON.parse(user).userType;
        }
        this.setState({
            userType: userType,
        });
    }

    logoutOnClick = () => {
        const callback = (data) => {
            console.log(data);
            if (data.status === 200) {
                localStorage.removeItem('user');
                window.location.assign("/#/login");
                message.success(data.msg);
            } else {
                message.error("登出失败");
            }
        };
        logout(callback);
    };

    render() {
        const menu = (
            <Menu>
                <Menu.Item key="1">
                    <Link to={{pathname: '/user'}}>个人中心</Link>
                </Menu.Item>
                <Menu.Divider/>
                <Menu.Item key="4">
                    <div onClick={this.logoutOnClick}> 退出登录 </div>
                </Menu.Item>
            </Menu>
        );

        const userType = this.state.userType <= 1;

        return (
            <div className="header">
                <div className="header-wrapper">
                    <Row style={{height: 28}}>
                        <Col span={1} style={{height: 28, paddingLeft: 15}}>
                            <Link to={{pathname: '/'}}>
                                <img src={logo} alt={'logo'} height={30} width={30}/>
                            </Link>
                        </Col>
                        <Col span={4} style={{height: 28}}>
                            <Search placeholder="搜索课程" onSearch={(value) => console.log(value)}
                                    className="logined-search" disabled={true}/>
                        </Col>
                        <Col span={1} style={{height: 28, marginLeft: -20}}>
                            <Link to={{pathname: '/'}} className="header-link">
                                首页
                            </Link>
                        </Col>
                        {
                            userType ?
                                    <Link to={{pathname: '/addclass'}} className="header-link">
                                        新建课程
                                    </Link>
                                :
                                <></>
                        }
                        <Col span={1} style={{height: 28, marginLeft: 20}}>
                            <Link to={{pathname: '/test'}} className="header-link">
                                测试功能
                            </Link>
                        </Col>
                        <Col offset={13} style={{paddingTop: 7, marginRight: 5, paddingLeft: 40}}>
                            <Link to={{pathname: '/user'}}>
                                <BellOutlined style={{color: 'white', fontSize: 18}}/>
                            </Link>
                            <Badge status="processing" style={{marginTop: -10}}/>
                        </Col>
                        <Col style={{marginLeft: 10}}>
                            <Dropdown overlay={menu} trigger={['click']} className="mydropdown">
                                <div>
                                    <Avatar icon={<UserOutlined/>} style={{marginTop: -3}}/>
                                    <CaretDownOutlined
                                        style={{color: 'white', marginLeft: 2, marginTop: 11, fontSize: 12}}/>
                                </div>
                            </Dropdown>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default LoginedHeader;
