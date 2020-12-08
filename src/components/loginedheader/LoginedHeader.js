import 'antd/dist/antd.css';
import './LoginHeader.css';

import { BellOutlined, CaretDownOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Badge, Col, Dropdown, Input, Menu, Row } from 'antd';
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
    let userType = 2;
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
          <a href={'/message'}>通知</a>
        </Menu.Item>
        <Menu.Item key="1">
          <a href={'/user'}>个人资料</a>
        </Menu.Item>
        <Menu.Item key="2">
          <a href={'/file'}>文件</a>
        </Menu.Item>
        <Menu.Item key="3">
          <a href={'/setting'}>个人设置</a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="4">
          <a href={'/'}onClick={this.logoutOnClick}>退出登录</a>
        </Menu.Item>
      </Menu>
    );

    const userType = this.state.userType === 1;

    return (
      <div className="header">
        <div className="header-wrapper">
          <Row style={{ height: 28 }}>
            <Col span={1} style={{ height: 28, paddingLeft: 15 }}>
              <a href={'/'}>
                <img src={logo} alt={'logo'} height={30} width={30} />
              </a>
            </Col>
            <Col span={4} style={{ height: 28 }}>
              <Search placeholder="搜索课程" onSearch={(value) => console.log(value)} className="logined-search" />
            </Col>
            <Col  span={1} style={{ height: 28, marginLeft: -20}}>
              <a href={'/'} className="header-link">
                首页
              </a>
            </Col>
            {/* <Col style={{ height: 28, marginLeft: 20 }}>
              <a href={'/class'} className="header-link">
                我的课程
              </a>
            </Col>
            <Col style={{ height: 28, marginLeft: 20 }}>
              <a href={'/homework'} className="header-link">
                我的作业
              </a>
            </Col>
            <Col style={{ height: 28, marginLeft: 20 }}>
              <a href={'/release'} className="header-link">
                发布作业
              </a>
            </Col>
            <Col style={{ height: 28, marginLeft: 20 }}>
              <a href={'/correct'} className="header-link">
                批改作业
              </a>
            </Col>
            <Col style={{ height: 28, marginLeft: 20 }}>
              <a href={'/teacher'} className="header-link">
                教师界面
              </a>
            </Col> */}
            {
            userType ?
            <Col sapn={1} styles={{height: 28, marginLeft:-40}}>
              <a href={'/addclass'} className="header-link">
                新建课程
              </a>
            </Col>
            :
            <></>
            }

            <Col offset={15} style={{ paddingTop: 7, marginRight: 5, paddingLeft: 40 }}>
              <BellOutlined style={{ color: 'white', fontSize: 18 }} />
              <Badge status="processing" style={{ marginTop: -10 }} />
            </Col>
            {/* <Col style={{paddingTop:6}}>*/}
            {/*    <Dropdown overlay={menu} trigger={['click']} className="mydropdown">*/}
            {/*        <div>*/}
            {/*            <PlusOutlined style={{color:"white"}}/>*/}
            {/*            <CaretDownOutlined style={{color:"white", fontSize:12}}/>*/}
            {/*        </div>*/}
            {/*    </Dropdown>*/}
            {/* </Col>*/}
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
