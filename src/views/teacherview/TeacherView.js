import React from 'react';

import MyFooter from "../../components/footer/MyFooter";
import LoginedHeader from "../../components/loginedheader/LoginedHeader";
import TeacherHeader from "../../components/teacherheader/TeacherHeader";

class TeacherView extends React.Component {
    render() {
        return (
            <div className="teacher-view">
                <LoginedHeader />
                <TeacherHeader />
                <div>

                </div>
                <MyFooter />
            </div>
        );
    }
}

export default TeacherView;
