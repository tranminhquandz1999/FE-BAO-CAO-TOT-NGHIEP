import React, { Component } from "react";

import { connect } from "react-redux";
import "./MedicalFacility.scss";
import Slider from "react-slick";
import { getAllClinic } from "../../../services/userService";
import { withRouter } from "react-router";
class MedicalFacility extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataClinics: [],
    };
  }

  async componentDidMount() {
    let res = await getAllClinic();
    if (res && res.errCode === 0) {
      this.setState({
        dataClinics: res.data ? res.data : [],
      });
    }
  }

  handleViewDetailClinic = (clinic) => {
    if (this.props.history) {
      this.props.history.push(`detail-clinic/${clinic.id}`);
    }
  };

  render() {
    let { dataClinics } = this.state;
    return (
      <div className="section-share section-medical-facility ">
        <div className="section-container">
          <div className="section-header">
            <span className="title-section">Cơ sở y tế nỗi bật</span>
            {/* <button className="btn-section">Xem thêm</button> */}
          </div>
          <div className="section-body">
            <Slider {...this.props.settings}>
              {dataClinics &&
                dataClinics.length > 0 &&
                dataClinics.map((item, index) => {
                  return (
                    <div
                      className="section-customize clinic-child"
                      key={index}
                      onClick={() => this.handleViewDetailClinic(item)}
                      style={{ backgroundColor: "red" }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <div
                          className="bg-image"
                          style={{
                            background: `url(${item.image})`,
                            backgroundSize: "contain",
                            backgroundPosition: "center center",
                            backgroundRepeat: "no-repeat",
                          }}
                        />
                        <div
                          className="clinic-name"
                          style={{ marginTop: "10px", fontSize: "16px" }}
                        >
                          <b> {item.name}</b>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MedicalFacility)
);
