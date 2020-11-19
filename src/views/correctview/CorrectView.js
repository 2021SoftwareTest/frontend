import {Col, Divider, Row} from 'antd';
import React from 'react';
import {withRouter} from 'react-router-dom';

import MyFooter from '../../components/footer/MyFooter';
import {HomeworkCorrect} from "../../components/homeworkcorrect/HomeworkCorrect";
import {HomeworkDetail} from "../../components/homeworkdetail/HomeworkDetail";
import {HomeworkDone} from "../../components/homeworkdone/HomeworkDone";
import {HomeworkHeader} from "../../components/homeworkheader/HomeworkHeader";
import LoginedHeader from "../../components/loginedheader/LoginedHeader";

class CorrectView extends React.Component {
    render() {
        return (
            <div>
                <LoginedHeader/>
                <HomeworkHeader/>
                <Row>
                    <Col span={12} offset={6}>
                        <Divider orientation="left" > 作业内容 </Divider>
                        <HomeworkDetail/>
                        <Divider orientation="left" > 作业提交 </Divider>
                        <HomeworkDone/>
                        <Divider orientation="left" > 批改 </Divider>
                        <HomeworkCorrect/>
                    </Col>
                </Row>
                <MyFooter/>
            </div>
        );
    }
}

export default withRouter(CorrectView);
