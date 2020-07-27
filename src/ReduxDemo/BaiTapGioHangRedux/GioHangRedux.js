import React, { Component } from "react";
import { connect } from "react-redux"; // thư viện kết nối react component và redux store

class GioHangRedux extends Component {
  renderGioHang = () => {
    return this.props.gioHang.map((sanpham, index) => {
      return (
        <tr key={index}>
          <td>{sanpham.maSP}</td>
          <td>{sanpham.tenSP}</td>
          <td>
            <img
              src={sanpham.hinhAnh}
              style={{ width: "50px", height: "50px" }}
            />
          </td>
          <td>{sanpham.gia.toLocaleString()} <strong>$</strong></td>
          <td>
            <button
              className="btn btn-info"
              onClick={() => {
                this.props.tangGiamSoLuong(sanpham.maSP, true);
              }}
            >
              +
            </button>
            <span>
              &nbsp;
              <strong>{sanpham.soLuong}</strong>
              &nbsp;
            </span>
            <button
              className="btn btn-info"
              onClick={() => {
                this.props.tangGiamSoLuong(sanpham.maSP, false);
              }}
            >
              -
            </button>
          </td>
          <td>
            {(sanpham.gia * sanpham.soLuong).toLocaleString()} <strong>$</strong>
          </td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => {
                this.props.xoaGioHang(sanpham.maSP);
              }}
            >
              Xóa
            </button>
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div>
        <h1>Giỏ Hàng</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Mã SP</th>
              <th>Tên SP</th>
              <th>Hinh Ảnh</th>
              <th>Giá bán</th>
              <th>Số Lượng</th>
              <th>Thành Tiền</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{this.renderGioHang()}</tbody>
          <tfoot>
            <td colSpan="5"></td>
            <td>Tổng Tiền</td>
            <td>
              {this.props.gioHang.reduce((sum,spGH,index)=>{
                return sum+= spGH.soLuong * spGH.gia;
              },0).toLocaleString()}
              <strong>&nbsp;$</strong>
            </td>
          </tfoot>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  //state ứng với rootReducer
  return {
    gioHang: state.GioHangReducer.stateGioHang,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    xoaGioHang: (maSP) => {
      console.log(maSP);
      let action = {
        type: "XOA_GIO_HANG",
        maSP: maSP,
      };

      dispatch(action);
    },
    tangGiamSoLuong: (maSP, tangGiam) => {
      let action;
      if (tangGiam) {
        action = {
          type: "TANG_SO_LUONG",
          maSP: maSP,
        };
      } else {
        action = {
          type: "GIAM_SO_LUONG",
          maSP: maSP,
        };
      }

      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(GioHangRedux);
