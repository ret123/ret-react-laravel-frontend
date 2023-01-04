import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import AppUrl from "../../api/AppUrl";

export class MegaMenuAll extends Component {
  constructor() {
    super();
    this.state = {
      MegaMenu: [],
    };
  }

  componentDidMount() {
    axios
      .get(AppUrl.AllCategory)
      .then((response) => {
        this.setState({ MegaMenu: response.data });
      })
      .catch((error) => {});
  }

  toggleMenu = (e) => {
    e.target.classList.toggle("active");
    var panel = e.target.nextElementSibling;

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  };

  render() {
    const categoryList = this.state.MegaMenu;

    const categoryView = categoryList.map((category, i) => {
      return (
        <div key={i}>
          <button className="accordionAll" onClick={this.toggleMenu}>
            <img
              className="accordionMenuIconAll"
              src={category.category_image}
            />
            &nbsp; {category.category_name}
          </button>
          <div className="panel">
            <ul>
              {category.subcategory_name.map((subcat, i) => {
                return (
                  <li key={i}>
                    <Link
                      to={
                        "/productsubcategory/" +
                        category.category_name +
                        "/" +
                        subcat.subcategory_name
                      }
                      className="accordionItem"
                    >
                      {subcat.subcategory_name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      );
    });
    return (
      <div className="accordionMenuDivAll">
        <div className="accordionMenuDivInsideAll">{categoryView}</div>
      </div>
    );
  }
}

export default MegaMenuAll;
