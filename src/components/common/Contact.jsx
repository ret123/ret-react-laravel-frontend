import React, { Component, Fragment } from "react";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppUrl from "../../api/AppUrl";
import axios from "axios";

export class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  componentDidMount() {
    window.scroll(0, 0);
  }

  nameChange = (e) => {
    this.setState({ name: e.target.value });
  };
  emailChange = (e) => {
    this.setState({ email: e.target.value });
  };
  messageChange = (e) => {
    this.setState({ message: e.target.value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();

    const btnSend = document.getElementById("btnSend");

    const contactForm = document.getElementById("contactForm");
    if (this.state.name.length == 0) {
      
      toast.error("Please write your name");
    } else if (this.state.email.length == 0) {
      toast.error("Please write your email");
    } else if (this.state.message.length == 0) {
      toast.error("Please write your message");
    } else {
      btnSend.innerHTML = "Sending...";
      const data = {
        name: this.state.name,
        email: this.state.email,
        message: this.state.message,
      };
      axios
        .post(AppUrl.PostContact, data)
        .then((res) => {
          if (res.status == 200 && res.data == 1) {
            toast.success("Message send successfully");
            btnSend.innerHTML = "Send";
            contactForm.reset();
          } else {
            toast.error("Something went wrong");
          }
        })
        .catch((error) => {
          toast.error(error);
          btnSend.innerHTML = "Send";
          contactForm.reset();
        });
    }
  };

  render() {
    return (
      <Fragment>
        <Container>
          <Row className="">
            <Col className=" bg-white mt-5" md={12} lg={12} sm={12} xs={12}>
              <Row className="text-center">
                <Col
                  className="d-flex justify-content-center"
                  md={6}
                  lg={6}
                  sm={6}
                  xs={12}
                >
                  <Form
                    id="contactForm"
                    className="onboardForm"
                    onSubmit={this.onFormSubmit}
                  >
                    <h4 className="section-title">CONTACT US</h4>

                    <input
                      type="text"
                      className="form-control m-2"
                      placeholder="Enter Your Name"
                      onChange={this.nameChange}
                    />
                    <input
                      type="text"
                      className="form-control m-2"
                      placeholder="Enter Email"
                      onChange={this.emailChange}
                    />
                    <Form.Control
                      as="textarea"
                      rows={3}
                      className="form-control m-2"
                      placeholder="Enter your message"
                      onChange={this.messageChange}
                    />
                    <Button
                      type="submit"
                      className="btn btn-block m-2 site-btn-login"
                      id="btnSend"
                    >
                      Send
                    </Button>
                  </Form>
                </Col>
                <Col className="p-0 m-0 Desktop" md={6} lg={6} sm={6} xs={12}>
                  <p className="section-title">
                    1635 Franklin Street Montgomery, Near Sherwood Mall. Al
                    36104 Email: support@ecomm.com
                  </p>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.3060066585!2d-74.25987056078012!3d40.6971494070489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1665382280069!5m2!1sen!2sin"
                    width="600"
                    height="400"
                    styles="border:0;"
                    loading="lazy"
                  ></iframe>
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

export default Contact;
