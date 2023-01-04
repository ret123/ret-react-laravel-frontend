import React, { Component, Fragment } from "react";

import NavMenuDesktop from "../components/common/NavMenuDesktop";
import NavMenuMobile from "../components/common/NavMenuMobile";

import FooterDesktop from "../components/common/FooterDesktop";
import FooterMobile from "../components/common/FooterMobile";
import CategoryProduct from "../components/productDetails/CategoryProduct";
import axios from "axios";
import AppUrl from "../api/AppUrl";

export class ProductCategoryPage extends Component {
  constructor({ match }) {
    super();
    this.state = {
      category: match.params.category,
      products: [],
    };
  }

  componentDidMount() {
    window.scroll(0, 0);
    axios.get(AppUrl.ProductListByCategory(this.state.category)).then((res) => {
      this.setState({ products: res.data });
    });
  }
  render() {
    return (
      <Fragment>
        <div className="Desktop">
          <NavMenuDesktop />
        </div>
        <div className="Mobile">
          <NavMenuMobile />
        </div>
        <CategoryProduct
          category={this.state.category}
          products={this.state.products}
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

export default ProductCategoryPage;
