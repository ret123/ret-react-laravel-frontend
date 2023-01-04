import React, { Component, Fragment } from "react";

import NavMenuDesktop from "../components/common/NavMenuDesktop";
import NavMenuMobile from "../components/common/NavMenuMobile";

import FooterDesktop from "../components/common/FooterDesktop";
import FooterMobile from "../components/common/FooterMobile";

import axios from "axios";
import AppUrl from "../api/AppUrl";
import SubcategoryProduct from "../components/productDetails/SubcategoryProduct";

export class ProductSubcategoryPage extends Component {
  constructor({ match }) {
    super();
    this.state = {
      category: match.params.category,
      subcategory: match.params.subcategory,
      products: [],
    };
  }

  componentDidMount() {
    window.scroll(0, 0);
    axios
      .get(
        AppUrl.ProductListBySubcategory(
          this.state.category,
          this.state.subcategory
        )
      )
      .then((res) => {
        console.log(res.data);
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
        <SubcategoryProduct
          category={this.state.category}
          subcategory={this.state.subcategory}
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

export default ProductSubcategoryPage;
