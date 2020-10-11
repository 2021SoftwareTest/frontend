import 'braft-editor/dist/index.css';

import {FrownOutlined, MehOutlined, SmileOutlined} from "@ant-design/icons";
import {
    Avatar, Button, Col, Comment, Form, Input, Row
}
    from
        'antd';
import moment from 'moment';
import React from 'react';

const {TextArea} = Input;

// eslint-disable-next-line react/prop-types
const Editor = ({onChange, onSubmit, submitting, value}) => (
    <>
        <Form.Item>
            <TextArea rows={4} onChange={onChange} value={value}/>
        </Form.Item>
        <Form.Item>
            <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
                提交
            </Button>
        </Form.Item>
    </>
);

export class HomeworkCorrect extends React.Component {

    state = {
        comments: [],
        submitting: false,
        value: '非常棒！',
    };

    handleSubmit = () => {
        if (!this.state.value) {
            return;
        }

        this.setState({
            submitting: true,
        });

        setTimeout(() => {
            this.setState({
                submitting: false,
                value: '',
                comments: [
                    {
                        author: 'Han Solo',
                        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                        content: <p>{this.state.value}</p>,
                        datetime: moment().fromNow(),
                    },
                    ...this.state.comments,
                ],
            });
        }, 1000);
    };

    handleChange = (e) => {
        this.setState({
            value: e.target.value,
        });
    };

     scoreChange =(value) => {
        console.log('changed', value);
    };

    render() {
        const {submitting, value} = this.state;

        return (
            <>
                <Row>
                    <Col>
                <Input style={{ width: 200 }} placeholder="分数" />
                <Button className="correct-button"><SmileOutlined />做得不错</Button>
                        <Button className="correct-button"><MehOutlined />做得还行</Button>
                        <Button className="correct-button"><FrownOutlined />有待提高</Button>
                    </Col>
                </Row>
                <Comment
                    avatar={
                        <Avatar
                            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                            alt="Han Solo"
                        />
                    }
                    content={
                        <Editor
                            onChange={this.handleChange}
                            onSubmit={this.handleSubmit}
                            submitting={submitting}
                            value={value}
                        />
                    }
                />
            </>
        );

    }

}
