import 'antd/dist/antd.css';
import './headercss.css';

import { DownOutlined } from '@ant-design/icons';
import { Col, Dropdown, Input, Menu, Row } from 'antd';
import React from 'react';

import logo from '../../assets/logo.png';

const { Search } = Input;

class MyHeader extends React.Component {
  render() {
    const menu = (
      <Menu>
        <Menu.Item>
          <a href={'#'}>因为我们好</a>
        </Menu.Item>
        <Menu.Item>
          <a href={'#'}>因为我们棒</a>
        </Menu.Item>
        <Menu.Item>
          <a href={'#'}>因为我们强</a>
        </Menu.Item>
      </Menu>
    );
    return (
      <div className="header">
        <div className="header-wrapper">
          <Row style={{ height: 28 }}>
            <Col span={1} style={{ height: 28, paddingLeft:15}}>
              <img src={logo} alt={'logo'} height={30} width={30} />
            </Col>
            <Col span={2} style={{ height: 28 }}>
              <Dropdown overlay={menu}>
                <a className="header-link" onClick={(e) => e.preventDefault()}>
                  为什么选择小箱交 <DownOutlined />
                </a>
              </Dropdown>
            </Col>
            <Col span={1} style={{ height: 28, marginLeft:10 }}>
              <a className="header-link">我的课程</a>
            </Col>
            <Col span={1} style={{ height: 28, marginLeft:10 }}>
              <a className="header-link">我的作业</a>
            </Col>
            <Col span={1} style={{ height: 28, marginLeft:10 }}>
              <a className="header-link">我的分数</a>
            </Col>
            <Col span={4} offset={8} style={{ height: 28 }}>
              <Search placeholder="搜索课程" onSearch={(value) => console.log(value)} style={{ width: 200, height: 28 }} />
            </Col>
            <Col span={1}>
              <a className="header-link">登 录</a>
            </Col>
            <Col>
              <a className="header-link sign-up">注 册</a>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default MyHeader;
