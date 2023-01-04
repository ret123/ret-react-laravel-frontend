import axios from "axios";
import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

export class SubcategoryProduct extends Component {
  render() {
    const Products = this.props.products;

    const myView = Products.map((product, i) => {
      if (product.special_price == "no") {
        return (
          <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6} key={i}>
            <Link to={"/productdetails/" + product.id}>
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
          <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6} key={i}>
            <Link to={"/productdetails/" + product.id}>
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
        <Container className="text-center TopSection" fluid={true}>
          <div className="section-title">
            <h2>{this.props.category}</h2>
            <p>{this.props.subcategory}</p>
          </div>
          <Row>{myView}</Row>
        </Container>
      </Fragment>
    );
  }
}

export default SubcategoryProduct;
