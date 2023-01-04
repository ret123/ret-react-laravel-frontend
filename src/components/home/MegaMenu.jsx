import React, { Component } from "react";
import { Link } from "react-router-dom";

export class MegaMenu extends Component {
  constructor(props) {
    super();
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
    const categoryList = this.props.data;

    const categoryView = categoryList.map((category, i) => {
      return (
        <div key={i}>
          <button className="accordion" onClick={this.toggleMenu}>
            <img className="accordionMenuIcon" src={category.category_image} />
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
      <div className="accordionMenuDiv">
        <div className="accordionMenuDivInside">{categoryView}</div>
      </div>
    );
  }
}

export default MegaMenu;
