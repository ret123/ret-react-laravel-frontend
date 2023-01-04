import React, { Component, Fragment } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/easyshop.png";
import MegaMenuMobile from "../home/MegaMenuMobile";

export class NavMenuMobile extends Component {
  constructor() {
    super();
    this.state = {
      sideNavState: "sideNavClose",
      contentOverlayState: "ContentOverlayClose",
    };
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
  render() {
    return (
      <Fragment>
        <Container
          fluid="true"
          className="fixed-top p-2 mb-0 shadow-sm bg-white"
        >
          <Row>
            <Col lg={4} md={4} sm={12} xs={12}>
              <Button className="btn" onClick={this.menuClick}>
                <i className="fa fa-bars"></i>
              </Button>
              <Link to="/">
                <img className="nav-logo" src={Logo} />
              </Link>
              <Button className="cart-btn">
                <i className="fa-fa-shopping-cart"></i>Items
              </Button>
            </Col>
          </Row>
        </Container>
        <div className={this.state.sideNavState}>
          <MegaMenuMobile />
        </div>
        <div
          onClick={this.contentOverlayClick}
          className={this.state.contentOverlayState}
        ></div>
      </Fragment>
    );
  }
}

export default NavMenuMobile;
