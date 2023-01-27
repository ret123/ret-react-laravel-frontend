import React, { Component, Fragment } from "react";
import { Container, Row, Col, Navbar, Button } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import Logo from "../../assets/images/easyshop.png";
import Bars from "../../assets/images/bars.png";

import MegaMenuAll from "../home/MegaMenuAll";
import axios from "axios";
import AppUrl from "../../api/AppUrl";

export class NavMenuDesktop extends Component {
  constructor() {
    super();
    this.state = {
      sideNavState: "sideNavClose",
      contentOverlayState: "ContentOverlayClose",
      searchKey: "",
      showSearchResult: false,
      cartCount: 0,
      favCount: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.redirectSearch = this.redirectSearch.bind(this);
  }

  componentDidMount() {
    if (localStorage.getItem("token")) {
      let email = this.props.user.email;

      axios.get(AppUrl.CartCount(email)).then((res) => {
        this.setState({ cartCount: res.data });
      });

      axios.get(AppUrl.FavoutriteList(email)).then((res) => {
        this.setState({
          favCount: res.data.count,
        });
      });
    }
  }

  menuClick = () => {
    this.sideNavToggle();
  };

  contentOverlayClick = () => {
    this.sideNavToggle();
  };

  sideNavToggle = () => {
    let sideNavState = this.state.sideNavState;
    let contentOverlayState = this.state.contentOverlayState;
    if (sideNavState === "sideNavOpen") {
      this.setState({
        sideNavState: "sideNavClose",
        contentOverlayState: "ContentOverlayClose",
      });
    } else {
      this.setState({
        sideNavState: "sideNavOpen",
        contentOverlayState: "ContentOverlayOpen",
      });
    }
  };

  logout = () => {
    localStorage.clear();
  };

  handleChange(e) {
    const searchKey = e.target.value;

    this.setState({ searchKey: searchKey });
  }

  handleSearch() {
    if (this.state.searchKey.length >= 2) {
      this.setState({ showSearchResult: true });
    }
  }

  redirectSearch() {
    if (this.state.showSearchResult === true) {
      return <Redirect to={"/productbysearch/" + this.state.searchKey} />;
    }
  }

  render() {
    let view;
    if (localStorage.getItem("token")) {
      view = (
        <div>
          <Link to="/cart" className="cart-btn">
            <i className="fa fa-shopping-cart"></i> {this.state.cartCount} Items
          </Link>
          <Link to="/notification" className="btn">
            <i className="fa h4 fa-bell"></i>
            <sup>
              <span className="badge text-white bg-danger">5</span>
            </sup>
          </Link>
          <Link to="/favourite">
            <i className="fa h4 fa-heart"></i>
            <sup>
              <span className="badge text-white bg-danger">
                {this.state.favCount}
              </span>
            </sup>
          </Link>

          <Link to="/profile" className="h4 btn">
            Profile
          </Link>
          <Link to="/" onClick={this.logout} className="h4 btn">
            Logout
          </Link>
        </div>
      );
    } else {
      view = (
        <div>
          <Link to="/cart" className="cart-btn">
            <i className="fa fa-shopping-cart"></i> 0 Items
          </Link>
          <Link to="/notification" className="btn">
            <i className="fa h4 fa-bell"></i>
            <sup>
              <span className="badge text-white bg-danger">5</span>
            </sup>
          </Link>
          <Link to="/favourite">
            <i className="fa h4 fa-heart"></i>
            <sup>
              <span className="badge text-white bg-danger">0</span>
            </sup>
          </Link>

          <Link to="/login" className="h4 btn">
            Login
          </Link>
          <Link to="/register" className="h4 btn">
            Register
          </Link>
        </div>
      );
    }
    return (
      <Fragment>
        <Navbar fixed={"top"} bg="light" className="navbar">
          <Container
            fluid="true"
            className="fixed-top p-2 mb-0 shadow-sm bg-white"
          >
            <Row>
              <Col lg={4} md={4} sm={12} xs={12}>
                <img onClick={this.menuClick} className="bar-img" src={Bars} />
                <Link to="/">
                  <img className="nav-logo" src={Logo} />
                </Link>
              </Col>
              <Col lg={4} md={4} sm={12} xs={12}>
                <div className="input-group w-100">
                  <input
                    onChange={this.handleChange}
                    type="text"
                    className="form-control"
                  />
                  <Button
                    type="button"
                    onClick={this.handleSearch}
                    className="btn site-btn"
                  >
                    <i className="fa fa-search"></i>
                  </Button>
                </div>
              </Col>
              <Col
                lg={4}
                md={4}
                sm={12}
                xs={12}
                className="d-flex flex-row-reverse align-items-center"
              >
                {view}
              </Col>
            </Row>
            {this.redirectSearch()}
          </Container>
        </Navbar>
        <div className={this.state.sideNavState}>
          <MegaMenuAll />
        </div>
        <div
          onClick={this.contentOverlayClick}
          className={this.state.contentOverlayState}
        ></div>
      </Fragment>
    );
  }
}

export default NavMenuDesktop;
