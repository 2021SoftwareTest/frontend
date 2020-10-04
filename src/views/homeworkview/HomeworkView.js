import './HomeworkView.css';

import { Col, Row, Button } from 'antd';
import React from 'react';
import { withRouter } from 'react-router-dom';

import MyFooter from '../../components/footer/MyFooter';
import MyHeader from '../../components/header/MyHeader';
import {HomeworkDetail} from "../../components/homeworkdetail/HomeworkDetail";
import {HomeworkHandin} from "../../components/homeworkhandin/HomeworkHandin";
import {HomeworkHeader} from "../../components/homeworkheader/HomeworkHeader";

class HomeworkView extends React.Component {
    render() {
        return (
            <div>
                <MyHeader />
                <HomeworkHeader/>
                <div className="homework-container">
                    <Row>
                        <Col span={24} style={{display: "flex"}}>
                            <p className="homework-title-name"><a>作业1</a>&nbsp;/&nbsp;<a>文件1</a></p>
                            <Button className="cancel-button">取消</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col spa={24}>
                            <HomeworkDetail/>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <HomeworkHandin/>
                        </Col>
                    </Row>
                </div>
                <MyFooter />
            </div>
        );
    }
}

export default withRouter(HomeworkView);
