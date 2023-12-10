import React, { Component } from "react";
import { connect } from "react-redux";
import "./About.scss";
import vtv from "../../../assets/images/vtv1.png";
import ict from "../../../assets/images/ictnews.png";
import vne from "../../../assets/images/vnexpress.png";
import vtc from "../../../assets/images/165432-vtcnewslogosvg.png";
import cntt from "../../../assets/images/cuc-cong-nghe-thong-tin-bo-y-te-2.png";
import infonet from "../../../assets/images/infonet.png";
import dantri from "../../../assets/images/110757-dantrilogo.png";

// import "../HomePage.scss";
class About extends Component {
  render() {
    return (
      <div className="section-share section-about ">
        <div className="section-about-header">
          Truyền thông nói về ứng dụng đặt lịch khám hữa bệnh An Bình
        </div>
        <div className="section-about-content">
          <div className="content-left">
            <iframe
              width="90%"
              height="400px"
              src="https://www.youtube.com/embed/FyDQljKtWnI"
              title="CÀ PHÊ KHỞI NGHIỆP VTV1 - BOOKINGCARE - HỆ THỐNG ĐẶT LỊCH KHÁM TRỰC TUYẾN"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="content-right">
            <div className="about-icon">
              <div className="about-paper">
                <a
                  href="https://vtv.vn/video/ca-phe-khoi-nghiep-14-11-2018-334894.htm"
                  target="_blank"
                >
                  <img className="about-img" src={vtv} alt="Mô tả ảnh" />
                </a>
              </div>
              <div className="about-paper">
                <a
                  href="https://video.vnexpress.net/cuoc-song-4-0/kham-benh-khong-phai-xep-hang-o-ha-noi-3797126.html"
                  target="_blank"
                >
                  <img className="about-img" src={vne} alt="" />
                </a>
              </div>
              <div className="about-paper">
                <a
                  href="https://video.vnexpress.net/cuoc-song-4-0/kham-benh-khong-phai-xep-hang-o-ha-noi-3797126.html"
                  target="_blank"
                >
                  <img className="about-img" src={cntt} alt="" />
                </a>
              </div>
              <div className="about-paper">
                <a
                  href="https://video.vnexpress.net/cuoc-song-4-0/kham-benh-khong-phai-xep-hang-o-ha-noi-3797126.html"
                  target="_blank"
                >
                  <img className="about-img" src={infonet} alt="" />
                </a>
              </div>
            </div>
            <div className="about-icon">
              <div className="about-paper">
                <a
                  href="https://video.vnexpress.net/cuoc-song-4-0/kham-benh-khong-phai-xep-hang-o-ha-noi-3797126.html"
                  target="_blank"
                >
                  <img className="about-img" src={ict} alt="" />
                </a>
              </div>
              <div className="about-paper">
                <a
                  href="https://video.vnexpress.net/cuoc-song-4-0/kham-benh-khong-phai-xep-hang-o-ha-noi-3797126.html"
                  target="_blank"
                >
                  <img className="about-img" src={vtc} alt="" />
                </a>
              </div>
              <div className="about-paper">
                <a
                  href="https://video.vnexpress.net/cuoc-song-4-0/kham-benh-khong-phai-xep-hang-o-ha-noi-3797126.html"
                  target="_blank"
                >
                  <img className="about-img" src={vtv} alt="" />
                </a>
              </div>
              <div className="about-paper">
                <a
                  href="https://video.vnexpress.net/cuoc-song-4-0/kham-benh-khong-phai-xep-hang-o-ha-noi-3797126.html"
                  target="_blank"
                >
                  <img className="about-img" src={dantri} alt="" />
                </a>
              </div>
            </div>
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
