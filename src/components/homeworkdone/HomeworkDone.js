import "./HomeworkDone.css";

import { Badge, Button, Col, Descriptions, Row } from 'antd';
import React from 'react';
import CanvasDraw from "react-canvas-draw";

const homeworkContent = "<h1>杭州西湖游记</h1><br />这个暑假，爸爸妈妈带我去了不少地方游玩。但让我感到最美的地方，那就是美丽的人间天堂——杭州西湖。<br />湖堤两岸长满了翠绿的柳树，虽然已是夏天，柳树仍然像春天那样生机勃勃、绿意盎然。一阵微风吹来，杨柳摇曳，柳枝就像一位美丽的舞者，随着微风跳起了优雅的华尔兹，翩然起舞，随风飘扬。那柳枝又好似几根琴弦，微风像轻捷柔软的手指，弹奏出一首又一首悦耳的歌谣。放眼望去，一切都是绿的，给人一种很清爽的感觉。<br />西湖还有许多有名的景点，如断桥。雨雾朦胧，从远处看，断桥中间像被巨斧砸断了一般，那断桥还有一个缠绵悲怆的爱情故事：白娘子于断桥邂逅许仙，一见钟情，于是使尽浑身解数终于将许仙追到手。但人蛇之隔终究不能突破，在法海老和尚维护正统的义举下，两人历经磨难终归生死相隔。苏堤春晓、曲院风荷、三潭印月等这些景点也十分美丽。<br />西湖旁边还有一个景点，那就是“花港观鱼”。正值夏季，观鱼池里开满了荷花，在池塘里，一朵朵粉红色的荷花，像一位位穿着粉红衣裳的少女，头上戴着黄色的莲蓬，静静地站在那里。一阵风儿吹来，荷花和荷叶左右摇来摇去，像一位位仙女在水面上翩翩起舞。荷花的花瓣上有一层一层的纹理，看起来更加生机盎然。你瞧，那含苞欲放的荷花，真像一位腼腆的小姑娘，把自己包裹在层层花瓣中，不肯探出头来，半开的荷花，像一位纯洁的少女，用双手托住脸庞。完全盛开的荷花更是美丽动人，她开心地向人们露出灿烂的笑容。<br />“上有天堂，下有苏杭。”杭州之美，美在西湖。西湖以它特有的魅力名扬四海，每天吸引着世界各地的游人，为之流连忘返。这次西湖之游这是一段美好的记忆！<br />";

export class HomeworkDone extends React.Component {
  constructor(props) {
    super(props);
    this.canvas = React.createRef();
    this.handinContent = React.createRef();
    this.state = {
      color: "#ff0000",
      width: 400,
      height:400,
      brushRadius: 2,
      lazyRadius: 0,
      drawContent:""
    };
  }

  componentDidMount() {
    this.setState({width:this.handinContent.current.clientWidth, height:this.handinContent.current.clientHeight});
  }

  onSave = () => {
    this.setState({drawContent: this.canvas.getSaveData()});
    console.log(this.state.drawContent);
    // console.log(this.handinContent.current.clientWidth);
    // console.log(this.handinContent.current.clientHeight);
  };

  onClear = () => {
    this.canvas.clear();
  }

  onUndo = () => {
    this.canvas.undo();
  }

  render() {
    return (
      <div>
        <Descriptions title="学生信息" bordered>
          <Descriptions.Item label="姓名">胡源源</Descriptions.Item>
          <Descriptions.Item label="学号">518021910000</Descriptions.Item>
        </Descriptions>
        <Descriptions title="作业情况" bordered>
          <Descriptions.Item label="提交时间">2020.10.4 11:00:00</Descriptions.Item>
          <Descriptions.Item label="提交状态" span={3}>
            <Badge status="success" text="已提交" />
          </Descriptions.Item>
          <Descriptions.Item label="留言" span={3}>
            这个暑假爸爸妈妈带我去西湖玩啦
          </Descriptions.Item>
          <Descriptions.Item label="作业内容">
            <div className="handin-content-cover">
              <CanvasDraw
                ref={(canvasDraw) => (this.canvas = canvasDraw)}
                brushColor={this.state.color}
                brushRadius={this.state.brushRadius}
                lazyRadius={this.state.lazyRadius}
                canvasWidth={this.state.width}
                canvasHeight={this.state.height}
                hideGrid
              />
            </div>
            <div ref={this.handinContent} dangerouslySetInnerHTML={{__html: homeworkContent}}>
            </div>
          </Descriptions.Item>
        </Descriptions>
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

      </div>
    );
  }
}
