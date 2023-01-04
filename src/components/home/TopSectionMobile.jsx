import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import MegaMenu from "./MegaMenu";
import HomeSlider from "./HomeSlider";
import axios from "axios";
import AppUrl from "../../api/AppUrl";
import SliderLoader from "../placeholder/SliderLoader";

export class TopSectionMobile extends Component {
  constructor() {
    super();
    this.state = {
      sliderdata: [],
      isLoading: "",
      mainDiv: "d-none",
    };
  }

  componentDidMount() {
    axios
      .get(AppUrl.HomeSlider)
      .then((response) => {
        this.setState({
          sliderdata: response.data,
          isLoading: "d-none",
          mainDiv: "",
        });
      })
      .catch((error) => {});
  }
  render() {
    return (
      <Fragment>
        <SliderLoader isLoading={this.state.isLoading} />

        <div className={this.state.mainDiv}>
          <Container fluid="true" className="bottom-margin overflow-hidden">
            <Row className="p-0 m-0 overflow-hidden">
              <Col lg={12} md={12} sm={12}>
                <HomeSlider data={this.state.sliderdata} />
              </Col>
            </Row>
          </Container>
        </div>
      </Fragment>
    );
  }
}

export default TopSectionMobile;
