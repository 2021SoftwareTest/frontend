import './ReplyList.css';

import {Avatar, Divider, List} from 'antd';
import React from 'react';

import {getMessageByUserId} from "../../services/messageService";
import {Link} from "react-router-dom";

export class ReplyList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            announcements: [],
        };
    }

    componentDidMount() {

        const callback = (data) => {
            console.log(data);
            this.setState({announcements: data.data});
        };
        getMessageByUserId(undefined, callback);
    }

    render() {
        const announcements = this.state.announcements;
        return (
            <div>
                <Divider orientation="left">教师回复</Divider>
                <div className="reply-list">
                    <List
                        itemLayout="horizontal"
                        dataSource={announcements}
                        renderItem={(item) => (
                            // <List.Item extra={<div>score: {item.score}</div>}>
                            <List.Item>
                                <List.Item.Meta avatar={<Avatar
                                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>}
                                                title={<Link to={{
                                                    pathname: "/class",
                                                    search: "?classId?" + item.courseId
                                                }}>{item.title}</Link>}
                                                description={item.content}/>
                            </List.Item>
                        )}
                    />
                </div>
            </div>
        );
    }
}
