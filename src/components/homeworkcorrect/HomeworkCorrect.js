import 'braft-editor/dist/index.css';

import { FrownOutlined, MehOutlined, SmileOutlined } from '@ant-design/icons';
import { Avatar, Button, Col, Comment, Form, Input, Row } from 'antd';
import moment from 'moment';
import React from 'react';

const { TextArea } = Input;

export class HomeworkCorrect extends React.Component {
    constructor(props) {
        super(props);
        this.userType = this.props.userType;
        this.state = {
            comment: this.props.hwCorrectData.comment,
            score: this.props.hwCorrectData.score
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                comment: this.props.hwCorrectData.comment,
                score: this.props.hwCorrectData.score
            });
        }, 400);
    }

    handleSubmit = () => {

  };

  onCommentChange = (e) => {
    this.setState({comment: e.target.value});
  };

  onScoreChange = (e) => {
    this.setState({score: e.target.value});
  };

  render() {
    const { comment, score } = this.state;
    return (
      <>
        <div>
            <Input style={{ width: 200 }} placeholder="分数" value={score} onChange={this.onScoreChange} disabled={this.userType !== 1}/>
            <Button className="correct-button">
              <SmileOutlined />做得不错
            </Button>
            <Button className="correct-button">
              <MehOutlined />做得还行
            </Button>
            <Button className="correct-button">
              <FrownOutlined />有待提高
            </Button>
        </div>
        <Comment
          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt="Han Solo" />}
          content={<TextArea rows={4} onChange={this.onCommentChange} value={comment} disabled={this.userType !== 1}/>}
        />
      </>
    );
  }
}
