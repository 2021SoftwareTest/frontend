import React from 'react';
import { withRouter } from 'react-router-dom';

class HomeView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // let user = localStorage.getItem("user");
    // this.setState({user:user});
    console.log('HomeView');
  }

  render() {
    return <div>HomeView</div>;
  }
}

export default withRouter(HomeView);
