import axios from "axios";
import React, { Component, Fragment } from "react";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import AppUrl from "../../api/AppUrl";
import Forget from "../../assets/images/forget.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export class ResetPassword extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      token: "",
      password: "",
      password_confirmation: "",
      redirect: false,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: this.state.email,
      token: this.state.token,
      password: this.state.password,
      password_confirmation: this.state.password_confirmation,
    };

    axios
      .post(AppUrl.ResetPassword, data)
      .then((res) => {
        toast.success(res.data.message, {
          position: "top-right",
        });
        this.setState({ redirect: true });
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.message, {
          position: "top-right",
        });
      });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/login" />;
    }
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
                  <Form className="onboardForm" onSubmit={this.handleSubmit}>
                    <h4 className="section-title">Reset Password </h4>
                    <input
                      type="text"
                      className="form-control m-2"
                      placeholder="Enter Email Address"
                      onChange={(e) => {
                        this.setState({ email: e.target.value });
                      }}
                    />
                    <input
                      type="password"
                      className="form-control m-2"
                      placeholder="Enter Valid Token"
                      onChange={(e) => {
                        this.setState({ token: e.target.value });
                      }}
                    />
                    <input
                      type="password"
                      className="form-control m-2"
                      placeholder="Enter New Password"
                      onChange={(e) => {
                        this.setState({ password: e.target.value });
                      }}
                    />
                    <input
                      type="password"
                      className="form-control m-2"
                      placeholder="Confirm Password"
                      onChange={(e) => {
                        this.setState({
                          password_confirmation: e.target.value,
                        });
                      }}
                    />

                    <Button
                      type="submit"
                      className="btn btn-block m-2 site-btn-login"
                    >
                      Submit
                    </Button>
                  </Form>
                </Col>
                <Col className="p-0 m-0 Desktop" md={6} lg={6} sm={6} xs={12}>
                  <img src={Forget} className="onboardBanner" />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <ToastContainer />
      </Fragment>
    );
  }
}

export default ResetPassword;
