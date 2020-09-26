import '../css/login.css';

import React from 'react';
import { withRouter } from 'react-router-dom';

class LoginView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // let user = localStorage.getItem("user");
    // this.setState({user:user});
    console.log('LoginView');
  }

  render() {
    return (
      <div>
        <div className="top">
          <div className="top_content">
            <div className="top_content_logo">
              <a className="header-logo-invertocat">
                <svg height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                  />
                </svg>
              </a>
            </div>
            <div className="top_content_menu">
              <ul>
                <li className="ml-lg-2">Math</li>
                <li className="ml-lg-4">English</li>
                <li className="ml-lg-4">Science</li>
                <li className="ml-lg-4" width={87}>
                  Art
                </li>
                <li className="ml-lg-4">Death</li>
              </ul>
              <div className="top_content_menu_input">
                <input type="text" placeholder="Search Homework Hub" />
                <img src="https://github.githubassets.com/images/search-key-slash.svg" alt={'search'} />
              </div>
              <div className="top_content_menu_input_text">
                <a>Sign in</a>
                <span>or</span>
                <a>Sign up</a>
              </div>
            </div>
          </div>
        </div>
        <div className="middle">
          <div className="middle_content">
            <div className="middle_content_1">
              <h1>Built for students</h1>
            </div>
            <div className="middle_content_2">
              <div className="middle_content_2_login">
                <div className="middle_content_2_login_lable">UserName</div>
                <div>
                  <input className="middle_content_2_login_input" type="text" placeholder="  Pick a username" />
                </div>
                <div className="middle_content_2_login_lable">Email</div>
                <div>
                  <input className="middle_content_2_login_input" type="text" placeholder="you@example.com" />
                </div>
                <div className="middle_content_2_login_lable">Password</div>
                <div>
                  <input className="middle_content_2_login_input" type="password" placeholder="  Create a password" />
                </div>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <p className="middle_content_2_login_note">Make sure it's at least 7 characters, including a number, and a lowercase letter.</p>
                <button className="middle_content_2_login_button">Sign up for Homework Hub</button>
                <p className="middle_content_2_login_aa">
                  By clicking “Sign up for Homework Hub”, you agree to our
                  {/* eslint-disable-next-line react/jsx-no-target-blank */}
                  <a href="https://help.github.com/terms" target="_blank">
                    terms of service
                  </a>{' '}
                  and
                  {/* eslint-disable-next-line react/jsx-no-target-blank */}
                  <a href="https://help.github.com/privacy" target="_blank">
                    privacy statement
                  </a>
                  . <span className="js-email-notice">We’ll occasionally send you account related emails.</span>
                </p>
              </div>
            </div>
            <div className="middle_content_3">
              <p>
                Homework Hub is a cloud platform inspired by the way you do homework. From <a href="#">math</a> to <a href="#">death</a>, you can do and copy homework, ruin brain, and die alongside 28 million&nbsp;students.
              </p>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="bottom_top_left">
            <div className="bottom_top_left_img">
              <svg height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                />
              </svg>
            </div>
            <div className="bottom_top_left_h">
              <h4>Homework Hub Universe</h4>
              <p>A conference for the students, teachers, and parents defining the future of&nbsp;homework</p>
            </div>
          </div>
          <div className="bottom_top_right">
            <div className="bottom_top_right_p">
              <p>Through a combination of creativity, determination, and (a lot of) carefully crafted homework, the future is being built every&nbsp;day.</p>
            </div>
            <div className="bottom_top_right_p_img">
              <img width={120} src="https://assets-cdn.github.com/images/modules/site/building-the-future/green-purple-hexagons.png" alt="green-purple-hexagons" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginView);
