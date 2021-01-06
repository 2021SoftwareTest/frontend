import "./HomeworkSubmitList.css"

import React from "react";
import {Col, message, Row, Tag} from 'antd';

import {getHomeworkSubmissionList} from '../../services/homeworkService';


class HomeworkSubmitList extends React.Component {
    constructor(props) {
        super(props);
        this.submitListCallback = this.props.submitListCallback;
        this.state = {
            studentList: []
        };
    }

    componentDidMount() {
        const args = { hwId: this.props.homeworkData.hwId };
        const callback = (data) => {
            console.log(data);
            if (data.status === 200) {
                this.setState({studentList:data.data});
                message.success(data.msg);
            }
            else {
                message.error(data.msg);
            }
        };
        getHomeworkSubmissionList(args, callback);
    }

    handleListItemClick(item) {
        this.submitListCallback(item);
    }

    renderList = (list) => {
        return (
            list.map((item, index) => {
                let tag = null;
                switch (item.state) {
                    case 0:
                        tag = (<Tag color="blue">未提交</Tag>);
                        break;
                    case 1:
                        tag = (<Tag color="green">已提交</Tag>);
                        break;
                    case 2:
                        tag = (<Tag color="red">超时提交</Tag>);
                        break;
                    case 3:
                        tag = (<Tag color="green">已批改</Tag>);
                        break;
                    case 5:
                        tag = (<Tag color="purple">有答案</Tag>);
                        break;
                    default:
                        console.log("error");
                }
                return (
                    <div key={index} className="list-item" onClick={() => (this.handleListItemClick(item))}>
                        <Row>
                            <Col span={6}>{item.name}</Col>
                            <Col span={6}>{item.ID}</Col>
                            <Col span={6}>{item.school}</Col>
                            <Col span={6}>{tag}</Col>
                        </Row>
                    </div>
                );

            })
        );
    };

    render() {
        const content = this.renderList(this.state.studentList);
        return (
            <div className="homework-submit-list">
                <h2>提交列表</h2>
                <div className="list-container">
                    <div className="submit-header">
                        <Row>
                            <Col span={6}>姓名</Col>
                            <Col span={6}>学号</Col>
                            <Col span={6}>学校</Col>
                            <Col span={6}>状态</Col>
                        </Row>
                    </div>
                    <div className="list-item-container">
                        {content}
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeworkSubmitList;
