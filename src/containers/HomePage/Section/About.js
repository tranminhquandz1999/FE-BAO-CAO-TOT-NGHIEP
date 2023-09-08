import React, { Component } from "react";
import { connect } from "react-redux";

// import "../HomePage.scss";
class About extends Component {
  render() {
    return (
      <div className="section-share section-about ">
        <div className="section-about-header">
          Truyền thông nói về kênh kể chuyện
        </div>
        <div className="section-about-content">
          <div className="content-left">
            {/* <iframe
              width="100%"
              height="400px"
              src="https://www.youtube.com/embed/yt7QmA59Dpo"
              title="Kể Chuyện Cho Bé Nghe Tập 17 | Top Những Câu Chuyện Kể Cho Bé Nghe Trước Khi Ngủ Rất Hay Và Ý Nghĩa"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe> */}
          </div>
          <div className="content-right">
            <p className="">
              Đừng quên nhấn đăng ký kênh youtube Mẹ Sunny Baby để nhận được
              những video thật vui, ý nghĩa cho bé. Nếu video hay hãy like và
              share giúp cho Mẹ Sunny nhé!(^_^)
            </p>
          </div>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
