import React, { Component, Fragment } from "react";
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import NavMenuMobile from "../components/common/NavMenuMobile";

import FooterDesktop from "../components/common/FooterDesktop";
import FooterMobile from "../components/common/FooterMobile";

import axios from "axios";
import AppUrl from "../api/AppUrl";
import SearchList from "../components/productDetails/SearchList";

export class SearchPage extends Component {
  constructor({ match }) {
    super();
    this.state = {
      searchKey: match.params.searchKey,
      products: [],
    };
  }

  componentDidMount() {
    window.scroll(0, 0);
    axios.get(AppUrl.Search(this.state.searchKey)).then((res) => {
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
        <SearchList
          searchKey={this.state.searchKey}
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

export default SearchPage;
