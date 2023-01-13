import React, { Component, Fragment } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import InnerImageZoom from "react-inner-image-zoom";
import SuggestedProduct from "./SuggestedProduct";
import axios from "axios";
import cogoToast from "cogo-toast";
import AppUrl from "../../api/AppUrl";

class ProductDetails extends Component {
  constructor() {
    super();
    this.state = {
      previewImg: "0",
      reviews: [],
      isSize: null,
      isColor: null,
      color: "no",
      size: "no",
      quantity: "",
      productCode: null,
      email: "",
      count: 0,
    };
  }

  componentDidMount() {
    axios
      .get(AppUrl.Review(this.props.product["product"][0]["id"]))
      .then((res) => {
        this.setState({ reviews: res.data });
      });
  }

  addToCart = () => {
    let isSize = this.state.isSize;
    let isColor = this.state.isColor;
    let color = this.state.color;
    let size = this.state.size;
    let quantity = this.state.quantity;
    let product_code = this.state.productCode;

    if (isColor === "YES" && color.length === 0) {
      cogoToast.error("Please Select Color", { position: "top-right" });
    } else if (isSize === "YES" && size.length === 0) {
      cogoToast.error("Please Select Size", { position: "top-right" });
    } else if (quantity.length === 0) {
      cogoToast.error("Please Select Quantity", { position: "top-right" });
    } else if (!localStorage.getItem("token")) {
      cogoToast.warn("Login To Continue.", {
        position: "top-right",
      });
    } else {
      let formData = new FormData();
      formData.append("color", color);
      formData.append("size", size);
      formData.append("quantity", quantity);
      formData.append("email", this.props.user.email);
      formData.append("product_code", product_code);
      axios.post(AppUrl.AddToCart, formData).then((res) => {
        if (res.data === 1) {
          const cartCount = this.state.count + 1;
          this.props.setCart(cartCount);
          cogoToast.success("Product added successfully.", {
            position: "top-right",
          });
        } else {
          cogoToast.error("Error adding product. Please try again.", {
            position: "top-right",
          });
        }
      });
    }
  };

  imgClick = (e) => {
    let imgsrc = e.target.getAttribute("src");
    // let previewImg = document.getElementById("preview_image");
    // ReactDOM.findDOMNode(previewImg).setAttribute("src", imgsrc);
    this.setState({ previewImg: imgsrc });
  };

  colorOnChange = (e) => {
    let color = e.target.value;
    this.setState({ color: color });
  };
  sizeOnChange = (e) => {
    let size = e.target.value;
    this.setState({ size: size });
  };

  quantityOnChange = (e) => {
    let quantity = e.target.value;
    this.setState({ quantity: quantity });
  };

  priceOption(price, special_price) {
    if (special_price == "no") {
      return <p className="product-price-on-card">Price: ${price}</p>;
    } else {
      return (
        <p className="product-price-on-card">
          Price: <strike className="text-secondary">${price}</strike>$
          {special_price}
        </p>
      );
    }
  }

  render() {
    let productData = this.props.product;
    let title = productData["product"][0]["title"];
    let price = productData["product"][0]["price"];
    let special_price = productData["product"][0]["special_price"];
    let category = productData["product"][0]["category"];
    let subcategory = productData["product"][0]["subcategory"];
    let remark = productData["product"][0]["remark"];
    let brand = productData["product"][0]["brand"];
    let star = productData["product"][0]["star"];
    let product_code = productData["product"][0]["product_code"];
    let img1 = productData["product_details"][0]["image1"];
    let img2 = productData["product_details"][0]["image2"];
    let img3 = productData["product_details"][0]["image3"];
    let img4 = productData["product_details"][0]["image4"];
    if (this.state.previewImg === "0") {
      this.setState({ previewImg: img1 });
    }
    let short_description =
      productData["product_details"][0]["short_description"];
    let long_description =
      productData["product_details"][0]["long_description"];
    let size = productData["product_details"][0]["size"];
    let color = productData["product_details"][0]["color"];

    var colorDiv = "d-none";
    if (color != "no") {
      let colorArray = color.split(",");
      var colorOption = colorArray.map((color) => {
        return <option value={color}>{color}</option>;
      });
      colorDiv = "";
    } else {
      colorDiv = "d-none";
    }

    var sizeDiv = "d-none";
    if (size != "no") {
      let sizeArray = size.split(",");
      var sizeOption = sizeArray.map((size) => {
        return <option value={size}>{size}</option>;
      });
      sizeDiv = "";
    } else {
      sizeDiv = "d-none";
    }

    if (this.state.isSize === null) {
      if (size != "no") {
        this.setState({ isSize: "YES" });
      } else {
        this.setState({ isSize: "NO" });
      }
    }
    if (this.state.isColor === null) {
      if (color != "no") {
        this.setState({ isColor: "YES" });
      } else {
        this.setState({ isColor: "NO" });
      }
    }

    if (this.state.productCode === null) {
      this.setState({ productCode: product_code });
    }

    const reviewView = this.state.reviews.map((review) => {
      if (review.reviewer_rating === "1") {
        return (
          <div>
            <p className=" p-0 m-0">
              <span className="Review-Title">{review.reviewer_name}</span>
              <span className="text-success">
                <i className="fa fa-star"></i>
              </span>
            </p>
            <p>{review.reviewer_comments}</p>
          </div>
        );
      } else if (review.reviewer_rating === "2") {
        return (
          <div>
            <p className=" p-0 m-0">
              <span className="Review-Title">{review.reviewer_name}</span>
              <span className="text-success">
                <i className="fa fa-star"></i> <i className="fa fa-star"></i>
              </span>
            </p>
            <p>{review.reviewer_comments}</p>
          </div>
        );
      } else if (review.reviewer_rating === "3") {
        return (
          <div>
            <p className=" p-0 m-0">
              <span className="Review-Title">{review.reviewer_name}</span>
              <span className="text-success">
                <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </span>
            </p>
            <p>{review.reviewer_comments}</p>
          </div>
        );
      } else if (review.reviewer_rating === "4") {
        return (
          <div>
            <p className=" p-0 m-0">
              <span className="Review-Title">{review.reviewer_name}</span>
              <span className="text-success">
                <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </span>
            </p>
            <p>{review.reviewer_comments}</p>
          </div>
        );
      } else {
        return (
          <div>
            <p className=" p-0 m-0">
              <span className="Review-Title">{review.reviewer_name}</span>
              <span className="text-success">
                <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </span>
            </p>
            <p>{review.reviewer_comments}</p>
          </div>
        );
      }
    });

    return (
      <Fragment>
        <Container fluid={true} className="BetweenTwoSection">
          <Row className="p-2">
            <Col
              className="shadow-sm bg-white pb-3 mt-4"
              md={12}
              lg={12}
              sm={12}
              xs={12}
            >
              <Row>
                <Col className="p-3" md={6} lg={6} sm={12} xs={12}>
                  {/* <img
                    id="preview_image"
                    className="w-100 bigimage"
                    src={img1}
                  /> */}

                  <InnerImageZoom
                    className="detailimage"
                    src={this.state.previewImg}
                    zoomSrc={this.state.previewImg}
                    zoomScale={1.8}
                    zoomType={"hover"}
                  />

                  <Container className="my-4">
                    <Row>
                      <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                        <img
                          className="w-50 smallimage"
                          onClick={this.imgClick}
                          src={img1}
                        />
                      </Col>
                      <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                        <img
                          className="w-50 smallimage"
                          onClick={this.imgClick}
                          src={img2}
                        />
                      </Col>
                      <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                        <img
                          className="w-50 smallimage"
                          onClick={this.imgClick}
                          src={img3}
                        />
                      </Col>
                      <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                        <img
                          className="w-50 smallimage"
                          onClick={this.imgClick}
                          src={img4}
                        />
                      </Col>
                    </Row>
                  </Container>
                </Col>
                <Col className="p-3 " md={6} lg={6} sm={12} xs={12}>
                  <h5 className="Product-Name">{title}</h5>
                  <h6 className="section-sub-title">
                    Some Of Our Exclusive Collection, You May Like Some Of Our
                    Exclusive Collectio
                  </h6>
                  <div className="input-group">
                    {this.priceOption(price, special_price)}
                  </div>
                  <h6 className="mt-2">
                    Category: <b>{category}</b>
                  </h6>
                  <h6 className="mt-2">
                    Subcategory:<b> {subcategory}</b>
                  </h6>
                  <h6 className="mt-2">
                    Brand: <b>{brand}</b>
                  </h6>
                  <h6 className="mt-2">
                    Product Code: <b>{product_code}</b>
                  </h6>
                  <div className={colorDiv}>
                    <h6 className="mt-2">Choose Color</h6>
                    <select
                      onChange={this.colorOnChange}
                      className="form-control form-select"
                    >
                      <option>Choose Color</option>
                      {colorOption}
                    </select>
                  </div>
                  <div className="input-group">
                    <div className={sizeDiv}>
                      <h6 className="mt-2">Choose Size</h6>
                      <select
                        onChange={this.sizeOnChange}
                        className="form-control form-select"
                      >
                        <option>Choose Size</option>
                        {sizeOption}
                      </select>
                    </div>
                  </div>

                  <h6 className="mt-2">Quantity</h6>
                  <input
                    className="form-control text-center w-50"
                    type="number"
                    onChange={this.quantityOnChange}
                  />
                  <div className="input-group mt-3">
                    <button
                      onClick={this.addToCart}
                      className="btn site-btn m-1 "
                    >
                      <i className="fa fa-shopping-cart"></i> Add To Cart
                    </button>
                    <button className="btn btn-primary m-1">
                      <i className="fa fa-car"></i> Order Now
                    </button>
                    <button className="btn btn-primary m-1">
                      <i className="fa fa-heart"></i> Favourite
                    </button>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col className="" md={6} lg={6} sm={12} xs={12}>
                  <h6 className="mt-2">DETAILS</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud exerci tation Lorem ipsum dolor sit amet,
                    consectetuer adipiscing elit, sed diam nonummy nibh euismod
                    tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut
                    wisi enim ad minim veniam, quis nostrud exerci tation
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud exerci tation Lorem ipsum dolor sit amet,
                    consectetuer adipiscing elit, sed diam nonummy nibh euismod
                    tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut
                    wisi enim ad minim veniam, quis nostrud exerci tation
                  </p>
                </Col>
                <Col className="" md={6} lg={6} sm={12} xs={12}>
                  <h6 className="mt-2">REVIEWS</h6>
                  {reviewView}
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <SuggestedProduct subcategory={subcategory} />
      </Fragment>
    );
  }
}
export default ProductDetails;
