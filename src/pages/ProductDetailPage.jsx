import React, { Component, Fragment } from "react";
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import NavMenuMobile from "../components/common/NavMenuMobile";

import FooterDesktop from "../components/common/FooterDesktop";
import FooterMobile from "../components/common/FooterMobile";
import ProductDetails from "../components/productDetails/ProductDetails";

import SliderLoader from "../components/placeholder/SliderLoader";
import AppUrl from "../api/AppUrl";
import axios from "axios";

export class ProductDetailPage extends Component {
  constructor({ match }) {
    super();
    this.state = {
      product_id: match.params.id,
      product: [],
      isLoading: "",
      mainDiv: "d-none",
      count: 0,
    };
  }
  componentDidMount() {
    window.scroll(0, 0);
    axios.get(AppUrl.ProductDetails(this.state.product_id)).then((res) => {
      this.setState({ product: res.data, isLoading: "d-none", mainDiv: "" });
    });
  }

  setCart = (count) => {
    this.setState({ count: count });
  };
  render() {
    const user = this.props.user;
    if (this.state.mainDiv == "d-none") {
      return (
        <Fragment>
          <div className="Desktop">
            <NavMenuDesktop count={this.state.count} />
          </div>
          <div className="Mobile">
            <NavMenuMobile />
          </div>
          <SliderLoader isLoading={this.state.isLoading} />
          <div className="Desktop">
            <FooterDesktop />
          </div>
          <div className="Mobile">
            <FooterMobile />
          </div>
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <div className="Desktop">
            <NavMenuDesktop count={this.state.count} />
          </div>
          <div className="Mobile">
            <NavMenuMobile />
          </div>
          <ProductDetails
            product={this.state.product}
            user={user}
            setCart={this.setCart}
          />

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
}

export default ProductDetailPage;
