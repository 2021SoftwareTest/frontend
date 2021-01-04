import './ClassDiscuss.css';

import { DownOutlined, PlusOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Button, Col, Comment, Divider, Dropdown, Input, Menu, Row } from 'antd';
import React from 'react';

function handleMenuClick(e) {
  console.log('click', e);
}

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">全部</Menu.Item>
    <Menu.Item key="2">未读</Menu.Item>
  </Menu>
);

const { Search } = Input;

export class ClassDiscuss extends React.Component {

  componentDidMount() {}

  render() {
    return (
      <div className="class-discuss">
        <Row>
          <Col span={20}>
            <Row>
              <Col span={2}>
                <Dropdown overlay={menu}>
                  <Button>
                    全部 <DownOutlined />
                  </Button>
                </Dropdown>
              </Col>
              <Col span={4}>
                <Search placeholder="搜索" onSearch={(value) => console.log(value)} style={{ width: 200 }} />
              </Col>
              <Col span={14}></Col>

              <Col span={2}>
                <Button type="primary" icon={<PlusOutlined />}>
                  讨论
                </Button>
              </Col>
              <Col span={1}>
                <SettingOutlined />
              </Col>
            </Row>
            <Divider style={{ margin: '10px 0' }} />
            <Comment
              actions={[<span key="comment-nested-reply-to">回复</span>]}
              author={<p>胡媛媛</p>}
              avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt="Han Solo" />}
              content={<p>我们来讨论一下今天布置的三角函数题吧</p>}
            />
          </Col>
        </Row>
      </div>
    );
  }
}
