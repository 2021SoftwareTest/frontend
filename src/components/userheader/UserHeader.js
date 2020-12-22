import './UserHeader.css';

import { EditOutlined, ProjectOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';
import { Col, Menu, Row } from 'antd';
import React from 'react';

class UserHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 'Homework',
    };
    // eslint-disable-next-line react/prop-types
    this.menuCallback = this.props.menuCallback;
  }
  state = {
    current: 'Homework',
  };

  handleClick = (e) => {
    console.log('click ', e);
    this.menuCallback(e.key);
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;
    return (
      <div className="user-header">
        <Row>
          <Col span={24}>
            <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal" className="teacher-menu">
              <Menu.Item key="Message" icon={<EditOutlined />}>
                通知
              </Menu.Item>
              <Menu.Item key="Profile" icon={<UserOutlined />}>
                个人资料
              </Menu.Item>
              <Menu.Item key="File" icon={<TeamOutlined />}>
                文件
              </Menu.Item>
              <Menu.Item key="Setting" icon={<ProjectOutlined />}>
                设置
              </Menu.Item>
            </Menu>
          </Col>
        </Row>
      </div>
    );
  }
}

export default UserHeader;
