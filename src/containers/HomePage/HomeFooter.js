import React, { Component } from "react";
import { connect } from "react-redux";

// import "../HomePage.scss";
class HomeFooter extends Component {
  render() {
    return (
      <div className="home-footer ">
        <p>
          &copy; 2023 Vì Sức Khỏe Cộng Đồng{" "}
          <a target="_blank" href="https://www.facebook.com/">
            &#8594; Click Here &#8592;
          </a>
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
