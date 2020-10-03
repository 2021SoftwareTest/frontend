import './ClassHeader.css';

import { DropboxOutlined, EditOutlined, ProjectOutlined, TeamOutlined, UserOutlined} from '@ant-design/icons';
import {Col, Menu, Row} from 'antd';
import React from "react";

export class ClassHeader extends React.Component {
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
                            <h1 className={"text-gray-dark lh-condensed mb-1 mb-md-2"} >六年级语文</h1>
                        </Row>
                        <Row>
                            <div className={"text-gray-light"}>
                            六年级语文由刘瑾玖老师授课
                            </div>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
                        <Menu.Item key="Homework" icon={<EditOutlined />}>
                            Homework
                        </Menu.Item>
                        <Menu.Item key="People" icon={<UserOutlined />}>
                            People
                        </Menu.Item>
                        <Menu.Item key="Teams" icon={<TeamOutlined />}>
                            Teams
                        </Menu.Item>
                        <Menu.Item key="Project" icon={<ProjectOutlined />}>
                            Project
                        </Menu.Item>
                    </Menu>
                </Row>
            </div>
        );
    }
}
