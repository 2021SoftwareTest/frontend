import "./HomeworkContent.css";

import React from 'react';
import {Row, Col, Avatar, Button, Comment, Form, Input} from "antd";
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import {HomeworkDetail} from "../homeworkdetail/HomeworkDetail";


const { TextArea } = Input;

// this.props.data = {title:, description:, note:, ...} 详情见“获取作业详情”
class HomeworkContent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            hwContent: "",
            noteContent: "",
            commentContent: ""
        };
    };

    handleSubmit = () => {

    };

    handleHomeworkChange = (event, editor) => {
        const data = editor.getData();
        console.log(data);
        // console.log({ event, editor, data });
    };

    handleCommentChange = (e) => {
        console.log(e.target.value);
        this.setState({commentContent: e.target.value});
    };

    render() {
        const {title, endTime, content, score, state} = this.props.data;
        return(
            <div className="homework-content-container">
               <HomeworkDetail data={this.props.data} />
                <div className="editor">
                    <CKEditor
                        editor={ClassicEditor}
                        data="<p>请输入文本</p>"
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
                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt="Han Solo" />}
                        content={<TextArea rows={4} onChange={this.handleCommentChange} value={this.state.commentContent} />}
                    />
                </div>
                <Button className="submit-button" type="primary" onClick={this.handleSubmit}>提交</Button>
            </div>
        );
    }

}

export default HomeworkContent;
