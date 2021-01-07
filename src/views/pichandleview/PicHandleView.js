import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import React from "react";
import {withRouter} from 'react-router-dom';

class PicHandleView extends React.Component {
    state = {
        loading: false,
    };

    // 判断要上传的图片格式和大小，返回true继续上传，返回false终止上传
    beforeUpload(file) {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            message.error('You can only upload JPG/PNG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 10;
        if (!isLt2M) {
            message.error('Image must smaller than 10MB!');
        }
        return isJpgOrPng && isLt2M;
    }

    customRequest() {

    }

    render() {
        const { loading, imageUrl } = this.state;
        // loading，图片上传过程中显示的loading
        const uploadButton = (
            <div>
                {loading ? <LoadingOutlined /> : <PlusOutlined />}
                <div style={{ marginTop: 8 }}>Upload</div>
            </div>
        );
        return (
            // 重要代码，调用antd的上传组件
            // <Upload
            //     name="avatar"
            //     listType="picture-card"
            //     className="avatar-uploader"
            //     showUploadList={false}
            //     action="请求路径"
            //     beforeUpload={(file) => {this.beforeUpload(file);}}  // 在上传之前做一些判断
            //     customRequest={() => {this.customRequest();}}        // 自定义上传事件处理函数
            // >
            //     {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
            // </Upload>
            <div>Hello</div>
        );
    }
}

export default withRouter(PicHandleView);
