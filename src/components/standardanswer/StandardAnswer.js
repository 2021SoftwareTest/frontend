import './StandardAnswer.css';

import {Divider, message} from 'antd';
import React from 'react';
import {HomeworkDetail} from '../../components/homeworkdetail/HomeworkDetail';
import {HomeworkDone} from '../../components/homeworkdone/HomeworkDone';

import {getStuAnswerByAnsId} from "../../services/ansCheckService";

// const dataAns = {
//     answerId: 0,
//     commitTime: "0000-00-00 00:00:00",
//     content: "<h1>杭州西湖游记</h1><br />这个暑假，爸爸妈妈带我去了不少地方游玩。但让我感到最美的地方，那就是美丽的人间天堂——杭州西湖。<br />湖堤两岸长满了翠绿的柳树，虽然已是夏天，柳树仍然像春天那样生机勃勃、绿意盎然。一阵微风吹来，杨柳摇曳，柳枝就像一位美丽的舞者，随着微风跳起了优雅的华尔兹，翩然起舞，随风飘扬。那柳枝又好似几根琴弦，微风像轻捷柔软的手指，弹奏出一首又一首悦耳的歌谣。放眼望去，一切都是绿的，给人一种很清爽的感觉。<br />西湖还有许多有名的景点，如断桥。雨雾朦胧，从远处看，断桥中间像被巨斧砸断了一般，那断桥还有一个缠绵悲怆的爱情故事：白娘子于断桥邂逅许仙，一见钟情，于是使尽浑身解数终于将许仙追到手。但人蛇之隔终究不能突破，在法海老和尚维护正统的义举下，两人历经磨难终归生死相隔。苏堤春晓、曲院风荷、三潭印月等这些景点也十分美丽。<br />西湖旁边还有一个景点，那就是“花港观鱼”。正值夏季，观鱼池里开满了荷花，在池塘里，一朵朵粉红色的荷花，像一位位穿着粉红衣裳的少女，头上戴着黄色的莲蓬，静静地站在那里。一阵风儿吹来，荷花和荷叶左右摇来摇去，像一位位仙女在水面上翩翩起舞。荷花的花瓣上有一层一层的纹理，看起来更加生机盎然。你瞧，那含苞欲放的荷花，真像一位腼腆的小姑娘，把自己包裹在层层花瓣中，不肯探出头来，半开的荷花，像一位纯洁的少女，用双手托住脸庞。完全盛开的荷花更是美丽动人，她开心地向人们露出灿烂的笑容。<br />“上有天堂，下有苏杭。”杭州之美，美在西湖。西湖以它特有的魅力名扬四海，每天吸引着世界各地的游人，为之流连忘返。这次西湖之游这是一段美好的记忆！<br />",
//     note: "我是note"
// };

// this.data = {title:,...}
class StandardAnswer extends React.Component {
    constructor(props) {
        super(props);
        this.userType = this.props.userType;
        this.state = {
            answerId: -1,
            commitTime: "",
            content: "",
            note: "",
        };
    }

    componentDidMount() {
        const {standardAnswerId} = this.props.homeworkData;
        if (standardAnswerId === -1) {
            message.info("此作业尚未发布答案");
            return;
        }
        const args = {answerId: standardAnswerId};
        const callback = (data) => {
            if (data.status === 200) {
                this.setState({
                    answerId: data.data.answerId,
                    commitTime: data.data.commitTime,
                    content: data.data.content,
                    note: data.data.note,
                });
                message.success(data.msg);
            }
            else {
                message.error(data.msg);
            }
        };
        getStuAnswerByAnsId(args, callback);
    }

    render() {
        const hwDoneData = {
            answerId: this.state.answerId,
            commitTime: this.state.commitTime,
            content: this.state.content,
            note: this.state.note,
        };
        return (
            <div className="homwork-correct-container">
                <Divider orientation="left"><p className="divider-content">作业内容</p></Divider>
                <HomeworkDetail data={this.props.homeworkData}/>
                <Divider orientation="left"><p className="divider-content">参考答案</p></Divider>
                <HomeworkDone hwDoneData={hwDoneData}
                              userType={this.userType}
                              stdAns={true}
                />
            </div>
        );
    }
}

export default StandardAnswer;
