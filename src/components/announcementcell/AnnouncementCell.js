import './AnnouncementCell.css';

import {UserOutlined} from '@ant-design/icons';
import {Avatar, Col, Divider, Row, Typography} from 'antd';
import React from 'react';

const {Paragraph} = Typography;

class AnnouncementCell extends React.Component {

    render() {
        // eslint-disable-next-line react/prop-types
        const {title, content, msgTime} = this.props.announcement;
        return (
            <div className="announcement-cell">
                <Row>
                    <Col span={2}>
                        <Avatar size={48} icon={<UserOutlined/>}/>
                    </Col>
                    <Col span={18}>
                        <Row>
                            <Col span={24}>
                                <p className="announce-title">{title}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24}>
                                <Paragraph ellipsis>{content}</Paragraph>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={4}>
                        <p>发布在</p>
                        <p>{msgTime}</p>
                    </Col>
                </Row>
                <Divider style={{margin: '10px 0'}}/>
            </div>
        );
    }
}

export default AnnouncementCell;
