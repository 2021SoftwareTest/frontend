import './ClassHomework.css'

import { Divider } from 'antd';
import React from 'react';
import {HomeworkList} from "../homeworklist/HomeworkList";

const todoHomework = [
    {
        title: '语文作业3',
        tag: '未读',
        comment:'deadline: Today'
    },
    {
        title: '语文作业4',
        tag: '未读',
        comment:'deadline: Today'
    },
    {
        title: '数学作业2',
        tag: '未读',
        comment:'最后一题比较难，同学们注意一下'
    },
    {
        title: '英语作业2',
        tag: '正在做',
        comment:'deadline: Today'
    },
];
const doneHomework = [
    {
        title: '语文作业1',
        tag: '已完成',
        comment: '做的不错'
    },
    {
        title: '语文作业2',
        tag: '请订正',
        comment: '作文自己再琢磨琢磨'
    },
    {
        title: '数学作业1',
        tag: '已完成',
        comment: '有进步'
    },
    {
        title: '英语作业1',
        tag: '已结束',
        comment: '无'
    },
];

class ClassHomework extends React.Component {
    render() {
        return (
            <div className="class-homework">
                <h2 style={{marginTop:30, marginBottom:0}}>最近布置的作业</h2>
                <Divider style={{margin:"20px 0"}}/>
                <HomeworkList data={todoHomework} />
                <h2 style={{marginTop:30, marginBottom:0}}>已经过期的作业</h2>
                <Divider style={{margin:"20px 0"}}/>
                <HomeworkList data={doneHomework} />
            </div>
        );
    }
}

export default ClassHomework;
