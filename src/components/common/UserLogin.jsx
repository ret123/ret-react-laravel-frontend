import axios from "axios";
import React, { Component, Fragment } from "react";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import AppUrl from "../../api/AppUrl";
import Login from "../../assets/images/login.png";
import ProfilePage from "../../pages/ProfilePage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export class UserLogin extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      message: "",
      loggedIn: false,
      user: {},
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: this.state.email,
      password: this.state.password,
    };

    axios
      .post(AppUrl.Login, data)
      .then((res) => {
        localStorage.setItem("token", res.data.token);

        this.props.setUser(res.data.user);
        this.setState({ loggedIn: true, user: res.data.user });
        toast.success(res.data.message, {
          position: "top-right",
        });
        // console.log(res.data.user);
      })
      .catch((err) => {
        toast.error(err.response.data.message, {
          position: "top-right",
        });
      });
  };
  render() {
    if (this.state.loggedIn) {
      // return <ProfilePage user={this.state.user} />;
      return <Redirect to="/profile" />;
    }
    if (localStorage.getItem("token")) {
      return <Redirect to="/profile" />;
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
                    <h4 className="section-title">User Sign In</h4>
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
                      placeholder="Enter Password"
                      onChange={(e) => {
                        this.setState({ password: e.target.value });
                      }}
                    />
                    <Button
                      type="submit"
                      className="btn btn-block m-2 site-btn-login"
                      id="btnSend"
                    >
                      Login
                    </Button>
                    <br /> <br />
                    <hr />
                    <p>
                      <b>Forget Password ? </b>
                      <Link to="forget">Password Reset</Link>
                    </p>
                    <p>
                      <b>Don't Have An Account ? </b>
                      <Link to="/register">Register</Link>
                    </p>
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
