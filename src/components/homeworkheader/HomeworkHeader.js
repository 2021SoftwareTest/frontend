import './HomeworkHeader.css';

import {BookOutlined, CheckSquareOutlined, EditOutlined, UploadOutlined} from '@ant-design/icons';
import {Col, Menu, message, Row} from 'antd';
import React from 'react';
import {Link} from "react-router-dom";


// this.props.data = {title:, description:, note:, ...} 详情见“获取作业详情”
export class HomeworkHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 'Homework'
        };
        this.userType = this.props.userType;
        this.menuCallback = this.props.menuCallback;
        this.homeworkHeaderSetKeyFunCallback = this.props.homeworkHeaderSetKeyFunCallback;
        this.courseId = this.props.courseId;
        this.homeworkId = this.props.homeworkId;
    }

    componentDidMount() {
        this.homeworkHeaderSetKeyFunCallback(this.setKey);
    };

    handleClick = (e) => {
        if (this.userType === 1 && e.key === "Correct") {
            message.info("请在提交列表选择具体学生");
            return;
        }
        this.menuCallback(e.key);
        this.setState({current: e.key});
    };

    setKey = (key) => {     // 此函数作为对象赋给上层，使上层能控制下层的key
        this.setState({current: key});
    };

    render() {
        const {current} = this.state;
        const {title, courseId, homeworkId} = this.props.data;
        const courseName = "六年级语文";
        return (
            <div className="homework-header">
                <Row>
                    <Col span={4} style={{marginLeft: 40}}>
                        <svg className="class-svg" viewBox="0 0 16 16" version="1.1" width="16" height="16"
                             aria-hidden="true">
                            <path
                                fillRule="evenodd"
                                d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"
                            />
                        </svg>
                        <p className="homework-title">
                            <Link to={{pathname: "/class", search: "classId=" + courseId}}>{courseName}</Link>
                            &nbsp;/&nbsp;
                            <Link to={{pathname: "/homework", search: "homeworkId=" + homeworkId}}
                                  className="homework-name">{title}</Link>
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal"
                              className="homework-menu">
                            <Menu.Item key="Homework" icon={<EditOutlined/>}>
                                作 业
                            </Menu.Item>
                            {
                                (this.userType === 1) ? (
                                    <Menu.Item key="Submit" icon={<UploadOutlined/>}>
                                        提 交
                                    </Menu.Item>
                                ) : (
                                    <></>
                                )
                            }
                            <Menu.Item key="Correct" icon={<CheckSquareOutlined/>}>
                                批 改
                            </Menu.Item>
                            <Menu.Item key="Answer" icon={<BookOutlined/>}>
                                标 答
                            </Menu.Item>
                        </Menu>
                    </Col>
                </Row>
            </div>
        );
    }
}
