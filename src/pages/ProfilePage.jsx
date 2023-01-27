import React, { Component, Fragment } from "react";
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import NavMenuMobile from "../components/common/NavMenuMobile";

import FooterDesktop from "../components/common/FooterDesktop";
import FooterMobile from "../components/common/FooterMobile";
import Profile from "../components/common/Profile";

export class ProfilePage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }
  render() {
    const user = this.props.user;
    return (
      <Fragment>
        <div className="Desktop">
          <NavMenuDesktop user={user} />
        </div>
        <div className="Mobile">
          <NavMenuMobile />
        </div>
        <Profile user={user} />

        <div className="Desktop">
          <FooterDesktop />
        </div>
        <div className="Mobile">
          <FooterMobile />
        </div>
      </Fragment>
    );
  }
}

export default ProfilePage;
