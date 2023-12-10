// Trong file HomeFooter.j
import "./HomeFooter.scss";
import React, { Component } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faCheck } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faYoutube } from "@fortawesome/free-brands-svg-icons";

import logo from "../../assets/de.png";
import footer1 from "../../assets/images/footer-1.png";
import footer2 from "../../assets/images/footer-2.png";
import footer3 from "../../assets/images/footer-3.png";

class HomeFooter extends Component {
  render() {
    return (
      <>
        <div className="footer-main">
          <div
            className="footer-1 "
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-between",
              paddingTop: "20px",
            }}
          >
            <div className="footer-logo" style={{ marginLeft: "7%" }}>
              <img className="footer-logo-img" src={logo} />
            </div>

            <div
              style={{
                display: "flex",
                padding: "0px 20px",
                marginRight: "7%",
              }}
            >
              <div
                style={{
                  color: "#55595d",
                  paddingTop: "10px",
                }}
              ></div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "right",
                  paddingTop: "10px",
                }}
              >
                <div style={{ height: "auto" }}>
                  <FontAwesomeIcon
                    icon={faFacebook}
                    style={{
                      width: "40px",
                      height: "50px",
                      color: "rgb(60, 87, 158)",
                      marginRight: "30px",
                    }}
                  />
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={faYoutube}
                    style={{ width: "50px", height: "50px", color: "red" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="home-footer">
            <div className="column-1">
              <div className="footer-content">
                <h3>Công ty Cổ phần Công nghệ BookingCare</h3>
                <ul>
                  <div className="footer-content-1">
                    <FontAwesomeIcon
                      icon={faMapMarkerAlt}
                      style={{ width: "12px", margin: "0px 5px 0px 0px" }}
                    />
                    Lô B4/D21, Khu đô thị mới Cầu Giấy, Phường Dịch Vọng Hậu,
                    Quận
                    <br />
                    Cầu Giấy, Thành phố Hà Nội, Việt Nam
                    <li style={{ marginTop: "10px" }}>
                      <FontAwesomeIcon
                        icon={faCheck}
                        style={{ width: "12px", margin: "5px 5px 0px 0px" }}
                      />
                      ĐKKD số. 0106790291. Sở KHĐT Hà Nội cấp ngày 16/03/2015
                    </li>
                  </div>
                  <div className="footer-content-2">
                    <li>
                      <b>Văn phòng tại TP Hồ Chí Minh</b>
                    </li>
                    <li>Số 01, Hồ Bá Kiện, Phường 15, Quận 10</li>
                  </div>
                  <div className="footer-content-3">
                    <li>
                      <b>Hỗ trợ khách hàng</b>
                    </li>
                    <li>support@bookingcare.vn (7h - 18h)</li>
                  </div>
                </ul>
              </div>
            </div>

            <div className="column-2">
              <ul>
                <li>Liên hệ hợp tác</li>
                <li>Danh bạ y tế</li>
                <li>Sức khỏe doanh nghiệp</li>
                <li>Gói chuyển đổi số doanh nghiệp</li>
                <li>Tuyển dụng</li>
                <li>Câu hỏi thường gặp</li>
                <li>Điều khoản sử dụng</li>
                <li>Chính sách Bảo mật</li>
                <li>Quy trình hỗ trợ giải quyết khiếu nại</li>
                <li>Quy chế hoạt động</li>
              </ul>
            </div>

            <div className="column-3">
              <ul>
                <div>
                  <h3>
                    <p>Đối tác bảo trợ nội dung</p>
                  </h3>
                </div>
                <div className="footer-img-1">
                  <div className="img-1">
                    <img className="footer-logo-img" src={footer1} />
                  </div>
                  <div>
                    <div>
                      <b>Hello Doctor</b>
                    </div>
                    <span>Bảo trợ chuyên mục nội dung "sức khỏe tinh thần</span>
                  </div>
                </div>
                <div className="footer-img-2">
                  <div className="img-1">
                    <img className="footer-logo-img" src={footer2} />
                  </div>
                  <div>
                    <div>
                      <b>Hệ thống y khoa chuyên sâu quốc tế Bernard</b>
                    </div>
                    <span>Bảo trợ chuyên mục nội dung "y khoa chuyên sâu"</span>
                  </div>
                </div>
                <div className="footer-img-3">
                  <div className="img-1">
                    <img className="footer-logo-img" src={footer3} />
                  </div>
                  <div>
                    <div>
                      <b>Doctor Check - Tầm Soát Bệnh Để Sống Thọ Hơn</b>
                    </div>
                    <span>
                      Bảo trợ chuyên mục nội dung "sức khỏe tổng quát"
                    </span>
                  </div>
                </div>
              </ul>
            </div>
          </div>
          <div className="footer-end">
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "10vh",
              }}
            >
              <span
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#55595d",
                }}
              >
                Rất vui được hỗ trợ cho quý khách hàng © 2023 BookingCare.
              </span>
            </div>
          </div>
        </div>
      </>
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
