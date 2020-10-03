import { Col, Row } from 'antd';
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
                <Col span={12} offset={6}>
                    <Row>
                        <HomeworkHeader/>
                    </Row>
                    <Row>
                        <HomeworkDetail/>
                    </Row>
                    <HomeworkHandin/>
                </Col>
                <MyFooter />
            </div>
        );
    }
}

export default withRouter(HomeworkView);
