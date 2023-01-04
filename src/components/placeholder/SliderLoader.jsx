import React, { Component } from "react";

export class SliderLoader extends Component {
  render() {
    const isLoading = this.props.isLoading;
    return (
      <div className={isLoading}>
        <div className="row bottom-margin">
          <div className="col-3">
            <div className="ph-row">
              <div className="ph-col-12"></div>
              <div className="ph-col-12"></div>
              <div className="ph-col-12"></div>
              <div className="ph-col-12"></div>
              <div className="ph-col-12"></div>
              <div className="ph-col-12"></div>
              <div className="ph-col-12"></div>
              <div className="ph-col-12"></div>
            </div>
          </div>
          <div className="col-9">
            <div className="ph-picture"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default SliderLoader;
