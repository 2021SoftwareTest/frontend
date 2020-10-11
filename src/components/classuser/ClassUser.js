import "./ClassUser.css";

import {DownOutlined} from '@ant-design/icons';
import { Button, Col, Divider, Dropdown, Input, Menu, Row, Table} from "antd";
import React from 'react';

function handleMenuClick(e) {
    console.log('click', e);
}

const userlist = [
    {
        name: "刘瑾玖", class: "六年级语文", role: "老师"
    },
    {
        name: "胡圆圆", class: "六年级语文", role: "助教"
    },
    {
        name: "胡源源", class: "六年级语文", role: "学生"
    },
    {
        name: "胡媛媛", class: "六年级语文", role: "学生"
    },
    {
        name: "胡远远", class: "六年级语文", role: "学生"
    },
];

const columns = [
    {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '班级',
        dataIndex: 'class',
        key: 'class',
    },
    {
        title: '身份',
        dataIndex: 'role',
        key: 'role',
    },
];
const menu = (
    <Menu onClick={handleMenuClick}>
        <Menu.Item key="1">
            全部
        </Menu.Item>
        <Menu.Item key="2">
            学生
        </Menu.Item>
        <Menu.Item key="3">
            老师
        </Menu.Item>
        <Menu.Item key="3">
            助教
        </Menu.Item>
    </Menu>
);

const {Search} = Input;

export class ClassUser extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="class-user">
                <Row>
                    <Col span={20}>
                        <Row>
                            <Col span={2}>
                                <Dropdown overlay={menu}>
                                    <Button>
                                        全部 <DownOutlined/>
                                    </Button>
                                </Dropdown>
                            </Col>
                            <Col span={4}>
                                <Search
                                    placeholder="搜索"
                                    onSearch={(value) => console.log(value)}
                                    style={{width: 200}}
                                />
                            </Col>
                            <Col span={12}>
                            </Col>
                            <Col span={6}>
                                <Button>添加</Button>
                                <Button>删除</Button>
                                <Button>批量导入</Button>
                            </Col>
                        </Row>
                        <Divider style={{margin: "10px 0"}}/>
                        <Table dataSource={userlist} columns={columns}/>
                    </Col>
                </Row>
            </div>
        );
    }

}
