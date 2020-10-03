import './HomeworkHeader.css';

import { DropboxOutlined, EditOutlined, ProjectOutlined, TeamOutlined, UserOutlined} from '@ant-design/icons';
import {Col, Menu, Row} from 'antd';
import React from "react";

export class HomeworkHeader extends React.Component {
    state = {
        current: 'Homework',
    };

    handleClick = (e) => {
        console.log('click ', e);
        this.setState({current: e.key});
    };

    render() {
        const {current} = this.state;
        return (
            <div>
                <Row >
                    <Col span={5}>
                        <DropboxOutlined style={{fontSize:60}}/>
                    </Col>
                    <Col>
                        <Row>
                            <h1 className={"text-gray-dark lh-condensed mb-1 mb-md-2"} >六年级语文/作业1</h1>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
                        <Menu.Item key="Homework" icon={<EditOutlined />}>
                            作业
                        </Menu.Item>
                        <Menu.Item key="People" icon={<UserOutlined />}>
                            问题
                        </Menu.Item>
                        <Menu.Item key="Teams" icon={<TeamOutlined />}>
                            讨论
                        </Menu.Item>
                        <Menu.Item key="Project" icon={<ProjectOutlined />}>
                            分数
                        </Menu.Item>
                    </Menu>
                </Row>
            </div>
        );
    }
}
