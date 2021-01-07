import './HomeworkList.css';

import {
    CheckCircleOutlined,
    EditOutlined,
    ExclamationCircleOutlined,
    MinusCircleOutlined, SyncOutlined,
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
                            未查看
                        </Tag>
                    );
                case 1:
                    return (
                        <Tag icon={<ExclamationCircleOutlined/>} color="warning">
                            未提交
                        </Tag>
                    );
                case 2:
                    return (
                        <Tag icon={<SyncOutlined spin />} color="success">
                            已提交
                        </Tag>
                    );
                case 3:
                    return (
                        <Tag icon={<MinusCircleOutlined/>} color="error">
                            迟交
                        </Tag>
                    );
                case 4:
                    return (
                        <Tag icon={<CheckCircleOutlined/>} color="purple">
                            已批改
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

        console.log(this.props.data);

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
                                            search: "?homeworkId=" + item.hwId
                                        }}>{item.title} </Link>
                                        {TagSwitch(item.userHomeworkState)}
                                        {
                                            (item.state === 1) ? (
                                                <Tag icon={<CheckCircleOutlined/>} color="default">
                                                    未发布答案
                                                </Tag>
                                            ) : (
                                                <Tag icon={<CheckCircleOutlined/>} color="green">
                                                    已发布答案
                                                </Tag>
                                            )
                                        }
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
