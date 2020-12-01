import 'braft-editor/dist/index.css';
import './HomeworkHandin.css';

import { Avatar, Button, Comment, Form, Input } from 'antd';
import BraftEditor from 'braft-editor';
import React from 'react';

const { TextArea } = Input;
// eslint-disable-next-line react/prop-types
const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
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
    const controls = [
      {
        key: 'bold',
        text: <b>加粗</b>,
      },
      'italic',
      'underline',
      'separator',
      'link',
      'separator',
      'media',
    ];
    const { submitting, value } = this.state;

    return (
      <div className="editor-wrapper">
        <BraftEditor controls={controls} contentStyle={{ height: 210, boxShadow: 'inset 0 1px 3px rgba(0,0,0,.1)' }} />
        <Comment
          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt="Han Solo" />}
          content={<Editor onChange={this.handleChange} onSubmit={this.handleSubmit} submitting={submitting} value={value} />}
        />
        <Button className="submit-button">提交</Button>
      </div>
    );
  }
}
