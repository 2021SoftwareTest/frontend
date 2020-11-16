import './CardInfo.css';

import {Avatar, Col, Input, Row} from 'antd';
import React from 'react';

const { TextArea } = Input;

class ClassInfo extends React.Component {
    constructor(props) {
        super(props);
        // eslint-disable-next-line react/prop-types
        const {name, description, detail, books} = this.props.classInfo;
        this.state = {
            name: name,
            description: description,
            detail: detail,
            books: books
        };
    }

    nameOnChange = (value) => {
        console.log(value.currentTarget.value);
        this.setState({name: value});
    };

    descriptionOnChange = (value) => {
        this.setState({description: value});
    };

    detailOnChange = (value) => {
        this.setState({detail: value});
    };

    booksOnChange = (value) => {
        this.setState({books: value});
    };

    render() {
        return (
            <div className="class-card">
                <Row>
                    <Col span={5} style={{paddingLeft:"4.5%", paddingTop:15}}>
                        <Avatar size={100} />
                    </Col>
                    <Col span={19}>
                        <div className="class-name">
                            <Row>
                                <Col span={24}>
                                    <h2>课程名称</h2>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={24}>
                                    <Input value={this.state.name} onChange={this.nameOnChange}/>
                                </Col>
                            </Row>
                        </div>
                        <div className="class-detail">
                            <Row>
                                <Col span={24}>
                                    <h2>所需教材</h2>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={24}>
                                    <Input value={this.state.books} onChange={this.booksOnChange}/>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
                <div className="class-intro">
                    <Row>
                        <Col span={24}>
                            <h2>课程简介</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <TextArea value={this.state.description}
                                      placeholder="请填写课程简介"
                                      autoSize={{minRows: 3, maxRows: 5}}
                                      onChange={this.descriptionOnChange}
                            />
                        </Col>
                    </Row>
                </div>
                <div className="class-detail">
                    <Row>
                        <Col span={24}>
                            <h2>课程详情</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <TextArea value={this.state.detail}
                                      placeholder="请填写课程详情"
                                      autoSize={{minRows: 5, maxRows: 8}}
                                      onChange={this.detailOnChange}
                            />
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default ClassInfo;
