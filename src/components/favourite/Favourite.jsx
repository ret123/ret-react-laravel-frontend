import axios from "axios";
import React, { Component, Fragment } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import AppUrl from "../../api/AppUrl";

class Favourite extends Component {
  constructor() {
    super();
    this.state = {
      productData: [],
      isLoading: "",
      mainDiv: "d-none",
    };
  }
  componentDidMount() {
    let email = this.props.user.email;
    axios.get(AppUrl.FavoutriteList(email)).then((res) => {
      this.setState({
        productData: res.data.favList,
        isLoading: "d-none",
        mainDiv: "",
      });
    });
  }
  render() {
    const favouriteProducts = this.state.productData;
    const myView = favouriteProducts.map((product) => {
      return (
        <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
          <Card className="image-box card w-100">
            <img className="center w-75" src={product.image} />
            <Card.Body>
              <p className="product-name-on-card">{product.product_name}</p>

              <Button className="btn btn-sm">
                {" "}
                <i className="fa fa-trash-alt"></i> Remove{" "}
              </Button>
            </Card.Body>
          </Card>
        </Col>
      );
    });

    return (
      <Fragment>
        <Container
          className="text-center"
          style={{ marginTop: "100px" }}
          fluid={true}
        >
          <div className="section-title text-center mb-55">
            <h2> MY FAVOURITE ITEMS</h2>
            <p>Some Of Our Exclusive Collection, You May Like</p>
          </div>

          <Row>{myView}</Row>
        </Container>
      </Fragment>
    );
  }
}

export default Favourite;
