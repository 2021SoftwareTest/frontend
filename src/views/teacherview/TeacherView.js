import React from 'react';

import MyFooter from "../../components/footer/MyFooter";
import LoginedHeader from "../../components/loginedheader/LoginedHeader";
import TeacherHeader from "../../components/teacherheader/TeacherHeader";
import ClassMainPage from "../../components/classmainpage/ClassMainPage";

class TeacherView extends React.Component {
    render() {
        return (
            <div className="teacher-view">
                <LoginedHeader />
                <TeacherHeader />
                <div>
                    <ClassMainPage />
                </div>
                <MyFooter />
            </div>
        );
    }
}

export default TeacherView;
