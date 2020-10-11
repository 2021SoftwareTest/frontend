import './ClassEdit.css'

import { AntDesignOutlined } from '@ant-design/icons';
import { Avatar, Row, Col, Input } from 'antd';
import React from 'react';
import ClassInfo from "../classinfo/ClassInfo";

const classInfo = {
    name: "六年级语文",
    description: "这个老师很懒，他没有写描述。",
    detail: "简介都没写，还想让我写detail？pa",
    books: "《深入理解计算机系统》 《没 有 精 神》"
};


class ClassEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          name:"",
          description:"",
          books: []
        };
    }

    render() {
        return (
          <div className="class-edit">
              <ClassInfo classInfo={classInfo} />
          </div>
        );
    }
}

export default ClassEdit;
