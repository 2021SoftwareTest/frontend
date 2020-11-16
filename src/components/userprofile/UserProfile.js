import "./UserProfile.css";

import { Form, Row, Col, Input, Button } from "antd";
import React from "react";

import {getUserInfo} from "../../services/userService";

export class UserProfile extends React.Component {
    constructor(props) {
        super(props);
        this.formRef = React.createRef();
    }

    componentDidMount() {

    }

    _getUserInfo = () => {
        const userInfo = localStorage.getItem('user');
    };

    onSubmit = (values) => {
        console.log(values);
    };

    onReset = () => {
        this.formRef.current.resetFields();
    };

    onFill = () => {

    };

    render() {
        return (
            <div className="user-profile">
                <div className="profile-title">
                    <p>更新我的个人信息</p>
                </div>
                <div className="profile-table">
                    <Row>
                        <Col span={16}>
                            <Form ref={this.formRef} name="user-profile" onFinish={this.onSubmit}>
                                <Row style={{marginTop:10}}>
                                    <Col span={12}>
                                        <Form.Item name="id" label="学号" rules={[{required: true, message:"请输入学号"}]}>
                                            <Input placeholder="学号或工号" style={{width:240, height:40, borderRadius:5}}/>
                                        </Form.Item>
                                    </Col>
                                    <Col span={12}>
                                        <Form.Item name="name" label="姓名" rules={[{required: true, message:"请输入姓名"}]}>
                                            <Input placeholder="请输入姓名" style={{width:240, height:40, borderRadius:5}}/>
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row style={{marginTop:10}}>
                                    <Col span={12}>
                                        <Form.Item name="email" label="邮箱" rules={[{required: true, message:"请输入姓名"}]}>
                                            <Input placeholder="输入邮箱" style={{width:240, height:40, borderRadius:5}}/>
                                        </Form.Item>
                                    </Col>
                                    <Col span={12}>
                                        <Form.Item name="phone" label="手机" rules={[{required: true, message:"请输入姓名"}]}>
                                            <Input placeholder="请输入手机号" style={{width:240, height:40, borderRadius:5}}/>
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row style={{marginTop:10}}>
                                    <Col span={12}>
                                        <Form.Item name="school" label="学校" rules={[{required: true, message:"请输入姓名"}]}>
                                            <Input placeholder="请输入学校" style={{width:240, height:40, borderRadius:5}}/>
                                        </Form.Item>
                                    </Col>
                                    <Col span={12}>
                                        <Form.Item name="class" label="班级" rules={[{required: true, message:"请输入姓名"}]}>
                                            <Input placeholder="请输入班级" style={{width:240, height:40, borderRadius:5}}/>
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Form.Item>
                                    <Button htmlType="submit" className="profile-pic-button">保存</Button>
                                </Form.Item>
                            </Form>
                        </Col>
                        <Col span={8}>
                            <div className="cus-avator">
                                <div className="cus-avator-title">
                                    <p>头像</p>
                                </div>
                                <div className="cus-avator-pic">

                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>

        );
    }
}
