import './NotificationList.css';

import {DeleteOutlined, DownOutlined, PlusOutlined} from '@ant-design/icons';
import {Button, Col, Divider, Dropdown, Input, Menu, Row} from 'antd';
import React from 'react';

import AnnouncementCell from '../announcementcell/AnnouncementCell';
import {getMessageByCourseId, getMessageByUserId} from "../../services/messageService";

function handleMenuClick(e) {
    console.log('click', e);
}

const menu = (
    <Menu onClick={handleMenuClick}>
        <Menu.Item key="1">全部</Menu.Item>
        <Menu.Item key="2">未读</Menu.Item>
        <Menu.Item key="3">已读</Menu.Item>
    </Menu>
);

const {Search} = Input;

export class NotificationList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            announcements: [],
        };
    }

    componentDidMount() {
        const callback = (data) => {
            console.log("getMessageByUserId");
            console.log(data);
            this.setState({announcements: data.data});
        };
        getMessageByUserId(undefined, callback);
    }

    render() {
        const announcementContent = this.state.announcements.map((item) => <AnnouncementCell announcement={item}
                                                                                          key={item.title}/>);
        return (
            <div className="class-notice">
                <Row>
                    <Col span={20}>
                        <div className="announcement-section">
                            <h2>最近的通知</h2>
                            <Row>
                                <Col span={2}>
                                    <Dropdown overlay={menu}>
                                        <Button>
                                            全部 <DownOutlined/>
                                        </Button>
                                    </Dropdown>
                                </Col>
                                <Col span={4}>
                                    <Search placeholder="搜索" onSearch={(value) => console.log(value)}
                                            style={{width: 200}}/>
                                </Col>
                                <Col span={14}></Col>
                                <Col span={1}>
                                    <DeleteOutlined/>
                                </Col>
                                <Col span={2}>
                                    <Button type="primary" icon={<PlusOutlined/>}>
                                        通知
                                    </Button>
                                </Col>
                            </Row>
                            <Divider style={{margin: '10px 0'}}/>
                            {announcementContent}
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}
