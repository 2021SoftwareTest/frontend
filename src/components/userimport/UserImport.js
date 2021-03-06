import './UserImport.css';

import {Button, Col, message, Row} from 'antd';
import React from 'react';
import {addCourseUser, getCourseNotInUser} from "../../services/courseService";

class UserImport extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            unselected: [],
            selected: []
        };
    }

    componentDidMount() {
        const data = {
            courseId: this.props.courseId,
        };
        const callback = (data) => {
            console.log(data);
            if (data.status === 200) {
                this.setState({unselected: data.data});
                // message.success(data.msg);
            }
            else {
                // message.error(data.msg);
            }
        };
        console.log(data);
        getCourseNotInUser(data, callback);
    }

    handleSelect = (userId) => {
        const _unselected = this.state.unselected;
        const _selected = this.state.selected;
        let tmpObj;
        for (let i = 0; i < _unselected.length; ++i) {
            if (_unselected[i].userID === userId) {
                tmpObj = _unselected[i];
                _unselected.splice(i, 1);
                break;
            }
        }
        _selected.push(tmpObj);
        this.setState({unselected: _unselected, selected: _selected});
    };

    onSubmit = () => {
        const selected = this.state.selected;
        let students = [];
        for (let i = 0, len = selected.length; i < len; i++) {
            students.push({userId: selected[i].userID});
        }
        const data = {
            students: students,
            courseId: this.props.courseId,
        };
        const callback = (data) => {
            if (data.status === 200) {
                message.success(data.msg);
            } else {
                message.error(data.msg);
            }
        };
        console.log(data);
        addCourseUser(data, callback);
    };

    handleUnselect = (userId) => {
        const _unselected = this.state.unselected;
        const _selected = this.state.selected;
        let tmpObj;
        for (let i = 0; i < _selected.length; ++i) {
            if (_selected[i].userID === userId) {
                tmpObj = _selected[i];
                _selected.splice(i, 1);
                break;
            }
        }
        _unselected.push(tmpObj);
        this.setState({unselected: _unselected, selected: _selected});
    };

    renderStudentList = (list, handleClick) => (
        list.map((item, index) => (
            <div key={index} className="list-item" onClick={() => handleClick(item.userID)}>
                <Row>
                    <Col span={8}>{item.userName}</Col>
                    <Col span={8}>{item.school}</Col>
                    <Col span={8}>{item.id}</Col>
                </Row>
            </div>
        ))
    );

    render() {
        const contentSelected = this.renderStudentList(this.state.selected, this.handleUnselect);
        const contentUnselected = this.renderStudentList(this.state.unselected, this.handleSelect);
        return (
            <div className="import-container">
                <Row>
                    <Col span={12}>
                        <div className="unselected">
                            <h2>????????????</h2>
                            <div className="import-header">
                                <Row>
                                    <Col span={8}>
                                        ??????
                                    </Col>
                                    <Col span={8}>
                                        ??????
                                    </Col>
                                    <Col span={8}>
                                        ??????
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
                            <h2>????????????</h2>
                            <div className="import-header">
                                <Row>
                                    <Col span={8}>
                                        ??????
                                    </Col>
                                    <Col span={8}>
                                        ??????
                                    </Col>
                                    <Col span={8}>
                                        ??????
                                    </Col>
                                </Row>
                            </div>
                            <div className="import-content">
                                {contentSelected}
                            </div>
                        </div>
                    </Col>
                </Row>
                <div className="submit">
                    <Button type="primary" onClick={this.onSubmit}>
                        ??????
                    </Button>
                </div>
            </div>
        );
    }
}

export default UserImport;
