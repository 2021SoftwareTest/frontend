import './ClassNotice.css';

import {DeleteOutlined, DownOutlined, PlusOutlined} from '@ant-design/icons';
import {Button, Col, Divider, Dropdown, Input, Menu, Row} from 'antd';
import React from 'react';

import AnnouncementCell from '../announcementcell/AnnouncementCell';
import {getMessageByCourseId} from "../../services/messageService";

function handleMenuClick(e) {
    console.log('click', e);
}

const menu = (
    <Menu onClick={handleMenuClick}>
        <Menu.Item key="1">全部</Menu.Item>
        <Menu.Item key="2">未读</Menu.Item>
    </Menu>
);

const {Search} = Input;

export class ClassNotice extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            announcements: [],
            courseId: props.courseId,
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                courseId:parseInt(this.props.courseId),
            });
            const courseId = this.state.courseId;
            if (courseId === -1) {
                return;
            }
            const data = {
                courseId: courseId
            };
            const callback = (data) => {
                console.log(data);
                this.setState({announcements: data.data});
            };
            getMessageByCourseId(data, callback);
        }, 100);
    }

    // UNSAFE_componentWillReceiveProps() {
    //     const data = {
    //         courseId: courseId
    //     };
    //     const callback = (data) => {
    //         console.log(data);
    //         this.setState({announcements: data.data});
    //     };
    //     getMessageByCourseId(data, callback);
    // }

    render() {
        let announcementContent = this.state.announcements.map((item) => <AnnouncementCell announcement={item}
                                                                                            key={item.title}/>);

        return (
            <div className="class-notice">
                <Row>
                    <Col span={20}>
                        <div className="announcement-section">
                            <h2>最近的公告</h2>
                            <Row>
                                <Col span={2}>
                                    {/*<Dropdown overlay={menu}>*/}
                                    {/*    <Button>*/}
                                    {/*        全部 <DownOutlined/>*/}
                                    {/*    </Button>*/}
                                    {/*</Dropdown>*/}
                                </Col>
                                <Col span={4}>
                                    {/*<Search placeholder="搜索" onSearch={(value) => console.log(value)}*/}
                                    {/*        style={{width: 200}}/>*/}
                                </Col>
                                <Col span={14}></Col>
                                <Col span={1}>
                                    {/*<DeleteOutlined/>*/}
                                </Col>
                                <Col span={2}>
                                    {/*<Button type="primary" icon={<PlusOutlined/>}>*/}
                                    {/*    公告*/}
                                    {/*</Button>*/}
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
