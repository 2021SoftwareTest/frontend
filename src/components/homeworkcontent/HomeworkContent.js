import "./HomeworkContent.css";

import React from 'react';
import {Row, Col} from "antd";

// this.props.data = {title:, description:, note:, ...} 详情见“获取作业详情”

class HomeworkContent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            hwContent: "",
            noteContent: ""
        }
    };

    render() {
        const {title, endTime, description, score, state} = this.props.data;
        return(
            <div>
                
            </div>
        );
    }

}

export default HomeworkContent;
