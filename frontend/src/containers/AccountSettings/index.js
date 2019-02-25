import React, { Component } from 'react';

import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Header from '../Header';
import SideBar from '../../components/SideBar';
import Footer from '../../components/Footer';

import './style.css';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const dummyMembers = [
  {
    username: 'demo',
    role: 'developer',
    email: 'demo@demo.com'
  },
  {
    username: 'demo1',
    role: 'analyst',
    email: 'dem1@d1emo.com'
  },
  {
    username: 'demo2',
    role: 'developer',
    email: 'dem1@d1emo.com'
  }
];

class AccountSettings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRole: 'Role',
      username: '',
      members: []
    };
    this.onDelete = this.onDelete.bind(this);
  }

  onClick = e => {
    this.setState({ selectedRole: e.target.textContent });
  };

  onChangeUsername = e => {
    this.setState({ username: e.target.value });
  };

  onDelete(user) {
    const { members } = this.state;
    const newMembers = members.filter(obj => obj != user);
    this.setState({ members: newMembers });
    // TODO: Add API to delete User Roles
  }

  componentWillMount() {
    ///TODO: Add API to fetch the existing roles under a parent ID
    const members = dummyMembers;
    this.setState({ members: members });
  }

  onAdd = e => {
    const { username, selectedRole } = this.state;
    // TODO: Add API to fetch email from userRoles table
    const email = 'dummyEmail';
    const newMembers = [
      ...this.state.members,
      {
        username: username,
        role: selectedRole,
        email: email
      }
    ];
    this.setState({
      members: newMembers
    });
    // TODO: Add API to add role to the user
  };

  render() {
    const { selectedRole, members } = this.state;
    return (
      <div className="template-light">
        <div className="main-wrapper" id="mainWrapper">
          <Header />
          <div className="page-wrapper d-flex clearfix">
            <SideBar />
            {/* <!-- ====== Page Content Area Start ====== --> */}
            <div className="page-content">
              {/* <!-- Wrapper --> */}
              <div className="wrapper wrapper-content">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-xl-12">
                      <h2>Add Roles</h2>
                      <div className="row addUser">
                        <div>
                          <label htmlFor="req" className="labelCss">
                            Username
                          </label>
                          <input
                            type="text"
                            id="req"
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                            required
                          />
                        </div>
                        <div className="dropdown role">
                          <button
                            className="btn dropdown-toggle"
                            type="button"
                            id="dropdownMenuButton"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            {selectedRole}
                          </button>
                          <div
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenuButton"
                          >
                            <a
                              className="dropdown-item"
                              href="#"
                              onClick={this.onClick}
                            >
                              Developer
                            </a>
                            <a
                              className="dropdown-item"
                              href="#"
                              onClick={this.onClick}
                            >
                              Analyst
                            </a>
                          </div>
                        </div>
                        <button
                          className="btn-small add"
                          type="button"
                          onClick={this.onAdd}
                        >
                          Add
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="all-roles">
                    <h2>All Roles</h2>
                    <div className="roles-table">
                      <table className="table">
                        <thead>
                          <tr>
                            <th scope="col">Username</th>
                            <th scope="col">Role</th>
                            <th scope="col">Email</th>
                            <th scope="col">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {members.map((user, key) => {
                            return (
                              <tr key={key}>
                                <td>{user.username}</td>
                                <td>{user.role}</td>
                                <td>{user.email}</td>
                                <td key={key}>
                                  <FontAwesomeIcon
                                    icon={faTimes}
                                    style={{ marginLeft: '15px' }}
                                    onClick={() => this.onDelete(user)}
                                  />
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ state });

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      // actions here
    },
    dispatch
  );

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AccountSettings)
);
