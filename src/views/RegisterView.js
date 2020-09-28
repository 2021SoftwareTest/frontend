import '../css/register.css';

import React from 'react';
import { withRouter } from 'react-router-dom';

import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import RegisterForm from '../components/register/RegisterForm';

class RegisterView extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="register-view">
          <div className="text-section">
            <p>Test string</p>
          </div>
          <div className="register-section">
            <RegisterForm />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(RegisterView);
