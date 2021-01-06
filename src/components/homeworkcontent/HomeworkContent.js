import "./HomeworkContent.css";

import React from 'react';
import {Avatar, Button, Comment, Input, message} from "antd";
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {CKEditor} from '@ckeditor/ckeditor5-react';
import {HomeworkDetail} from "../homeworkdetail/HomeworkDetail";

import {getStuAnswerByAnsId} from "../../services/ansCheckService";
import {submitStuAns} from "../../services/ansCheckService";
import {publishRightAnswer} from "../../services/homeworkService";
import {postRightAnswer} from "../../services/homeworkService";

const {TextArea} = Input;

// this.props.data = {title:, description:, note:, ...} 详情见“获取作业详情”
class HomeworkContent extends React.Component {
    constructor(props) {
        super(props);
        this.userType = this.props.userType;
        this.state = {
            hwContent: "",
            noteContent: "",
        };
    };

    componentDidMount() {
        if (this.userType === 2) {  // 学生
            setTimeout(() => {
                const {answerId} = this.props.ansCheckData;
                if (answerId !== -1) {
                    let args = {answerId: answerId};
                    const callback = (data) => {
                        if (data.status === 200) {
                            this.setState({
                                hwContent: data.data.content,
                                noteContent: data.data.note
                            });
                            message.success(data.msg);
                        }
                        else {
                            message.error(data.msg);
                        }
                    };
                    getStuAnswerByAnsId(args, callback);
                }
            },1000);
        }
        else if (this.userType === 1) { // 老师
            setTimeout(() => {
                const {standardAnswerId} = this.props.homeworkData;
                if (standardAnswerId !== -1) {
                    let args = {answerId: standardAnswerId};
                    const callback = (data) => {
                        if (data.status === 200) {
                            this.setState({
                                hwContent: data.data.content,
                                noteContent: data.data.note
                            });
                            message.success(data.msg);
                        }
                        else {
                            message.error(data.msg);
                        }
                    };
                    getStuAnswerByAnsId(args, callback);
                }
            }, 1000);
        }
    }

    handleStdAnsPublish = () => {
        const {hwId, standardAnswerId} = this.props.homeworkData;
        if (standardAnswerId === -1) {
            message.info("请先提交标准答案再选择发布");
            return;
        }
        const args = { hwId: hwId };
        const callback = (data) => {
            if (data.status === 200) {
                message.success(data.msg);
            }
            else {
                message.error(data.msg);
            }
        };
        publishRightAnswer(args, callback);
    };

    handleSubmit = () => {
        const {hwId} = this.props.homeworkData;
        if (this.userType === 1) {  // 老师
            const args = {
                hwId: hwId,
                content: this.state.hwContent,
                note: this.state.noteContent
            };
            const callback = (data) => {
                console.log(data);
              if (data.status === 200) {
                  message.success(data.msg);
              }
              else {
                  message.error(data.msg);
              }
            };
            postRightAnswer(args, callback);
        }
        else if (this.userType === 2) { // 学生
            let myDate = new Date();
            const args = {
                hwId: hwId,
                commitTime: myDate.toLocaleDateString(),
                content: this.state.hwContent,
                note: this.state.noteContent
            };
            const callback = (data) => {
                if (data.status === 200) {
                    message.success(data.msg);
                }
                else {
                    message.error(data.msg);
                }
            };
            submitStuAns(args, callback);
        }
    };

    handleHomeworkChange = (event, editor) => {
        const data = editor.getData();
        this.setState({hwContent: data});
        // console.log(data);
    };

    handleNoteChange = (e) => {
        // console.log(e.target.value);
        this.setState({commentContent: e.target.value});
    };

    render() {
        return (
            <div className="homework-content-container">
                <HomeworkDetail data={this.props.homeworkData}/>
                <div className="editor">
                    <CKEditor
                        editor={ClassicEditor}
                        data={this.state.hwContent}
                        onReady={(editor) => {
                            console.log('Editor is ready to use!', editor);
                        }}
                        onChange={this.handleHomeworkChange}
                        onBlur={(event, editor) => {
                            console.log('Blur.', editor);
                        }}
                        onFocus={(event, editor) => {
                            console.log('Focus.', editor);
                        }}
                    />
                </div>
                <div className="comment">
                    <Comment
                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                                        alt="Han Solo"/>}
                        content={<TextArea rows={4} onChange={this.handleNoteChange}
                                           value={this.state.noteContent}/>}
                    />
                </div>
                <Button className="submit-button" type="primary" onClick={this.handleSubmit}>提交</Button>
                {
                    (this.userType === 1) ? (
                        <Button className="submit-button"
                                onClick={this.handleStdAnsPublish}
                                style={{marginLeft: 20}}
                        >
                            发布标准答案
                        </Button>
                    ) : (
                        <></>
                    )
                }
            </div>
        );
    }

}

export default HomeworkContent;
