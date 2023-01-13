import axios from "axios";
import React, { Component, Fragment } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import AppUrl from "../../api/AppUrl";

class SuggestedProduct extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    axios.get(AppUrl.Similar(this.props.subcategory)).then((res) => {
      this.setState({ products: res.data });
    });
  }

  render() {
    const view = this.state.products.map((product, i) => {
      if (product.special_price == "no") {
        return (
          <Col className="p-1" key={i} xl={2} lg={2} md={2} sm={4} xs={6}>
            <Link to={"/productdetails/" + product.id}>
              <Card className="image-box card">
                <img className="center" src={product.image} />
                <Card.Body>
                  <p className="product-name-on-card">{product.title}</p>
                  <p className="product-price-on-card">{product.price}</p>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        );
      } else {
        return (
          <Col className="p-1" key={i} xl={2} lg={2} md={2} sm={4} xs={6}>
            <Link to={"/productdetails/" + product.id}>
              <Card className="image-box card">
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
        <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55">
            <h2>YOU MAY ALSO LIKE </h2>
            <p>Some Of Our Exclusive Collection, You May Like</p>
          </div>

          <Row>{view}</Row>
        </Container>
      </Fragment>
    );
  }
}

export default SuggestedProduct;
