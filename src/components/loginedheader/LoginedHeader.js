import 'antd/dist/antd.css';
import './LoginHeader.css';

import { BellOutlined, CaretDownOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Badge, Col, Dropdown, Input, Menu, Row } from 'antd';
import {Link} from 'react-router-dom';
import React from 'react';

import logo from '../../assets/logo.png';
import { logout } from '../../services/userService';

const { Search } = Input;

class LoginedHeader extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userType:2
    };
  }

  componentDidMount()
  {
    const user = localStorage.getItem("user");
    let userType = 1;
    if (user)
    {
      userType = JSON.parse(user).user.userType;
    }
    this.setState({
      userType:userType,
    });
  }

  logoutOnClick = () => {
    logout();
  };

  render() {
    const menu = (
      <Menu>
        <Menu.Item key="0">
          <Link to={{pathname:'/user'}}>通知</Link>
        </Menu.Item>
        <Menu.Item key="1">
        <Link to={{pathname:'/user'}}>个人资料</Link>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="4">
        <Link to={{pathname:'/login'}} onClick={this.logoutOnClick}> 退出登录 </Link>
        </Menu.Item>
      </Menu>
    );

    const userType = this.state.userType <= 1;

    return (
      <div className="header">
        <div className="header-wrapper">
          <Row style={{ height: 28 }}>
            <Col span={1} style={{ height: 28, paddingLeft: 15 }}>
            <Link to={{pathname:'/'}}>
                <img src={logo} alt={'logo'} height={30} width={30} />
            </Link>
            </Col>
            <Col span={4} style={{ height: 28 }}>
              <Search placeholder="搜索课程" onSearch={(value) => console.log(value)} className="logined-search" />
            </Col>
            <Col  span={1} style={{ height: 28, marginLeft: -20}}>
            <Link to={{pathname:'/'}} className="header-link">
                首页
            </Link>
            </Col>
            {
            userType ?
            <Col sapn={1} styles={{height: 28, marginLeft:-40}}>
              <Link to={{pathname:'/addclass'}} className="header-link">
                新建课程
              </Link>
            </Col>
            :
            <></>
            }

            <Col offset={15} style={{ paddingTop: 7, marginRight: 5, paddingLeft: 40 }}>
              <a href = '/notification'>
              <BellOutlined style={{ color: 'white', fontSize: 18 }} />
              </a>
              <Badge status="processing" style={{ marginTop: -10 }} />
            </Col>
            <Col style={{ marginLeft: 10 }}>
              <Dropdown overlay={menu} trigger={['click']} className="mydropdown">
                <div>
                  <Avatar icon={<UserOutlined />} style={{ marginTop: -3 }} />
                  <CaretDownOutlined style={{ color: 'white', marginLeft: 2, marginTop: 11, fontSize: 12 }} />
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
