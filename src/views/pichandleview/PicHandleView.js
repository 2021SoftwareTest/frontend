import React from "react";
import {withRouter} from 'react-router-dom';

import CusUpload from "../../components/cusupload/cusUpload";
import {Button, message} from "antd";
import {sendPic} from "../../services/picService";

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
            const callback = (data) => {
                console.log(data);
                message.success("成功");
                this.setState({
                    data: data.image
                });
            };
            sendPic(data, callback);
        } else {
            message.error("请上传图片");
        }
    }

    render() {
        return (
            <div>
                <CusUpload/>
                <Button onClick={this.sendPic}>发送</Button>
                <img src={this.state.data} alt={"No image"}/>
            </div>
        );
    }
}

export default withRouter(PicHandleView);
