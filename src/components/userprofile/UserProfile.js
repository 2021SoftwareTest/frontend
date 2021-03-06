import './UserProfile.css';

import {Button, Col, Form, Input, message, Row} from 'antd';
import React from 'react';

import {getUserInfo, saveUserInfo} from '../../services/userService';

export class UserProfile extends React.Component {
    constructor(props) {
        super(props);
        this.formRef = React.createRef();
        this.state = {
            userId: 1,
            userType: 0,
            userName: '',
            school: '',
            ID: '',
            phone: '',
            email: '',
            password: ''
        };
    }

    usernameOnChange = (e) => {
        this.setState({userName: e.target.value});
    };

    schoolOnChange = (e) => {
        this.setState({school: e.target.value});
    };

    IDOnChange = (e) => {
        this.setState({ID: e.target.value});
    };

    phoneOnChange = (e) => {
        this.setState({phone: e.target.value});
    };

    emailOnChange = (e) => {
        this.setState({email: e.target.value});
    };

    passwordOnChange = (e) => {
      this.setState({password: e.target.value});
    };

    componentDidMount() {
        this._getUserInfo();
    }

    _getUserInfo = () => {
        const user = localStorage.getItem('user');
        let userId = 1;
        if (user !== null) {
            userId = JSON.parse(user).userID;
        }
        console.log('userId:' + userId);
        const callback = (data) => {
            if (data.status === 200) {
                const userInfo = data.data.user;
                console.log(userInfo);
                this.setState({
                    userId: userInfo.userId,
                    userType: userInfo.userType,
                    userName: userInfo.name,
                    school: userInfo.school,
                    ID: userInfo.ID,
                    phone: userInfo.phone,
                    email: userInfo.email,
                });
                const obj = {
                    id: userInfo.ID,
                    name: userInfo.name,
                    email: userInfo.email,
                    phone: userInfo.phone,
                    school: userInfo.school,
                };
                this.formRef.current.setFieldsValue(obj);
                // console.log(this.formRef.current);

                // message.success(data.msg);
            } else {
                message.error(data.msg);
            }
        };
        getUserInfo({userId: userId}, callback);
    };

    _saveUserInfo = () => {
        const userInfo = {
            userId: this.state.userId,
            userName: this.state.userName,
            school: this.state.school,
            ID: this.state.ID,
            phone: this.state.phone,
            email: this.state.email,
            password: this.state.password
        };
        const callback = (data) => {
            console.log(data);
            if (data.status === 200) {
                message.success(data.msg);
            } else {
                message.error(data.msg);
            }
        };
        console.log(userInfo);
        saveUserInfo(userInfo, callback);
    };

    onSubmit = () => {
        this._saveUserInfo();
    };

    onReset = () => {
        this.formRef.current.resetFields();
    };


    render() {
        return (
            <div className="user-profile">
                <div className="profile-title">
                    <p>????????????????????????</p>
                </div>
                <div className="profile-table">
                    <Row>
                        <Col span={16}>
                            <Form ref={this.formRef} name="user-profile" onFinish={this.onSubmit}>
                                <Row style={{marginTop: 10}}>
                                    <Col span={12}>
                                        <Form.Item name="id" label="??????" rules={[{required: true, message: '???????????????'}]}>
                                            <Input placeholder="???????????????" style={{width: 240, height: 40, borderRadius: 5}}
                                                   value={this.state.userId} onChange={this.IDOnChange}/>
                                        </Form.Item>
                                    </Col>
                                    <Col span={12}>
                                        <Form.Item name="name" label="??????" rules={[{required: true, message: '???????????????'}]}>
                                            <Input placeholder="???????????????" style={{width: 240, height: 40, borderRadius: 5}}
                                                   value={this.state.userName} onChange={this.usernameOnChange}/>
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row style={{marginTop: 10}}>
                                    <Col span={12}>
                                        <Form.Item name="email" label="??????" rules={[{required: true, message: '???????????????'}]}>
                                            <Input placeholder="????????????" style={{width: 240, height: 40, borderRadius: 5}}
                                                   value={this.state.email} onChange={this.emailOnChange}/>
                                        </Form.Item>
                                    </Col>
                                    <Col span={12}>
                                        <Form.Item name="phone" label="??????" rules={[{required: true, message: '???????????????'}]}>
                                            <Input placeholder="??????????????????"
                                                   style={{width: 240, height: 40, borderRadius: 5}}
                                                   value={this.state.phone} onChange={this.phoneOnChange}/>
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row style={{marginTop: 10}}>
                                    <Col span={12}>
                                        <Form.Item name="school" label="??????"
                                                   rules={[{required: true, message: '???????????????'}]}>
                                            <Input placeholder="???????????????" style={{width: 240, height: 40, borderRadius: 5}}
                                                   value={this.state.school} onChange={this.schoolOnChange}/>
                                        </Form.Item>
                                    </Col>
                                    <Col span={12}>
                                        <Form.Item name="password" label="??????"
                                                   rules={[{required: true, message: '?????????????????????'}]}>
                                            <Input placeholder="?????????????????????" style={{width: 240, height: 40, borderRadius: 5}}
                                                   value={this.state.password} onChange={this.passwordOnChange}/>
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Form.Item>
                                    <Button htmlType="submit" className="profile-pic-button">
                                        ??????
                                    </Button>
                                </Form.Item>
                            </Form>
                        </Col>
                        <Col span={8}>
                            <div className="cus-avator">
                                <div className="cus-avator-title">
                                    <p>??????</p>
                                </div>
                                <div className="cus-avator-pic"></div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}
