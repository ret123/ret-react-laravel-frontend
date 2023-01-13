import axios from "axios";
import React, { Component, Fragment } from "react";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import AppUrl from "../../api/AppUrl";
import Forget from "../../assets/images/forget.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export class ForgetPassword extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const btnSend = document.getElementById("btnSend");
    btnSend.innerHTML = "Sending Email...";
    const data = {
      email: this.state.email,
    };
    axios
      .post(AppUrl.ForgetPassword, data)
      .then((res) => {
        toast.success(res.data.message, {
          position: "top-right",
        });
        btnSend.innerHTML = " Reset Password";
        document.getElementById("form").reset();
      })
      .catch((error) => {
        toast.error(error.response.data.message, {
          position: "top-right",
        });
        btnSend.innerHTML = " Reset Password";
      });
  };
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
                  <Form
                    className="onboardForm"
                    onSubmit={this.handleSubmit}
                    id="form"
                  >
                    <h4 className="section-title">Forget Password ?</h4>
                    <input
                      type="text"
                      className="form-control m-2"
                      placeholder="Enter Email Address"
                      onChange={(e) => this.setState({ email: e.target.value })}
                    />

                    <Button
                      type="submit"
                      className="btn btn-block m-2 site-btn-login"
                      id="btnSend"
                    >
                      Reset Password
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

export default ForgetPassword;
