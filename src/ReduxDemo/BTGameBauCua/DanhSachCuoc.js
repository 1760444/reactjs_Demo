import React, { Component } from "react";
import { connect } from "react-redux";

class DanhSachCuoc extends Component {
  renderDanhSachCuoc = () => {
    let lstCuoc = this.props.danhSachCuoc;
    return lstCuoc.map((item, index) => {
      return (
        <div className="col-4 text-center mt-3" key={index}>
          <img
            style={{ width: "100%" ,height:"150px"}}
            src={item.hinhAnh}
            alt={item.hinhAnh}
          />
          <br />
          <br />
          <button onClick={()=>{

          }}
            className="py-2 px-4 btn btn-warning w-100"
            style={{fontSize: 25}}
          >
            Cược:
            <span className="text-success">&nbsp;{item.diemCuoc} đ  </span>
          </button>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="row text-left mt-2">{this.renderDanhSachCuoc()}</div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    danhSachCuoc: state.BaiTapGameBauCuaReducer.danhSachCuoc,
  };
};

export default connect(mapStateToProps)(DanhSachCuoc);
