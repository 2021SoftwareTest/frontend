import './HomeworkHandin.css';

import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { Avatar, Button, Comment, Form, Input } from 'antd';
import React from 'react';

const { TextArea } = Input;
// eslint-disable-next-line react/prop-types
const EditorComment = ({ onChange, onSubmit, submitting, value }) => (
  <>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button loading={submitting} onClick={onSubmit} type="primary">
        提交
      </Button>
    </Form.Item>
  </>
);

export class HomeworkHandin extends React.Component {
  state = {
    comments: [],
    submitting: false,
    value: '备注',
  };

  render() {
    const { submitting, value } = this.state;

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
          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt="Han Solo" />}
          content={<EditorComment onChange={this.handleChange} onSubmit={this.handleSubmit} submitting={submitting} value={value} />}
        />
        <Button className="submit-button">提交</Button>
      </div>
    );
  }
}
