import React, { Component, Fragment } from "react";
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import NavMenuMobile from "../components/common/NavMenuMobile";
import Categories from "../components/home/Categories";
import Collection from "../components/home/Collection";
import FeaturedProducts from "../components/home/FeaturedProducts";
import NewArrival from "../components/home/NewArrival";
import TopSection from "../components/home/TopSection";
import TopSectionMobile from "../components/home/TopSectionMobile";
import FooterDesktop from "../components/common/FooterDesktop";
import FooterMobile from "../components/common/FooterMobile";
import axios from "axios";
import AppUrl from "../api/AppUrl";

export class HomePage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
    this.getVisitorsDetails();
  }

  getVisitorsDetails = () => {
    axios.get(AppUrl.VisitorDetails).then().catch();
  };

  render() {
    return (
      <Fragment>
        <div className="Desktop">
          <NavMenuDesktop user={this.props.user} />
          <TopSection />
        </div>
        <div className="Mobile">
          <NavMenuMobile />
          <TopSectionMobile />
        </div>

        <Categories />
        <FeaturedProducts />
        <NewArrival />
        <Collection />
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

export default HomePage;
