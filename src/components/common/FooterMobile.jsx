import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Apple from "../../assets/images/apple.png";
import Google from "../../assets/images/google.png";

export class FooterMobile extends Component {
  render() {
    return (
      <Fragment>
        <div className="footerback shadow-sm m-0 mt-5 pt-3">
          <Container className="text-center">
            <Row className="px-0 my-5">
              <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                <h5 className="footer-menu-title">Address</h5>
                <p>
                  1635 Franklin Street Montgomery, Near Sherwood Mall. Al 36104
                  <br></br>
                  Email: support@ecomm.com
                </p>
                <h5 className="footer-menu-title">SOCIAL LINK</h5>
                <a href="">
                  <i className="fab m-1 h4 fa-facebook"></i>
                </a>
                <a href="">
                  <i className="fab m-1 h4 fa-twitter"></i>
                </a>
                <a href="">
                  <i className="fab m-1 h4 fa-instagram"></i>
                </a>
              </Col>

              <Col lg={3} md={3} sm={6} xs={12}>
                <h5 className="footer-menu-title">THE COMPANY</h5>
                <Link to="/" className="footer-link">
                  About Us
                </Link>
                <br />
                <Link to="/" className="footer-link">
                  Company Profile
                </Link>
                <br />
                <Link to="/contact" className="footer-link">
                  Contact Us
                </Link>
                <br />
              </Col>
              <Col lg={3} md={3} sm={6} xs={12}>
                <h5 className="footer-menu-title">MORE INFO</h5>
                <Link to="/privacy" className="footer-link">
                  Privacy Policy
                </Link>
                <br />
                <Link to="/return" className="footer-link">
                  Return Policy
                </Link>
                <br />
                <Link to="/purchase" className="footer-link">
                  How to Purchase
                </Link>
                <br />
              </Col>
              <Col lg={3} md={3} sm={6} xs={12}>
                <h5 className="footer-menu-title">APPS</h5>
                <a href="">
                  <img src={Google} alt="" />
                </a>
                <br />
                <a href="">
                  <img className="mt-2" src={Apple} alt="" />
                </a>
                <br />
              </Col>
            </Row>
          </Container>
          <Container fluid={true} className="text-center m-0 pt-3 pb-1 bg-dark">
            <Container>
              <Row>
                <h6 className="text-white">
                  @ Copyright 2021 ecomm, All Rights Reserved
                </h6>
              </Row>
            </Container>
          </Container>
        </div>
      </Fragment>
    );
  }
}

export default FooterMobile;
