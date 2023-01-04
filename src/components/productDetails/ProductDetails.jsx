import React, { Component, Fragment } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import ReactDOM from "react-dom";

class ProductDetails extends Component {
  constructor() {
    super();
  }

  imgClick(e) {
    let imgsrc = e.target.getAttribute("src");
    let previewImg = document.getElementById("preview_image");
    ReactDOM.findDOMNode(previewImg).setAttribute("src", imgsrc);
  }

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
                  <img
                    id="preview_image"
                    className="w-100 bigimage"
                    src={img1}
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
                    <select className="form-control form-select">
                      <option>Choose Color</option>
                      {colorOption}
                    </select>
                  </div>

                  <div className="input-group"></div>

                  <div className={sizeDiv}>
                    <h6 className="mt-2">Choose Size</h6>
                    <select className="form-control form-select">
                      <option>Choose Size</option>
                      {sizeOption}
                    </select>
                  </div>

                  <h6 className="mt-2">Quantity</h6>
                  <input
                    className="form-control text-center w-50"
                    type="number"
                  />
                  <div className="input-group mt-3">
                    <button className="btn site-btn m-1 ">
                      {" "}
                      <i className="fa fa-shopping-cart"></i> Add To Cart
                    </button>
                    <button className="btn btn-primary m-1">
                      {" "}
                      <i className="fa fa-car"></i> Order Now
                    </button>
                    <button className="btn btn-primary m-1">
                      {" "}
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
                  <p className=" p-0 m-0">
                    <span className="Review-Title">User2</span>{" "}
                    <span className="text-success">
                      <i className="fa fa-star"></i>{" "}
                      <i className="fa fa-star"></i>{" "}
                      <i className="fa fa-star"></i>{" "}
                      <i className="fa fa-star"></i>{" "}
                    </span>{" "}
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat.
                  </p>
                  <p className=" p-0 m-0">
                    <span className="Review-Title">User3</span>{" "}
                    <span className="text-success">
                      <i className="fa fa-star"></i>{" "}
                      <i className="fa fa-star"></i>{" "}
                      <i className="fa fa-star"></i>{" "}
                      <i className="fa fa-star"></i>{" "}
                    </span>{" "}
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat.
                  </p>
                  <p className=" p-0 m-0">
                    <span className="Review-Title">User4</span>{" "}
                    <span className="text-success">
                      <i className="fa fa-star"></i>{" "}
                      <i className="fa fa-star"></i>{" "}
                      <i className="fa fa-star"></i>{" "}
                      <i className="fa fa-star"></i>{" "}
                    </span>{" "}
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat.
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
export default ProductDetails;
