import "./ClassUnit.css";

import {PlusOutlined} from '@ant-design/icons';
import { Button, Col, Divider, Row} from "antd";
import React from 'react';

import UnitCell from "../unitcell/UnitCell";

const homeworkContentEx = [
    {title: "第一单元", homeworkList:[{title: "作业1", status: "", link:""}, {title: "作业2", status: "", link:""}]},
    {title: "第二单元", homeworkList:[{title: "作业1", status: "", link:""}, {title: "作业2", status: "", link:""}]},
    {title: "第三单元", homeworkList:[{title: "作业1", status: "", link:""}, {title: "作业2", status: "", link:""}]}
];


export class ClassUnit extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        const homeworkContent = homeworkContentEx.map((item) => (<UnitCell unitCellContent={item} key={item.title}/>));
        return (
            <div className="class-unit">
                <Row>
                    <Col span={20}>
                        <Row>
                            <Col span={20}>
                            </Col>
                            <Col span={2}>
                                <Button>查看进度</Button>
                            </Col>
                            <Col span={2}>
                                <Button type={"primary"}><PlusOutlined/>单元</Button>
                            </Col>
                        </Row>
                        <Divider style={{margin: "10px 0"}}/>
                        {homeworkContent}
                    </Col>
                </Row>
            </div>
        );
    }

}
