import './TeacherHomeworkCorrect.css';

import {Button, Divider, message} from 'antd';
import React from 'react';
import {HomeworkCorrect} from '../../components/homeworkcorrect/HomeworkCorrect';
import {HomeworkDetail} from '../../components/homeworkdetail/HomeworkDetail';
import {HomeworkDone} from '../../components/homeworkdone/HomeworkDone';

import {getStuAnswerByAnsId, getStuCheckByCheckId} from "../../services/ansCheckService";
import {correctHomework, publishCheck} from "../../services/homeworkService";

// this.data = {title:,...}
class TeacherHomeworkCorrect extends React.Component {
    constructor(props) {
        super(props);
        this.componentHwDone = React.createRef();
        this.componentHwCorrect = React.createRef();
        this.userType = this.props.userType;
        this.state = {
            answerId: -1,
            commitTime: "",
            content: "",
            note: "",
            checkId: -1,
            checkTime: "",
            score: 0,
            description: "",
            comment: ""
        };
    }

    componentDidMount() {
        if (this.userType === 1) {  // 老师
            this.answerId = this.props.userData.answerId;
            this.checkId = this.props.userData.checkId;
        } else if (this.userType === 2) { // 学生
            this.answerId = this.props.ansCheckData.answerId;
            this.checkId = this.props.ansCheckData.checkId;
        }
        if (this.answerId === -1) {
            message.info("未提交作业");
            return;
        }
        // get stu's answer
        {
            const args = {answerId: this.answerId};
            const callback = (data) => {
                if (data.status === 200) {
                    this.setState({
                        answerId: data.data.answerId,
                        commitTime: data.data.commitTime,
                        content: data.data.content,
                        note: data.data.note
                    });
                    message.success(data.msg);
                } else {
                    message.error(data.msg);
                }
            };
            getStuAnswerByAnsId(args, callback);
        }
        // get stu's check info
        if (this.checkId !== -1) {
            const args = {checkId: this.checkId};
            const callback = (data) => {
                if (data.status === 200) {
                    this.setState({
                        checkId: data.data.checkId,
                        checkTime: data.data.checkTime,
                        score: data.data.score,
                        description: data.data.description,
                        comment: data.data.comment
                    });
                    message.success(data.msg);
                } else {
                    message.error(data.msg);
                }
            };
            getStuCheckByCheckId(args, callback);
        }
    }

    handleSubmit = () => {
        if (this.answerId === -1) {
            message.info("此学生未提交作业");
            return;
        }
        // if (this.checkId !== -1) {
        //     message.info("此作业已被批改 请点击发布");
        //     return;
        // }
        const args = {
            answerId: this.answerId,
            score: this.componentHwCorrect.state.score,
            comment: this.componentHwCorrect.state.comment,
            description: this.componentHwDone.state.drawContent
        };
        const callback = (data) => {
            if (data.status === 200) {
                message.success(data.msg);
            } else {
                message.error(data.msg);
            }
        };
        correctHomework(args, callback);
    };

    handlePublish = () => {
        if (this.checkId === -1) {
            message.info("未提交批改 请提交批改");
            return;
        }
        const args = {hwId: this.props.homeworkData.hwId};
        const callback = (data) => {
            if (data.status === 200) {
                message.success(data.msg);
            } else {
                message.error(data.msg);
            }
        };
        publishCheck(args, callback);
    };

    render() {
        const hwDoneData = {
            answerId: this.state.answerId,
            commitTime: this.state.commitTime,
            content: this.state.content,
            note: this.state.note,
            description: this.state.description
        };
        const hwCorrectData = {
            checkId: this.state.checkId,
            checkTime: this.state.checkTime,
            score: this.state.score,
            comment: this.state.comment
        };
        const userType = this.props.userType;
        return (
            <div className="homwork-correct-container">
                <Divider orientation="left"><p className="divider-content">作业内容</p></Divider>
                <HomeworkDetail data={this.props.homeworkData}/>
                <Divider orientation="left"><p className="divider-content">作业提交</p></Divider>
                <HomeworkDone hwDoneData={hwDoneData}
                              userData={this.props.userData}
                              userType={userType}
                              stdAns={false}
                              ref={(r) => (this.componentHwDone = r)}
                />
                <Divider orientation="left"><p className="divider-content">批改</p></Divider>
                <HomeworkCorrect hwCorrectData={hwCorrectData}
                                 userType={userType}
                                 ref={(r) => (this.componentHwCorrect = r)}
                />
                {
                    (this.userType === 1) ? (
                        <div style={{marginTop: 20}}>
                            <Button type="primary" onClick={this.handleSubmit}>提交批改</Button>
                            <Button onClick={this.handlePublish} style={{marginLeft: 20}}>发布批改</Button>
                        </div>
                    ) : (
                        <></>
                    )
                }

            </div>
        );
    }
}

export default TeacherHomeworkCorrect;
