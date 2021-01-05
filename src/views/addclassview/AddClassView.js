import './AddClassView.css';

import {Col, Row} from 'antd';
import React from 'react';
import {withRouter} from 'react-router-dom';

import AddClassForm from '../../components/addClassForm/AddClassForm';
import {BackToTop} from '../../components/backtotop/BackToTop';
import MyFooter from '../../components/footer/MyFooter';
import LoginedHeader from '../../components/loginedheader/LoginedHeader';
import {SideBar} from '../../components/sidebar/SideBar';

class AddClassView extends React.Component {

    componentDidMount() {
        const user = localStorage.getItem('user');
        this.setState({user: user});
    }

    render() {
        return (
            <div className="home-view">
                <LoginedHeader/>
                <Row style={{minHeight: '100vh'}}>
                    <Col span={4}>
                        <SideBar/>
                    </Col>
                    <Col span={20}>
                        <AddClassForm/>
                        <MyFooter/>
                    </Col>
                </Row>
                <BackToTop/>
            </div>
        );
    }
}

export default withRouter(AddClassView);
