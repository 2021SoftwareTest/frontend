import './ClassHomework.css';

import {Divider} from 'antd';
import React from 'react';

import {HomeworkList} from '../homeworklist/HomeworkList';
import {getCourseHwlist} from "../../services/courseService";


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
        console.log(data);
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
