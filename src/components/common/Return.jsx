import React, { Component, Fragment } from "react";
import { Row, Col, Container } from "react-bootstrap";

export class Return extends Component {
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
              <h4 className="section-title">Return Page</h4>
              <p className="section-title-contact">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. <br />
                <br />
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum. <br /> <br />
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source.
              </p>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Return;
