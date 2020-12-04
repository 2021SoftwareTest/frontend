import './ClassEdit.css';

import React from 'react';

import ClassInfo from "../classinfo/ClassInfo";

const classInfo = {
    subject: "六年级语文",
    semester: "第二学期",
    grade: "六年级",
    year: "2020",
    students: [
        {
            'userID':15,
            'userType':2,
            'userName': 'dsy',
            'password': '12345',
            'school': 'SJTU',
            'id': 'id unknown',
            'phone': '123456666',
            'email': '122@ass.com'
        }
    ],
    courseId: 1,
    description: "这个老师很懒，他没有写描述。",
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
              {/* eslint-disable-next-line react/prop-types */}
              <ClassInfo classInfo={classInfo} addClass={this.props.addClass}/>
          </div>
        );
    }
}

export default ClassEdit;
