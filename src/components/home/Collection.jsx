import axios from "axios";
import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import AppUrl from "../../api/AppUrl";
import CollectionLoader from "../placeholder/CollectionLoader";

export class Collection extends Component {
  constructor() {
    super();
    this.state = {
      productData: [],
      isLoading: "",
      mainDiv: "d-none",
    };
  }
  componentDidMount() {
    axios.get(AppUrl.ProductListByRemark("collection")).then((res) => {
      this.setState({
        productData: res.data,
        isLoading: "d-none",
        mainDiv: "",
      });
    });
  }
  render() {
    const Products = this.state.productData;

    const myView = Products.map((product, i) => {
      if (product.special_price == "no") {
        return (
          <Col className="p-0" xl={4} lg={4} md={4} sm={6} xs={6} key={i}>
            <Link to={"/productdetails/" + product.id} className="text-link">
              <Card className="image-box card w-100">
                <img className="center" src={product.image} />

                <Card.Body>
                  <p className="product-name-on-card">{product.title}</p>
                  <p className="product-price-on-card">
                    Price: {product.price}
                  </p>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        );
      } else {
        return (
          <Col className="p-0" xl={4} lg={4} md={4} sm={6} xs={6} key={i}>
            <Link to={"/productdetails/" + product.id} className="text-link">
              <Card className="image-box card w-100">
                <img className="center" src={product.image} />

                <Card.Body>
                  <p className="product-name-on-card">{product.title}</p>
                  <p className="product-price-on-card">
                    Price:<strike>{product.price}</strike>
                    {product.special_price}
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
        <CollectionLoader isLoading={this.state.isLoading} />
        <div className={this.state.mainDiv}>
          <Container className="text-center" fluid={true}>
            <div className="section-title">
              <h2>PRODUCT COLLECTION</h2>
              <p>Some of Our Exclusive Collection, You May Like</p>
            </div>
            <Row>{myView}</Row>
          </Container>
        </div>
      </Fragment>
    );
  }
}

export default Collection;
