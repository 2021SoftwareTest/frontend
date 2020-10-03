import {
    EditOutlined
} from '@ant-design/icons';
import { List } from 'antd';
import React from "react";

const data = [
    {
        title: '语文作业1',
    },
    {
        title: '语文作业2',
    },
    {
        title: '数学作业3',
    },
    {
        title: '英语作业4',
    },
];

export class HomeworkList extends React.Component {

    render() {
        return (
            <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={(item) => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<EditOutlined />}
                            title={<a href="https://ant.design">{item.title}</a>}
                            description="deadline:Today"
                        />
                    </List.Item>
                )}
            />
        );
    }
}
