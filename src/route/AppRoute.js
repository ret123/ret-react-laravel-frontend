import React, { Component, Fragment } from "react";
import { Switch, Router, Route } from "react-router";
import CartPage from "../pages/CartPage";
import ContactPage from "../pages/ContactPage";
import FavouritePage from "../pages/FavouritePage";
import HomePage from "../pages/HomePage";
import NotificationPage from "../pages/NotificationPage";
import PrivacyPage from "../pages/PrivacyPage";
import ProductCategoryPage from "../pages/ProductCategoryPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import ProductSubcategoryPage from "../pages/ProductSubcategoryPage";
import PurchasePage from "../pages/PurchasePage";
import ReturnPage from "../pages/ReturnPage";
import SearchPage from "../pages/SearchPage";
import UserLoginPage from "../pages/UserLoginPage";

export class AppRoute extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <HomePage {...props} key={Date.now()} />}
          />
          <Route
            exact
            path="/login"
            render={(props) => <UserLoginPage {...props} key={Date.now()} />}
          />
          <Route
            exact
            path="/contact"
            render={(props) => <ContactPage {...props} key={Date.now()} />}
          />
          <Route
            exact
            path="/purchase"
            render={(props) => <PurchasePage {...props} key={Date.now()} />}
          />
          <Route
            exact
            path="/privacy"
            render={(props) => <PrivacyPage {...props} key={Date.now()} />}
          />
          <Route
            exact
            path="/return"
            render={(props) => <ReturnPage {...props} key={Date.now()} />}
          />
          <Route
            exact
            path="/productdetails/:id"
            render={(props) => (
              <ProductDetailPage {...props} key={Date.now()} />
            )}
          />
          <Route
            exact
            path="/notification"
            render={(props) => <NotificationPage {...props} key={Date.now()} />}
          />
          <Route
            exact
            path="/favourite"
            render={(props) => <FavouritePage {...props} key={Date.now()} />}
          />
          <Route
            exact
            path="/cart"
            render={(props) => <CartPage {...props} key={Date.now()} />}
          />
          <Route
            exact
            path="/productcategory/:category"
            render={(props) => (
              <ProductCategoryPage {...props} key={Date.now()} />
            )}
          />
          <Route
            exact
            path="/productsubcategory/:category/:subcategory"
            render={(props) => (
              <ProductSubcategoryPage {...props} key={Date.now()} />
            )}
          />
          <Route
            exact
            path="/productbysearch/:searchKey"
            render={(props) => <SearchPage {...props} key={Date.now()} />}
          />
        </Switch>
      </Fragment>
    );
  }
}

export default AppRoute;
