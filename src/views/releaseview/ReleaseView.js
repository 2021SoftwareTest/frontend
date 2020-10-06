import './ReleaseView.css';

import {Col, Row } from 'antd';
import React from 'react';

import MyFooter from "../../components/footer/MyFooter";
import MyHeader from "../../components/header/MyHeader";

class ReleaseView extends React.Component {
    render() {
        return (
            <div>
                <MyHeader />
                <div className="release-view-container">
                    <Row>
                        <Col span={24}>
                            <h1>创建新作业</h1>

                        </Col>
                    </Row>
                </div>
                <MyFooter />
            </div>
        );
    }
}

export default ReleaseView;
