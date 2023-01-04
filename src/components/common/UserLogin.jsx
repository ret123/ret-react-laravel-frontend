import React, { Component, Fragment } from "react";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import Login from "../../assets/images/login.png";

export class UserLogin extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <Row className="p-2">
            <Col
              className="shadow-sm bg-white mt-5"
              md={12}
              lg={12}
              sm={12}
              xs={12}
            >
              <Row className="text-center">
                <Col
                  className="d-flex justify-content-center"
                  md={6}
                  lg={6}
                  sm={6}
                  xs={12}
                >
                  <Form className="onboardForm">
                    <h4 className="section-title">User Sign In</h4>
                    <h6 className="section-sub-title">
                      Please Enter Mobile Number
                    </h6>
                    <input
                      type="text"
                      className="form-control m-2"
                      placeholder="Enter Mobile Number"
                    />
                    <Button className="btn btn-block m-2 site-btn-login">
                      Next
                    </Button>
                  </Form>
                </Col>
                <Col className="p-0 m-0 Desktop" md={6} lg={6} sm={6} xs={12}>
                  <img src={Login} className="onboardBanner" />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default UserLogin;
