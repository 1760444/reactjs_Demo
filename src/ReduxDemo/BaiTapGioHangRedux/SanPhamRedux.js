import React, { Component } from "react";
import { connect } from "react-redux";

class SanPhamRedux extends Component {
  render() {
    let { sanpham } = this.props;
    return (
      <div className="card text-left">
        <img
          className="card-img-top"
          src={sanpham.hinhAnh}
          style={{ width: "100%" }}
        />
        <div className="card-body">
          <h4 className="card-title">{sanpham.tenSP}</h4>
          <p className="card-text">
            <strong>Price:</strong>&nbsp;{sanpham.giaBan.toLocaleString()} <strong>$</strong>
            </p>
          <button className="btn btn-success" onClick={()=>{
            this.props.themGioHang(sanpham);
          }}>Thêm sản phẩm</button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    themGioHang: (sanPhamClick)=>{
      let spGH = {
        maSP: sanPhamClick.maSP,
        tenSP: sanPhamClick.tenSP,
        gia: sanPhamClick.giaBan,
        soLuong: 1,
        hinhAnh: sanPhamClick.hinhAnh
      }
      let action = {
        type: "THEM_GIO_HANG",
        spGH: spGH
      }
      dispatch(action);
      // console.log(spGH)
    }
  }
}

export default connect(null,mapDispatchToProps)(SanPhamRedux)