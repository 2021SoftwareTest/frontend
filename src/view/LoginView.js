import React from 'react';
import { withRouter } from 'react-router-dom';

import LoginTable from '../components/LoginTable';

class LoginView extends React.Component {
  render() {
    return (
      <div>
        <LoginTable />
      </div>
    );
  }
}

export default withRouter(LoginView);
