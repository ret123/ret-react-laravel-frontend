import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import axios from "axios";
import AppUrl from "../../api/AppUrl";
import FeatureLoader from "../placeholder/FeatureLoader";

export class FeaturedProducts extends Component {
  constructor() {
    super();
    this.state = {
      productData: [],
      isLoading: "",
      mainDiv: "d-none",
    };
  }
  componentDidMount() {
    axios.get(AppUrl.ProductListByRemark("featured")).then((res) => {
      this.setState({
        productData: res.data,
        isLoading: "d-none",
        mainDiv: "",
      });
    });
  }

  render() {
    const featuredProducts = this.state.productData;

    const myView = featuredProducts.map((featuredProduct, i) => {
      if (featuredProduct.special_price == "no") {
        return (
          <Col xl={2} lg={2} md={2} sm={4} xs={6} key={i}>
            <Link
              to={"/productdetails/" + featuredProduct.id}
              className="text-link"
            >
              <Card className="image-box card">
                <img className="center" src={featuredProduct.image} />

                <Card.Body>
                  <p className="product-name-on-card">
                    {featuredProduct.title}
                  </p>
                  <p className="product-price-on-card">
                    Price: {featuredProduct.price}
                  </p>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        );
      } else {
        return (
          <Col xl={2} lg={2} md={2} sm={4} xs={6} key={i}>
            <Link
              to={"/productdetails/" + featuredProduct.id}
              className="text-link"
            >
              <Card className="image-box card">
                <img className="center" src={featuredProduct.image} />

                <Card.Body>
                  <p className="product-name-on-card">
                    {featuredProduct.title}
                  </p>
                  <p className="product-price-on-card">
                    Price: <strike>{featuredProduct.price}</strike>
                    {featuredProduct.special_price}
                  </p>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        );
      }
    });
    return (
      <Fragment>
        <FeatureLoader isLoading={this.state.isLoading} />
        <div className="this.state.mainDiv">
          <Container className="text-center" fluid={true}>
            <div className="section-title">
              <h2>FEATURED PRODUCT</h2>
              <p>Some of Our Exclusive Collection, You May Like</p>
            </div>
            <Row>{myView}</Row>
          </Container>
        </div>
      </Fragment>
    );
  }
}

export default FeaturedProducts;
