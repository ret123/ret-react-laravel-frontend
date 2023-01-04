import React, { Component } from "react";
import { Container } from "react-bootstrap";

export class NewArrivalLoader extends Component {
  render() {
    const isLoading = this.props.isLoading;
    return (
      <div className={isLoading}>
        <Container className="text-center" fluid={true}>
          <div className="section-title">
            <h2>New Arrival</h2>
            <p>Some of Our Exclusive Collection, You May Like</p>
          </div>
        </Container>
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-3 col-6 p-1">
            <a href="" className="card image-box h-100 w-100">
              <div class="ph-picture"></div>
              <div className="ph-item">
                <div className="ph-col-12">
                  <div className="ph-row">
                    <div className="ph-col-12 small"></div>
                    <div className="ph-col-12 small"></div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-3 col-6 p-1">
            <a href="" className="card image-box h-100 w-100">
              <div class="ph-picture"></div>
              <div className="ph-item">
                <div className="ph-col-12">
                  <div className="ph-row">
                    <div className="ph-col-12 small"></div>
                    <div className="ph-col-12 small"></div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-3 col-6 p-1">
            <a href="" className="card image-box h-100 w-100">
              <div class="ph-picture"></div>
              <div className="ph-item">
                <div className="ph-col-12">
                  <div className="ph-row">
                    <div className="ph-col-12 small"></div>
                    <div className="ph-col-12 small"></div>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div className="col-lg-3 col-md-3 col-sm-3 col-6 p-1">
            <a href="" className="card image-box h-100 w-100">
              <div class="ph-picture"></div>
              <div className="ph-item">
                <div className="ph-col-12">
                  <div className="ph-row">
                    <div className="ph-col-12 small"></div>
                    <div className="ph-col-12 small"></div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewArrivalLoader;
