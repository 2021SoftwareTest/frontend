import {
    CheckCircleOutlined,
    CloseCircleOutlined,
    EditOutlined,
    ExclamationCircleOutlined,
    MinusCircleOutlined,
    SyncOutlined,
} from '@ant-design/icons';
import {List, Tag} from 'antd';
import React from "react";


export class HomeworkList extends React.Component {

    static propTypes = {
        data: HomeworkList.prototype
    };

    render() {
        const TagSwitch = (type) => {
            switch (type) {
                case '未读':
                    return (
                        <Tag icon={<ExclamationCircleOutlined/>} color="warning">
                            未读
                        </Tag>
                    );
                case '正在做':
                    return (
                        <Tag icon={<SyncOutlined spin/>} color="processing">
                            正在做
                        </Tag>
                    );
                case '已完成':
                    return (
                        <Tag icon={<CheckCircleOutlined/>} color="success">
                            已完成
                        </Tag>
                    );
                case '请订正':
                    return (
                        <Tag icon={<CloseCircleOutlined/>} color="error">
                            请订正
                        </Tag>
                    );
                case '已结束':
                    return (
                        <Tag icon={<MinusCircleOutlined/>} color="default">
                            已结束
                        </Tag>
                    );
            }
        };

        return (
            <List
                itemLayout="horizontal"
                dataSource={this.props.data}
                renderItem={(item) => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<EditOutlined/>}
                            title={
                                <div>
                                <a href="https://ant.design">{item.title}   </a>
                                    {TagSwitch(item.tag)}
                                </div>
                            }
                            description={item.comment}
                        />
                    </List.Item>
                )}
            />
        );
    }
}
