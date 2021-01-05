import './ReplyList.css';

import {Avatar, Divider, List} from 'antd';
import React from 'react';

const data = [
    {
        title: '语文1',
        comment: '做的不错',
        score: 95,
    },
    {
        title: '数学2',
        comment: '第五题订正一下',
        score: 80,
    },
    {
        title: '英语3',
        comment: 'Good job',
        score: 100,
    },
    {
        title: '编程4',
        comment: '下课过来找我',
        score: 0,
    },
];

export class ReplyList extends React.Component {
    render() {
        return (
            <div>
                <Divider orientation="left">教师回复</Divider>
                <div className="reply-list">
                    <List
                        itemLayout="horizontal"
                        dataSource={data}
                        renderItem={(item) => (
                            <List.Item extra={<div>score: {item.score}</div>}>
                                <List.Item.Meta avatar={<Avatar
                                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>}
                                                title={<a href="https://ant.design">{item.title}</a>}
                                                description={item.comment}/>
                            </List.Item>
                        )}
                    />
                </div>
            </div>
        );
    }
}
