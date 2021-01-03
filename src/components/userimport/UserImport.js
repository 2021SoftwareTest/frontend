import './UserImport.css';

import React from 'react';
import {Row, Col, Button} from 'antd';

const data = [
    {userId:1, name:"xxx", school:"SJTU", ID:"518021910xxx"},
    {userId:2, name:"xxx", school:"SJTU", ID:"518021910xxx"},
    {userId:3, name:"xxx", school:"SJTU", ID:"518021910xxx"},
    {userId:4, name:"xxx", school:"SJTU", ID:"518021910xxx"},
    {userId:5, name:"xxx", school:"SJTU", ID:"518021910xxx"}
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
        this.setState({unselected: data});
    }

    handleSelect = (userId) => {
        let _unselected = this.state.unselected;
        let _selected = this.state.selected;
        let tmpObj;
        for (let i = 0; i < _unselected.length; ++i) {
            if (_unselected[i].userId === userId) {
                tmpObj = _unselected[i];
                _unselected.splice(i, 1);
                break;
            }
        }
        _selected.push(tmpObj);
        this.setState({unselected:_unselected, selected: _selected});
    }

    onSubmit = () => {
        console.log(this.state.selected);
    };

    handleUnselect = (userId) => {
        let _unselected = this.state.unselected;
        let _selected = this.state.selected;
        let tmpObj;
        for (let i = 0; i < _selected.length; ++i) {
            if (_selected[i].userId === userId) {
                tmpObj = _selected[i];
                _selected.splice(i, 1);
                break;
            }
        }
        _unselected.push(tmpObj);
        this.setState({unselected:_unselected, selected: _selected});
    };

    renderStudentList = (list, handleClick) => {
        return(
            list.map((item, index) => (
                <div key={index} className="list-item" onClick={() => handleClick(item.userId)}>
                    <Row>
                        <Col span={8}>{item.name}</Col>
                        <Col span={8}>{item.school}</Col>
                        <Col span={8}>{item.ID}</Col>
                    </Row>
                </div>
            ))
        );
    };

    render() {
        const contentSelected = this.renderStudentList(this.state.selected, this.handleUnselect);
        const contentUnselected = this.renderStudentList(this.state.unselected, this.handleSelect);
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
                            <h2>已选学生</h2>
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
                <div className="submit">
                    <Button type="primary" onClick={this.onSubmit}>
                        提交
                    </Button>
                </div>
            </div>
        );
    }
}

export default UserImport;