import React, { Component, Fragment } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import AppUrl from "../../api/AppUrl";
import NewArrivalLoader from "../placeholder/NewArrivalLoader";

export class NewArrival extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productData: [],
      isLoading: "",
      mainDiv: "d-none",
    };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  componentDidMount() {
    axios.get(AppUrl.ProductListByRemark("new")).then((res) => {
      this.setState({
        productData: res.data,
        isLoading: "d-none",
        mainDiv: "",
      });
    });
  }

  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  render() {
    const Products = this.state.productData;

    const myView = Products.map((product, i) => {
      if (product.special_price == "no") {
        return (
          <div key={i}>
            <Link to={"/productdetails/" + product.id} className="text-link">
              <Card className="image-box card">
                <img className="center" src={product.image} />

                <Card.Body>
                  <p className="product-name-on-card">{product.title}</p>
                  <p className="product-price-on-card">
                    Price: {product.price}
                  </p>
                </Card.Body>
              </Card>
            </Link>
          </div>
        );
      } else {
        return (
          <div key={i}>
            <Link to={"/productdetails/" + product.id} className="text-link">
              <Card className="image-box card">
                <img className="center" src={product.image} />

                <Card.Body>
                  <p className="product-name-on-card">{product.title}</p>
                  <p className="product-price-on-card">
                    Price:<strike>{product.price}</strike>{" "}
                    {product.special_price}
                  </p>
                </Card.Body>
              </Card>
            </Link>
          </div>
        );
      }
    });

    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplayspeed: 3000,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <Fragment>
        <NewArrivalLoader isLoading={this.state.isLoading} />
        <div className={this.state.mainDiv}>
          <Container className="text-center" fluid={true}>
            <div className="section-title">
              <h2>
                New Arrival &nbsp;
                <a className="btn btn-sm site-btn" onClick={this.previous}>
                  <i className="fa fa-angle-left"></i>
                </a>
                &nbsp;
                <a className="btn btn-sm site-btn" onClick={this.next}>
                  <i className="fa fa-angle-right"></i>
                </a>
              </h2>
              <p>Some of Our Exclusive Collection, You May Like</p>
            </div>
            <Row>
              <Slider ref={(c) => (this.slider = c)} {...settings}>
                {myView}
              </Slider>
            </Row>
          </Container>
        </div>
      </Fragment>
    );
  }
}

export default NewArrival;
