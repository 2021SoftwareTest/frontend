import 'antd/dist/antd.css';
import './registercss.css';

import {Button, Col, Input, message, Row} from 'antd';
import React from 'react';

import {register, sendVerification} from '../../services/userService';

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {username: '', email: '', password: '', school: '', ID: '', phone: '', authCode: '', name:''};
    }

    usernameOnChange = (e) => {
        this.setState({username: e.target.value});
    };

    nameOnChange = (e) => {
      this.setState({name: e.target.value});
    };

    IDOnChange = (e) => {
        this.setState({ID: e.target.value});
    };

    emailOnChange = (e) => {
        this.setState({email: e.target.value});
    };

    phoneOnChange = (e) => {
        this.setState({phone: e.target.value});
    };

    passwordOnChange = (e) => {
        this.setState({password: e.target.value});
    };

    authCodeOnChange = (e) => {
        this.setState({authCode: e.target.value});
    };

    schoolOnChange = (e) => {
        this.setState({school: e.target.value});
    };

    nameOnChange = (e) => {
        this.setState({name: e.target.value});
    };


    sendVerification = () => {
        const data = {
            userName: this.state.username,
            email: this.state.email
        };
        console.log(data);
        const callback = (data) => {
            if (data.status === 200) {
                message.success(data.msg);
            } else {
                message.error(data.msg);
            }
        };
        sendVerification(data, callback);
    };

    onSubmit = () => {
        const registerInfo = {
            userName: this.state.username,
            password: this.state.password,
            school: this.state.school,
            ID: this.state.ID,
            phone: this.state.phone,
            email: this.state.email,
            authcode: this.state.authCode,
            name:this.state.name
        };
        const callback = (data) => {
            console.log(data);
            if (data.status === 200) {
                window.location.href = '/login';
                message.success("????????????????????????");
            } else {
                message.error(data.msg);
            }
        };
        register(registerInfo, callback);
    };

    render() {
        const registerInfo = this.state;
        return (
            <div className="register-form">
                <div className="register-form-wrapper">
                    <Row>
                        <Col span={5}>
                            <p className="title">?????????</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <Input placeholder="?????????" value={registerInfo.username} onChange={this.usernameOnChange}
                                   className="input"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={5}>
                            <p className="title">??????</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <Input placeholder="??????" value={registerInfo.name} onChange={this.nameOnChange}
                                   className="input"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={5}>
                            <p className="title">??????</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <Input placeholder="??????????????????" value={registerInfo.school} onChange={this.schoolOnChange}
                                   className="input"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={5}>
                            <p className="title">??????/??????</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <Input placeholder="??????/??????" value={registerInfo.ID} onChange={this.IDOnChange}
                                   className="input"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={5}>
                            <p className="title">??????</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <Input placeholder="????????????" value={registerInfo.password} onChange={this.passwordOnChange}
                                   className="input"/>
                        </Col>
                    </Row>
                    <Row style={{marginTop: 5}}>
                        <Col span={24}>
                            <p style={{marginBottom: 0}}>?????????????????????7??????????????????????????????????????????</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={5}>
                            <p className="title">?????????</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <Input placeholder="???????????????" value={registerInfo.phone} onChange={this.phoneOnChange}
                                   className="input"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={5}>
                            <p className="title">??????</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <Input placeholder="you@example.com" value={registerInfo.email}
                                   onChange={this.emailOnChange} className="input"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={5}>
                            <p className="title">?????????</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={16}>
                            <Input placeholder="???????????????????????????" value={registerInfo.authCode}
                                   onChange={this.authCodeOnChange} className="input"/>
                        </Col>
                        <Col span={6} offset={1}>
                            <Button style={{marginTop: 10}} onClick={this.sendVerification}>???????????????</Button>
                        </Col>
                    </Row>
                    <Row>
                        <p></p>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <Button onClick={this.onSubmit} className="register-button">
                                ??????????????????
                            </Button>
                        </Col>
                    </Row>
                    <Row style={{marginTop: 25}}>
                        <Col span={24}>
                            <p className="term">
                                ?????????????????????????????????????????????????????????<a href={'#top'}>????????????</a>?????????????????????????????????????????????
                            </p>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default RegisterForm;
