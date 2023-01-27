import React, { Component, Fragment } from "react";
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import NavMenuMobile from "../components/common/NavMenuMobile";

import FooterDesktop from "../components/common/FooterDesktop";
import FooterMobile from "../components/common/FooterMobile";
import Favourite from "../components/favourite/Favourite";

export class FavouritePage extends Component {
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
        <Favourite user={user} />
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

export default FavouritePage;
