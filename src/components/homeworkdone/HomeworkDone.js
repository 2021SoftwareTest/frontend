import "./HomeworkDone.css";

import { Badge, Button, Col, Descriptions, Row } from 'antd';
import React from 'react';
import CanvasDraw from "react-canvas-draw";

const userData = {
  name: 'ckk',
  ID: 'xxxxxxxxx'
};

export class HomeworkDone extends React.Component {
  constructor(props) {
    super(props);
    this.canvas = React.createRef();
    this.handinContent = React.createRef();
    this.userType = this.props.userType;
    this.state = {
      width: 400,
      height: 400,
      drawContent: "",

      name: "",
      ID: ""
    };
  }

  componentDidMount() {
    if (!this.props.stdAns) {   // 针对非标答界面 需要canvas
      if (this.userType === 1) {  // 1: 老师
        this.setState({name:this.props.userData.name, ID:this.props.userData.ID});
      }
      setTimeout(() => {
        this.setState({width:this.handinContent.current.clientWidth, height:this.handinContent.current.clientHeight});
        this.canvas.loadSaveData(this.props.hwDoneData.description);
      }, 100);
    }
  };

  onSave = () => {
    this.setState({drawContent: this.canvas.getSaveData()});
    console.log(this.state.drawContent);
  };

  onClear = () => {
    this.canvas.clear();
  };

  onUndo = () => {
    this.canvas.undo();
  };

  render() {
    const canvasAttr = {
      color: "#ff0000",
      brushRadius: 2,
      lazyRadius: 0
    };
    const {commitTime, content, note} = this.props.hwDoneData;
    const {name, ID} = this.state;
    return (
      <div>
        {(this.userType === 1 && !this.props.stdAns) ? (
            <Descriptions title="学生信息" bordered>
              <Descriptions.Item label="姓名">{name}</Descriptions.Item>
              <Descriptions.Item label="学号">{ID}</Descriptions.Item>
            </Descriptions>
        ) : (
            <></>
        )}
        <Descriptions title="作业情况" bordered>
          <Descriptions.Item label="提交时间">{commitTime}</Descriptions.Item>
          <Descriptions.Item label="提交状态" span={3}>
            <Badge status="success" text="已提交" />
          </Descriptions.Item>
          <Descriptions.Item label="留言" span={3}>
            {note}
          </Descriptions.Item>
          <Descriptions.Item label="作业内容">
            {
              (!this.props.stdAns) ? (
                  <div className="handin-content-cover">
                    <CanvasDraw
                        ref={(canvasDraw) => (this.canvas = canvasDraw)}
                        brushColor={canvasAttr.color}
                        brushRadius={canvasAttr.brushRadius}
                        lazyRadius={canvasAttr.lazyRadius}
                        canvasWidth={this.state.width}
                        canvasHeight={this.state.height}
                        hideGrid
                        disabled={this.userType !== 1}
                    />
                  </div>
              ) : (
                  <></>
              )
            }
            <div ref={this.handinContent} dangerouslySetInnerHTML={{__html: content}}>
            </div>
          </Descriptions.Item>
        </Descriptions>
        {
          (this.userType === 1 && !this.props.stdAns) ? (
              <div>
                <Row>
                  <Col span={3}>
                    <Button onClick={this.onUndo}>
                      撤销
                    </Button>
                  </Col>
                  <Col span={3}>
                    <Button onClick={this.onClear}>
                      清空
                    </Button>
                  </Col>
                  <Col span={3}>
                    <Button onClick={this.onSave}>
                      保存
                    </Button>
                  </Col>
                </Row>
              </div>
          ) : (
              <></>
          )
        }
      </div>
    );
  }
}
