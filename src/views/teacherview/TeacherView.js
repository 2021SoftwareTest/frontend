import './TeacherView.css';

import {Col, Row} from 'antd';
import React from 'react';

import { ClassDiscuss } from '../../components/classdiscuss/ClassDiscuss';
import ClassEdit from '../../components/classedit/ClassEdit';
import ClassHomework from '../../components/classhomework/ClassHomework';
import ClassMainPage from '../../components/classmainpage/ClassMainPage';
import { ClassNotice } from '../../components/classnotice/ClassNotice';
import { ClassOutline } from '../../components/classoutline/ClassOutline';
import { ClassUnit } from '../../components/classunit/ClassUnit';
import ClassUser from '../../components/classuser/ClassUser';
import MyFooter from '../../components/footer/MyFooter';
import LoginedHeader from '../../components/loginedheader/LoginedHeader';
import {SideBar} from '../../components/sidebar/SideBar';
import TeacherHeader from '../../components/teacherheader/TeacherHeader';
import UserImport from '../../components/userimport/UserImport';

class TeacherView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curSection: 0,
    };
  }

  menuCallback = (key) => {
    switch (key) {
      case 'MainPage':
        this.setState({ curSection: 0 });
        break;
      case 'Announcement':
        this.setState({ curSection: 1 });
        break;
      case 'Teams':
        this.setState({ curSection: 2 });
        break;
      case 'Project':
        this.setState({ curSection: 3 });
        break;
      case 'Score':
        this.setState({ curSection: 4 });
        break;
      case 'User':
        this.setState({ curSection: 5 });
        break;
      case 'File':
        this.setState({ curSection: 6 });
        break;
      case 'Outline':
        this.setState({ curSection: 7 });
        break;
      case 'Test':
        this.setState({ curSection: 8 });
        break;
      case 'Unit':
        this.setState({ curSection: 9 });
        break;
      case 'Edit':
        this.setState({ curSection: 10 });
        break;
      case 'Import':
        this.setState({ curSection: 11});
        break;
      default:
        this.setState({curSection:0});
        console.log("error");
        break;
    }
  };

  render() {
    const curSection = this.state.curSection;
    const content =
      curSection === 0 ? (
        <ClassMainPage />
      ) : curSection === 1 ? (
        <ClassNotice />
      ) : curSection === 2 ? (
        <ClassHomework />
      ) : curSection === 3 ? (
        <ClassDiscuss />
      ) : curSection === 4 ? (
        <></>
      ) : curSection === 5 ? (
        <ClassUser />
      ) : curSection === 6 ? (
        <></>
      ) : curSection === 7 ? (
        <ClassOutline />
      ) : curSection === 8 ? (
        <></>
      ) : curSection === 9 ? (
        <ClassUnit />
      ) : curSection === 10 ? (
        <ClassEdit />
      ) : curSection === 11 ? (
        <UserImport />
      ):(
        <></>
      );
    return (
      <div className="teacher-view">
        <LoginedHeader />
        <Row>
          <Col span={4}>
            <SideBar />
          </Col>
          <Col span={20}>
            <TeacherHeader menuCallback={this.menuCallback} />
            <div className="teacher-view-content">{content}</div>
            <MyFooter />
          </Col>
        </Row>
      </div>
    );
  }
}

export default TeacherView;
