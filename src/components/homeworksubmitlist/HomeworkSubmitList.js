import "./HomeworkSubmitList.css"

import React from "react";
import { Col, Menu, Row } from 'antd';


const data = [
    {userId: 1, name: "ckkk", ID:"518021910xxx", school: "SJTU", state: 0, answerId: null, checkId: null, standardAnswerId: null},
    {userId: 1, name: "ckkk", ID:"518021910xxx", school: "SJTU", state: 0, answerId: null, checkId: null, standardAnswerId: null},
    {userId: 1, name: "ckkk", ID:"518021910xxx", school: "SJTU", state: 0, answerId: null, checkId: null, standardAnswerId: null},
    {userId: 1, name: "ckkk", ID:"518021910xxx", school: "SJTU", state: 0, answerId: null, checkId: null, standardAnswerId: null},
    {userId: 1, name: "ckkk", ID:"518021910xxx", school: "SJTU", state: 0, answerId: null, checkId: null, standardAnswerId: null},
    {userId: 1, name: "ckkk", ID:"518021910xxx", school: "SJTU", state: 0, answerId: null, checkId: null, standardAnswerId: null},
    {userId: 1, name: "ckkk", ID:"518021910xxx", school: "SJTU", state: 0, answerId: null, checkId: null, standardAnswerId: null},
    {userId: 1, name: "ckkk", ID:"518021910xxx", school: "SJTU", state: 0, answerId: null, checkId: null, standardAnswerId: null},
    {userId: 1, name: "ckkk", ID:"518021910xxx", school: "SJTU", state: 0, answerId: null, checkId: null, standardAnswerId: null},
    {userId: 1, name: "ckkk", ID:"518021910xxx", school: "SJTU", state: 0, answerId: null, checkId: null, standardAnswerId: null},
]

class HomeworkSubmitList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            studentList: []
        }
    }

    componentDidMount(){
        this.setState({studentList: data});
    }

    render() {
        return(
            <div>

            </div>
        )
    }
}