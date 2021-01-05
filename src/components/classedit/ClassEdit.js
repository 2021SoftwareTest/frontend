import './ClassEdit.css';

import React from 'react';

import ClassInfo from "../classinfo/ClassInfo";

class ClassEdit extends React.Component {

    render() {
        return (
            <div className="class-edit">
                <ClassInfo courseId={this.props.courseId}/>
            </div>

        );
    }
}

export default ClassEdit;
