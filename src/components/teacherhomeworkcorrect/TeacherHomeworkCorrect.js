import './TeacherHomeworkCorrect.css';

import {Divider, message, Button} from 'antd';
import React from 'react';
import {HomeworkCorrect} from '../../components/homeworkcorrect/HomeworkCorrect';
import {HomeworkDetail} from '../../components/homeworkdetail/HomeworkDetail';
import {HomeworkDone} from '../../components/homeworkdone/HomeworkDone';

import {getStuAnswerByAnsId} from "../../services/ansCheckService";
import {getStuCheckByCheckId} from "../../services/ansCheckService";
import {correctHomework} from "../../services/homeworkService";
import {publishCheck} from "../../services/homeworkService";

const dataAns = {
    answerId: 0,
    commitTime: "0000-00-00 00:00:00",
    content: "<h1>杭州西湖游记</h1><br />这个暑假，爸爸妈妈带我去了不少地方游玩。但让我感到最美的地方，那就是美丽的人间天堂——杭州西湖。<br />湖堤两岸长满了翠绿的柳树，虽然已是夏天，柳树仍然像春天那样生机勃勃、绿意盎然。一阵微风吹来，杨柳摇曳，柳枝就像一位美丽的舞者，随着微风跳起了优雅的华尔兹，翩然起舞，随风飘扬。那柳枝又好似几根琴弦，微风像轻捷柔软的手指，弹奏出一首又一首悦耳的歌谣。放眼望去，一切都是绿的，给人一种很清爽的感觉。<br />西湖还有许多有名的景点，如断桥。雨雾朦胧，从远处看，断桥中间像被巨斧砸断了一般，那断桥还有一个缠绵悲怆的爱情故事：白娘子于断桥邂逅许仙，一见钟情，于是使尽浑身解数终于将许仙追到手。但人蛇之隔终究不能突破，在法海老和尚维护正统的义举下，两人历经磨难终归生死相隔。苏堤春晓、曲院风荷、三潭印月等这些景点也十分美丽。<br />西湖旁边还有一个景点，那就是“花港观鱼”。正值夏季，观鱼池里开满了荷花，在池塘里，一朵朵粉红色的荷花，像一位位穿着粉红衣裳的少女，头上戴着黄色的莲蓬，静静地站在那里。一阵风儿吹来，荷花和荷叶左右摇来摇去，像一位位仙女在水面上翩翩起舞。荷花的花瓣上有一层一层的纹理，看起来更加生机盎然。你瞧，那含苞欲放的荷花，真像一位腼腆的小姑娘，把自己包裹在层层花瓣中，不肯探出头来，半开的荷花，像一位纯洁的少女，用双手托住脸庞。完全盛开的荷花更是美丽动人，她开心地向人们露出灿烂的笑容。<br />“上有天堂，下有苏杭。”杭州之美，美在西湖。西湖以它特有的魅力名扬四海，每天吸引着世界各地的游人，为之流连忘返。这次西湖之游这是一段美好的记忆！<br />",
    note: "我是note"
};

const dataCheck = {
    checkId: 0,
    checkTime: "1111-11-11 11:11:11",
    score: 90,
    description: "{\"lines\":[{\"points\":[{\"x\":123.2117919921875,\"y\":114.95831298828125},{\"x\":123.2117919921875,\"y\":114.95831298828125},{\"x\":124.2117919921875,\"y\":114.95831298828125},{\"x\":126.2117919921875,\"y\":114.95831298828125},{\"x\":132.2117919921875,\"y\":114.95831298828125},{\"x\":140.2117919921875,\"y\":114.95831298828125},{\"x\":154.2117919921875,\"y\":114.95831298828125},{\"x\":170.2117919921875,\"y\":115.95831298828125},{\"x\":190.2117919921875,\"y\":115.95831298828125},{\"x\":212.2117919921875,\"y\":116.95831298828125},{\"x\":235.2117919921875,\"y\":116.95831298828125},{\"x\":266.2117919921875,\"y\":118.95831298828125},{\"x\":298.2117919921875,\"y\":118.95831298828125},{\"x\":331.2117919921875,\"y\":118.95831298828125},{\"x\":356.2117919921875,\"y\":119.95831298828125},{\"x\":386.2117919921875,\"y\":119.95831298828125},{\"x\":436.2117919921875,\"y\":120.95831298828125},{\"x\":481.2117919921875,\"y\":120.95831298828125},{\"x\":523.2117919921875,\"y\":121.95831298828125},{\"x\":563.2117919921875,\"y\":123.95831298828125},{\"x\":602.2117919921875,\"y\":125.95831298828125},{\"x\":641.2117919921875,\"y\":128.95831298828125},{\"x\":676.2117919921875,\"y\":130.95831298828125},{\"x\":710.2117919921875,\"y\":131.95831298828125},{\"x\":742.2117919921875,\"y\":131.95831298828125},{\"x\":764.2117919921875,\"y\":131.95831298828125},{\"x\":796.2117919921875,\"y\":131.95831298828125},{\"x\":822.2117919921875,\"y\":129.95831298828125},{\"x\":846.2117919921875,\"y\":128.95831298828125},{\"x\":871.2117919921875,\"y\":126.95831298828125},{\"x\":889.2117919921875,\"y\":124.95831298828125},{\"x\":912.2117919921875,\"y\":123.95831298828125},{\"x\":930.2117919921875,\"y\":122.95831298828125},{\"x\":944.2117919921875,\"y\":122.95831298828125},{\"x\":956.2117919921875,\"y\":122.95831298828125},{\"x\":965.2117919921875,\"y\":122.95831298828125},{\"x\":972.2117919921875,\"y\":122.95831298828125},{\"x\":976.2117919921875,\"y\":122.95831298828125},{\"x\":980.2117919921875,\"y\":122.95831298828125},{\"x\":981.2117919921875,\"y\":122.95831298828125},{\"x\":981.2117919921875,\"y\":122.95831298828125}],\"brushColor\":\"#ff0000\",\"brushRadius\":2},{\"points\":[{\"x\":186.2117919921875,\"y\":184.95831298828125},{\"x\":186.2117919921875,\"y\":184.95831298828125},{\"x\":194.2117919921875,\"y\":183.95831298828125},{\"x\":202.2117919921875,\"y\":183.95831298828125},{\"x\":211.2117919921875,\"y\":182.95831298828125},{\"x\":222.2117919921875,\"y\":182.95831298828125},{\"x\":233.2117919921875,\"y\":181.95831298828125},{\"x\":250.2117919921875,\"y\":180.95831298828125},{\"x\":265.2117919921875,\"y\":180.95831298828125},{\"x\":283.2117919921875,\"y\":180.95831298828125},{\"x\":301.2117919921875,\"y\":180.95831298828125},{\"x\":319.2117919921875,\"y\":180.95831298828125},{\"x\":336.2117919921875,\"y\":180.95831298828125},{\"x\":353.2117919921875,\"y\":181.95831298828125},{\"x\":374.2117919921875,\"y\":181.95831298828125},{\"x\":390.2117919921875,\"y\":183.95831298828125},{\"x\":410.2117919921875,\"y\":184.95831298828125},{\"x\":429.2117919921875,\"y\":184.95831298828125},{\"x\":448.2117919921875,\"y\":185.95831298828125},{\"x\":466.2117919921875,\"y\":186.95831298828125},{\"x\":485.2117919921875,\"y\":188.95831298828125},{\"x\":502.2117919921875,\"y\":188.95831298828125},{\"x\":519.2117919921875,\"y\":188.95831298828125},{\"x\":535.2117919921875,\"y\":188.95831298828125},{\"x\":549.2117919921875,\"y\":188.95831298828125},{\"x\":566.2117919921875,\"y\":188.95831298828125},{\"x\":580.2117919921875,\"y\":188.95831298828125},{\"x\":594.2117919921875,\"y\":188.95831298828125},{\"x\":609.2117919921875,\"y\":189.95831298828125},{\"x\":620.2117919921875,\"y\":189.95831298828125},{\"x\":636.2117919921875,\"y\":189.95831298828125},{\"x\":649.2117919921875,\"y\":189.95831298828125},{\"x\":665.2117919921875,\"y\":190.95831298828125},{\"x\":679.2117919921875,\"y\":190.95831298828125},{\"x\":692.2117919921875,\"y\":190.95831298828125},{\"x\":706.2117919921875,\"y\":190.95831298828125},{\"x\":720.2117919921875,\"y\":190.95831298828125},{\"x\":733.2117919921875,\"y\":190.95831298828125},{\"x\":746.2117919921875,\"y\":190.95831298828125},{\"x\":760.2117919921875,\"y\":190.95831298828125},{\"x\":772.2117919921875,\"y\":190.95831298828125},{\"x\":784.2117919921875,\"y\":190.95831298828125},{\"x\":795.2117919921875,\"y\":190.95831298828125},{\"x\":805.2117919921875,\"y\":190.95831298828125},{\"x\":814.2117919921875,\"y\":189.95831298828125},{\"x\":822.2117919921875,\"y\":189.95831298828125},{\"x\":829.2117919921875,\"y\":189.95831298828125},{\"x\":832.2117919921875,\"y\":188.95831298828125},{\"x\":838.2117919921875,\"y\":188.95831298828125},{\"x\":840.2117919921875,\"y\":188.95831298828125},{\"x\":841.2117919921875,\"y\":188.95831298828125},{\"x\":841.2117919921875,\"y\":188.95831298828125}],\"brushColor\":\"#ff0000\",\"brushRadius\":2},{\"points\":[{\"x\":261.2117919921875,\"y\":231.95831298828125},{\"x\":261.2117919921875,\"y\":231.95831298828125},{\"x\":263.2117919921875,\"y\":231.95831298828125},{\"x\":266.2117919921875,\"y\":231.95831298828125},{\"x\":271.2117919921875,\"y\":231.95831298828125},{\"x\":276.2117919921875,\"y\":231.95831298828125},{\"x\":286.2117919921875,\"y\":232.95831298828125},{\"x\":298.2117919921875,\"y\":233.95831298828125},{\"x\":310.2117919921875,\"y\":233.95831298828125},{\"x\":328.2117919921875,\"y\":235.95831298828125},{\"x\":348.2117919921875,\"y\":235.95831298828125},{\"x\":365.2117919921875,\"y\":236.95831298828125},{\"x\":394.2117919921875,\"y\":239.95831298828125},{\"x\":420.2117919921875,\"y\":240.95831298828125},{\"x\":448.2117919921875,\"y\":241.95831298828125},{\"x\":476.2117919921875,\"y\":243.95831298828125},{\"x\":504.2117919921875,\"y\":243.95831298828125},{\"x\":532.2117919921875,\"y\":244.95831298828125},{\"x\":555.2117919921875,\"y\":244.95831298828125},{\"x\":582.2117919921875,\"y\":245.95831298828125},{\"x\":604.2117919921875,\"y\":245.95831298828125},{\"x\":622.2117919921875,\"y\":245.95831298828125},{\"x\":639.2117919921875,\"y\":246.95831298828125},{\"x\":654.2117919921875,\"y\":246.95831298828125},{\"x\":666.2117919921875,\"y\":246.95831298828125},{\"x\":675.2117919921875,\"y\":246.95831298828125},{\"x\":683.2117919921875,\"y\":246.95831298828125},{\"x\":689.2117919921875,\"y\":246.95831298828125},{\"x\":692.2117919921875,\"y\":246.95831298828125},{\"x\":694.2117919921875,\"y\":246.95831298828125},{\"x\":694.2117919921875,\"y\":246.95831298828125}],\"brushColor\":\"#ff0000\",\"brushRadius\":2}],\"width\":1242,\"height\":269}",
    comment: "我是comment"
};

// this.data = {title:,...}
class TeacherHomeworkCorrect extends React.Component {
    constructor(props) {
        super(props);
        this.componentHwDone = React.createRef();
        this.componentHwCorrect = React.createRef();
        this.userType = this.props.userType;
        this.state = {
            answerId: -1,
            commitTime: "",
            content: "",
            note: "",
            checkId: -1,
            checkTime: "",
            score: 0,
            description: "",
            comment: ""
        };
    }

    componentDidMount() {
        if (this.userType === 1) {  // 老师
            this.answerId = this.props.userData.answerId;
            this.checkId = this.props.userData.checkId;
        }
        else if (this.userType === 2) { // 学生
            this.answerId = this.props.ansCheckData.answerId;
            this.checkId = this.props.ansCheckData.checkId;
        }
        if (this.answerId === -1) {
            message.info("未提交作业");
            return;
        }
        // get stu's answer
        {
            const args = {answerId: this.answerId};
            const callback = (data) => {
                if (data.status === 200) {
                    this.setState({
                        answerId: data.data.answerId,
                        commitTime: data.data.commitTime,
                        content: data.data.content,
                        note: data.data.note
                    });
                    message.success(data.msg);
                }
                else {
                    message.error(data.msg);
                }
            };
            getStuAnswerByAnsId(args, callback);
        }
        // get stu's check info
        {
            if (this.checkId !== -1) {
                const args = {checkId: this.checkId};
                const callback = (data) => {
                    if (data.status === 200) {
                        this.setState({
                            checkId: data.data.checkId,
                            checkTime: data.data.checkTime,
                            score: data.data.score,
                            description: data.data.description,
                            comment: data.data.comment
                        });
                        message.success(data.msg);
                    }
                    else {
                        message.error(data.msg);
                    }
                };
                getStuCheckByCheckId(args, callback);
            }
        }
    }

    handleSubmit = () => {
        if (this.answerId === -1) {
            message.info("此学生未提交作业");
            return;
        }
        // if (this.checkId !== -1) {
        //     message.info("此作业已被批改 请点击发布");
        //     return;
        // }
        const args = {
            answerId: this.answerId,
            score: this.componentHwCorrect.state.score,
            comment: this.componentHwCorrect.state.comment,
            description: this.componentHwDone.state.drawContent
        };
        const callback = (data) => {
            if (data.status === 200) {
                message.success(data.msg);
            }
            else {
                message.error(data.msg);
            }
        };
        correctHomework(args, callback);
    };

    handlePublish = () => {
        if (this.checkId === -1) {
            message.info("未提交批改 请提交批改");
            return;
        }
        const args = {hwId: this.props.homeworkData.hwId};
        const callback = (data) => {
            if (data.status === 200) {
                message.success(data.msg);
            }
            else {
                message.error(data.msg);
            }
        };
        publishCheck(args, callback);
    };

    render() {
        const hwDoneData = {
            answerId: this.state.answerId,
            commitTime: this.state.commitTime,
            content: this.state.content,
            note: this.state.note,
            description: this.state.description
        };
        const hwCorrectData = {
            checkId: this.state.checkId,
            checkTime: this.state.checkTime,
            score: this.state.score,
            comment: this.state.comment
        };
        const userType = this.props.userType;
        return (
            <div className="homwork-correct-container">
                <Divider orientation="left"><p className="divider-content">作业内容</p></Divider>
                <HomeworkDetail data={this.props.homeworkData}/>
                <Divider orientation="left"><p className="divider-content">作业提交</p></Divider>
                <HomeworkDone hwDoneData={hwDoneData}
                              userData={this.props.userData}
                              userType={userType}
                              stdAns={false}
                              ref={(r) => (this.componentHwDone = r)}
                />
                <Divider orientation="left"><p className="divider-content">批改</p></Divider>
                <HomeworkCorrect hwCorrectData={hwCorrectData}
                                 userType={userType}
                                 ref={(r) => (this.componentHwCorrect = r)}
                />
                {
                    (this.userType === 1) ? (
                        <div style={{marginTop:20}}>
                            <Button type="primary" onClick={this.handleSubmit}>提交批改</Button>
                            <Button onClick={this.handlePublish} style={{marginLeft:20}}>发布批改</Button>
                        </div>
                    ) : (
                        <></>
                    )
                }

            </div>
        );
    }
}

export default TeacherHomeworkCorrect;
