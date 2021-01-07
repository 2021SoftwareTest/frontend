import './ClassHomework.css';

import {Divider} from 'antd';
import React from 'react';

import {HomeworkList} from '../homeworklist/HomeworkList';
import {getCourseHwlist} from "../../services/courseService";

// const todoHomework = [
//     {
//         hwId: 1,
//         courseId:1,
//         userId:1,
//         startTime:"2021-1-1",
//         endTime:"2021-1-8",
//         title: '语文作业1',
//         score:'100',
//         state:1,
//         answerId: 1,
//     },
//     {
//         hwId: 2,
//         courseId:1,
//         userId:1,
//         startTime:"2021-1-1",
//         endTime:"2021-1-8",
//         title: '语文作业2',
//         score:'100',
//         state:2,
//         answerId: 1,
//     },
// ];
// const doneHomework = [
//     {
//         hwId: 3,
//         courseId:1,
//         userId:1,
//         startTime:"2021-1-1",
//         endTime:"2021-1-8",
//         title: '语文作业3',
//         score:'100',
//         state:3,
//         answerId: 1,
//     },
//     {
//         hwId: 4,
//         courseId:1,
//         userId:1,
//         startTime:"2021-1-1",
//         endTime:"2021-1-8",
//         title: '语文作业4',
//         score:'100',
//         state:4,
//         answerId: 1,
//     },
// ];

class ClassHomework extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            todoHomework: [],
            doneHomework: [],
            courseId: props.courseId,
        }
    }

    componentDidMount() {
        const data = {
            courseId: this.state.courseId,
        };
        const callback = (data) => {
            console.log(data);
            let todoHomework = [];
            let doneHomework = [];
            for (let i = 0; i < data.data.length; i++) {
                if (data.data[i].state <= 2) {
                    todoHomework.push(data.data[i]);
                } else {
                    doneHomework.push(data.data[i]);
                }
            }
            console.log(todoHomework);
            console.log(doneHomework);
            this.setState({
                todoHomework: todoHomework,
                doneHomework: doneHomework
            });

        };
        getCourseHwlist(data, callback);
    }

    render() {
        return (
            <div className="class-homework">
                <h2 style={{marginTop: 30, marginBottom: 0}}>最近布置的作业</h2>
                <Divider style={{margin: '20px 0'}}/>
                <HomeworkList data={this.state.todoHomework}/>
                <h2 style={{marginTop: 30, marginBottom: 0}}>已经过期的作业</h2>
                <Divider style={{margin: '20px 0'}}/>
                <HomeworkList data={this.state.doneHomework}/>
            </div>
        );
    }
}

export default ClassHomework;
