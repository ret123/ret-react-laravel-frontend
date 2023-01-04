class AppUrl {
  static BaseUrl = "http://127.0.0.1:8000/api";
  static VisitorDetails = this.BaseUrl + "/getvisitor";
  static PostContact = this.BaseUrl + "/postcontact";
  static AllCategory = this.BaseUrl + "/allcategory";
  static AllNotifcation = this.BaseUrl + "/allnotification";

  static ProductListByRemark(remark) {
    return this.BaseUrl + "/productlistbyremark/" + remark;
  }

  static ProductListByCategory(category) {
    return this.BaseUrl + "/productlistbycategory/" + category;
  }

  static ProductListBySubcategory(category, subcategory) {
    return (
      this.BaseUrl + "/productlistbysubcategory/" + category + "/" + subcategory
    );
  }

  static HomeSlider = this.BaseUrl + "/allslider";

  static ProductDetails(id) {
    return this.BaseUrl + "/productdetails/" + id;
  }

  static Search(key) {
    return this.BaseUrl + "/search/" + key;
  }
}

export default AppUrl;
