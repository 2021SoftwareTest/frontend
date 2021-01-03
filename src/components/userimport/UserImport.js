import './UserImport.css';

import React from 'react';
import {Row, Col} from 'antd';

const data = [
    {userId:1, name:"xxx", school:"SJTU", ID:"518021910xxx"},
    {userId:1, name:"xxx", school:"SJTU", ID:"518021910xxx"},
    {userId:1, name:"xxx", school:"SJTU", ID:"518021910xxx"},
    {userId:1, name:"xxx", school:"SJTU", ID:"518021910xxx"},
    {userId:1, name:"xxx", school:"SJTU", ID:"518021910xxx"}
];

class UserImport extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            unselected: [],
            selected: []
        }
    }

    componentDidMount() {

    }

    renderStudentList = (item) => {

    }

    render() {
        const contentSelected = [];
        const contentUnselected = [];
        return(
            <div className="import-container">
                <Row>
                    <Col span={12}>
                        <div className="unselected">
                            <h2>未选学生</h2>
                            <div className="import-header">
                                <Row>
                                    <Col span={8}>
                                        姓名
                                    </Col>
                                    <Col span={8}>
                                        学校
                                    </Col>
                                    <Col span={8}>
                                        学号
                                    </Col>
                                </Row>
                            </div>
                            <div classNmae="import-content">
                                {contentUnselected}
                            </div>
                        </div>
                    </Col>
                    <Col span={12}>
                        <div className="selected">
                            <h2>未选学生</h2>
                            <div className="import-header">
                                <Row>
                                    <Col span={8}>
                                        姓名
                                    </Col>
                                    <Col span={8}>
                                        学校
                                    </Col>
                                    <Col span={8}>
                                        学号
                                    </Col>
                                </Row>
                            </div>
                            <div className="import-content">
                                {contentSelected}
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default UserImport;