import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import MegaMenu from "./MegaMenu";
import HomeSlider from "./HomeSlider";
import axios from "axios";
import AppUrl from "../../api/AppUrl";
import SliderLoader from "../placeholder/SliderLoader";

export class TopSection extends Component {
  constructor() {
    super();
    this.state = {
      MegaMenu: [],
      sliderdata: [],
      isLoading: "",
      mainDiv: "d-none",
    };
  }

  componentDidMount() {
    axios
      .get(AppUrl.AllCategory)
      .then((response) => {
        this.setState({ MegaMenu: response.data });
      })
      .catch((error) => {});

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
          <Container fluid="true" className="bottom-margin">
            <Row>
              <Col lg={3} md={3} sm={12}>
                <MegaMenu data={this.state.MegaMenu} />
              </Col>
              <Col lg={9} md={9} sm={12}>
                <HomeSlider data={this.state.sliderdata} />
              </Col>
            </Row>
          </Container>
        </div>
      </Fragment>
    );
  }
}

export default TopSection;
