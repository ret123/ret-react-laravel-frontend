import axios from "axios";
import React, { Component, Fragment } from "react";
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";
import AppUrl from "../../api/AppUrl";
class Notification extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      notifications: [],
      title: "",
      message: "",
      date: "",
    };
  }

  handleClose = () => {
    this.setState({ show: false });
  };

  handleShow = (e) => {
    this.setState({ show: true });
    let Ntitle = e.target.getAttribute("data-title");
    let Nmsg = e.target.getAttribute("data-message");
    let Ndate = e.target.getAttribute("data-date");
    this.setState({ title: Ntitle, message: Nmsg, date: Ndate });
  };

  componentDidMount() {
    axios.get(AppUrl.AllNotifcation).then((res) => {
      this.setState({ notifications: res.data });
    });
  }

  render() {
    const notifications = this.state.notifications;
    const myView = notifications.map((notification, i) => {
      return (
        <Col className=" p-1 " md={6} lg={6} sm={12} xs={12} key={i}>
          <Card className="notification-card">
            <Card.Body>
              <h6> {notification.title}</h6>
              <p className="py-1  px-0 text-primary m-0">
                <i className="fa  fa-bell"></i> Date: {notification.title} |
                Status: Unread
              </p>
              <Button
                data-title={notification.title}
                data-message={notification.message}
                data-date={notification.date}
                className="btn btn-primary"
                onClick={this.handleShow}
              >
                Details
              </Button>
            </Card.Body>
          </Card>
        </Col>
      );
    });
    return (
      <Fragment>
        <Container className="TopSection">
          <Row>{myView}</Row>
        </Container>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <h6>
              <i className="fa fa-bell"></i> Date: {this.state.date}
            </h6>
          </Modal.Header>
          <Modal.Body>
            <h6>{this.state.title}</h6>
            <p>{this.state.message}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Fragment>
    );
  }
}

export default Notification;
