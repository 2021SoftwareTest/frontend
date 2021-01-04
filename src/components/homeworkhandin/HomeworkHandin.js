import './HomeworkHandin.css';

import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {CKEditor} from '@ckeditor/ckeditor5-react';
import {Avatar, Button, Comment, Input} from 'antd';
import React from 'react';

const {TextArea} = Input;

export class HomeworkHandin extends React.Component {
    state = {
        comments: [],
        submitting: false,
    };

    handleCommentChange = (e) => {
        console.log(e.target.value);
        this.setState({commentContent: e.target.value});
    };

    render() {

        return (
            <div className="editor-wrapper">
                <CKEditor
                    editor={ClassicEditor}
                    data="<p>请输入文本</p>"
                    onReady={(editor) => {
                        // You can store the "editor" and use when it is needed.
                        console.log('Editor is ready to use!', editor);
                    }}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        console.log(data);
                        // console.log({ event, editor, data });
                    }}
                    onBlur={(event, editor) => {
                        console.log('Blur.', editor);
                    }}
                    onFocus={(event, editor) => {
                        console.log('Focus.', editor);
                    }}
                />
                <Comment
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                                    alt="Han Solo"/>}
                    content={<TextArea rows={4} onChange={this.handleCommentChange} placeholder={"备注"} value={this.state.commentContent}/>}
                />
                <Button className="submit-button">提交</Button>
            </div>
        );
    }
}
