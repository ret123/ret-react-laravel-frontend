import axios from "axios";
import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import AppUrl from "../../api/AppUrl";
import CategoryLoader from "../placeholder/CategoryLoader";

export class Categories extends Component {
  constructor() {
    super();
    this.state = {
      MegaMenu: [],
      isLoading: "",
      mainDiv: "d-none",
    };
  }

  componentDidMount() {
    axios
      .get(AppUrl.AllCategory)
      .then((response) => {
        this.setState({
          MegaMenu: response.data,
          isLoading: "d-none",
          mainDiv: "",
        });
      })
      .catch((error) => {});
  }

  render() {
    const categoryList = this.state.MegaMenu;

    const categoryView = categoryList.map((category, i) => {
      return (
        <Col className="p-0" xl={2} lg={2} md={3} sm={6} xs={6}>
          <Card className="h-100 w-100 text-center">
            <Card.Body>
              <Link to={"/productcategory/" + category.category_name}>
                <img className="center" src={category.category_image} />
                <h5 className="category-name">{category.category_name}</h5>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      );
    });
    return (
      <Fragment>
        <CategoryLoader isLoading={this.state.isLoading} />
        <div className={this.state.mainDiv}>
          <Container className="text-center" fluid={true}>
            <Row>{categoryView}</Row>
          </Container>
        </div>
      </Fragment>
    );
  }
}

export default Categories;
