import React from 'react';
import { withRouter } from 'react-router-dom';

import Header from '../components/header/Header';
import RegisterForm from '../components/register/RegisterForm';

class RegisterView extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <RegisterForm />
      </div>
    );
  }
}

export default withRouter(RegisterView);
