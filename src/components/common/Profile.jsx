import React, { Component, Fragment } from "react";
import { Redirect } from "react-router";

export class Profile extends Component {
  render() {
    const user = this.props.user;
    let email;
    let name;
    if (user) {
      email = user.email;
      name = user.name;
    }
    if (!localStorage.getItem("token")) {
      return <Redirect to="/login" />;
    }
    return (
      <Fragment>
        <h1 className="bottom-margin">User Profile Page</h1>
        <ul className="list-group">
          <li className="list-group-item">Name: {name}</li>
          <li className="list-group-item">Email: {email}</li>
        </ul>
      </Fragment>
    );
  }
}

export default Profile;
