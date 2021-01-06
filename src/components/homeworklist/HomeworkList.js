import './HomeworkList.css';

import {
    CheckCircleOutlined,
    CloseCircleOutlined,
    EditOutlined,
    ExclamationCircleOutlined,
    MinusCircleOutlined,
    SyncOutlined
} from '@ant-design/icons';
import {List, Tag} from 'antd';
import React from 'react';
import {Link} from "react-router-dom";

export class HomeworkList extends React.Component {
    static propTypes = {
        data: HomeworkList.prototype,
    };

    render() {
        const TagSwitch = (type) => {
            switch (type) {
                case 0:
                    return (
                        <Tag icon={<ExclamationCircleOutlined/>} color="warning">
                            未读
                        </Tag>
                    );
                case 1:
                    return (
                        <Tag icon={<SyncOutlined spin/>} color="processing">
                            正在做
                        </Tag>
                    );
                case 2:
                    return (
                        <Tag icon={<CheckCircleOutlined/>} color="success">
                            已完成
                        </Tag>
                    );
                case 3:
                    return (
                        <Tag icon={<CloseCircleOutlined/>} color="error">
                            请订正
                        </Tag>
                    );
                case 4:
                    return (
                        <Tag icon={<MinusCircleOutlined/>} color="default">
                            已结束
                        </Tag>
                    );
                default:
                    return (
                        <Tag icon={<MinusCircleOutlined/>} color="default">
                            error
                        </Tag>
                    );
            }
        };

        return (
            <div className="homework-list">
                <List
                    itemLayout="horizontal"
                    dataSource={this.props.data}
                    renderItem={(item) => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={<EditOutlined/>}
                                title={
                                    <div>
                                        <Link to={{
                                            pathname: "/homework",
                                            search: "homeworkId=" + item.homeworkId
                                        }}>{item.title} </Link>
                                        {TagSwitch(item.state)}
                                    </div>
                                }
                                description={item.comment}
                            />
                        </List.Item>
                    )}
                />
            </div>
        );
    }
}
