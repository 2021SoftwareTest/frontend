import "./UserProfile.css";

import {Button, Col, Row} from "antd";
import React from "react";

export class UserProfile extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="class-unit">
                <Row>
                    <Col span={20}>
                        <Row>
                            <div>
                                <h1> 胡媛媛</h1>
                                <h2> 电话号码</h2>
                                <h3> 54749110</h3>
                                <h2> 电子邮件</h2>
                                <h3>hyy@sjtu.edu.cn</h3>
                                <Button>修改信息</Button>
                            </div>
                        </Row>
                    </Col>
                </Row>
            </div>

        );
    }
}
