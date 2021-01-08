import React from "react";
import {withRouter} from 'react-router-dom';

import CusUpload from "../../components/cusupload/cusUpload";
import {Button, message, Row, Col} from "antd";
import {checkPic, sendPic} from "../../services/picService";
import LoginedHeader from "../../components/loginedheader/LoginedHeader";
import MyFooter from "../../components/footer/MyFooter";

class PicHandleView extends React.Component {

    constructor() {
        super();
        this.state = {
            data: "",
        };
    }

    sendPic = () => {
        const pic = localStorage.getItem("ImageBase64");

        if (pic) {
            const data = {
                data: pic,
            };
            this.setState({
                oriPic: pic
            });
            const callback1 = (data) => {
                console.log(data);
                message.success("成功");
                this.setState({
                    data: data.image
                });
            };
            sendPic(data, callback1);
            const callback2 = (data) => {
                console.log(data);
                // message.success("成功");
                this.setState({
                    score: data.score
                });
            };
            checkPic(data, callback2);
        } else {
            // message.error("请上传图片");
        }
    }

    render() {
        return (
            <div>
                <LoginedHeader />
                <div style={{textAlign:'center'}}>
                    <Row>
                        <Col span={12}>
                            <h2>待检测图像上传</h2>
                            <CusUpload/>
                            <img src={this.state.oriPic} alt={"No image"} style={{height:500}}/>
                            <Button onClick={this.sendPic}>发送</Button>
                        </Col>
                        <Col span={12}>
                            <h2>测试结果</h2>
                            <Row>
                                <Col span={4}>
                                    <h2>分数:&nbsp;&nbsp;</h2>
                                </Col>
                                <Col span={6}>
                                    <h2>{this.state.score}</h2>
                                </Col>
                            </Row>
                            <img src={this.state.data} alt={"No image"} style={{height:500}}/>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default withRouter(PicHandleView);
