import './ClassMainPage.css';

import {Button, Col, Divider, Row} from 'antd';
import React from 'react';

import AnnouncementCell from '../announcementcell/AnnouncementCell';
import UnitCell from '../unitcell/UnitCell';

const announcementContentEx = [
    {title: '期末考试通知', content: '各位同学好，本学期课程已经进入尾声，本课程期末考试安排如下...', time: '2020年11月15日 15:15:15'},
    {title: '期末考试通知2', content: '各位同学好，本学期课程已经进入尾声，本课程期末考试安排如下...', time: '2020年11月15日 15:15:15'},
];

const homeworkContentEx = [
    {
        title: '第一单元',
        homeworkList: [
            {title: '作业1', status: '', link: ''},
            {title: '作业2', status: '', link: ''},
        ],
    },
    {
        title: '第二单元',
        homeworkList: [
            {title: '作业1', status: '', link: ''},
            {title: '作业2', status: '', link: ''},
        ],
    },
    {
        title: '第三单元',
        homeworkList: [
            {title: '作业1', status: '', link: ''},
            {title: '作业2', status: '', link: ''},
        ],
    },
];

class ClassMainPage extends React.Component {

    render() {
        const homeworkContent = homeworkContentEx.map((item) => <UnitCell unitCellContent={item} key={item.title}/>);
        const announcementContent = announcementContentEx.map((item) => <AnnouncementCell announcement={item}
                                                                                          key={item.title}/>);
        return (
            <div className="class-main-page">
                <Row>
                    <Col span={17}>
                        <div className="main-content">
                            <div className="announcement-section">
                                <h2>最近的公告</h2>
                                <Divider style={{margin: '10px 0'}}/>
                                {announcementContent}
                            </div>
                            <div className="unit-section">{homeworkContent}</div>
                        </div>
                    </Col>
                    <Col span={5}>
                        <div className="operation-board">
                            <h2>课程状态</h2>
                            <Button>选择主页</Button>
                            <Button>查看课程动态</Button>
                            <Button>新公告</Button>
                            <Button>学生视图</Button>
                            <Button>查看课程分析</Button>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default ClassMainPage;
