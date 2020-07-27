import React, { Component } from "react";

export default class Modals extends Component {
  renderGioHang = () => {
    let { listCartItem, remove, tanggiamsoluong } = this.props;

    return listCartItem.map((cartItem, index) => {
      return (
        <tr key={index}> 
          <td>{cartItem.maSP}</td>
          <td>
            <img
              src={cartItem.hinhAnh}
              style={{ width: "50px", height: "50px" }}
            />
          </td>
          <td>{cartItem.tenSP}</td>
          <td>
            <span>
              <strong>{cartItem.soLuong}&nbsp;&nbsp;</strong>
            </span>
            <button
              className="btn btn-info"
              onClick={() => {
                tanggiamsoluong(cartItem.maSP, true);
              }}
            >
              +
            </button>
            <button
              className="btn btn-info"
              onClick={() => {
                tanggiamsoluong(cartItem.maSP, false);
              }}
            >
              -
            </button>
          </td>
          <td>
            {cartItem.gia} <strong>$</strong>
          </td>
          <td>
            {cartItem.soLuong * cartItem.gia} <strong>$</strong>
          </td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => {
                remove(cartItem.maSP);
              }}
            >
              Remove
            </button>
          </td>
        </tr>
      );
    });
  };

  totalMoney = () => {
    return this.props.listCartItem.reduce((sum, spGioHang, index) => {
      return (sum += spGioHang.soLuong * spGioHang.gia);
    }, 0);
  };

  render() {
    return (
      <div
        class="modal fade"
        id="modelId"
        tabindex="-1"
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Giỏ Hàng</h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="container-fluid">
                <table className="table" style={{ width: "100%" }}>
                  <thead>
                    <tr>
                      <th scope="col">Mã SP</th>
                      <th scope="col">Hình Ảnh</th>
                      <th scope="col">Tên Sản Phẩm</th>
                      <th scope="col">Số Lượng</th>
                      <th scope="col">Đơn Giá</th>
                      <th scope="col">Thành Tiền</th>
                    </tr>
                  </thead>
                  <tbody>{this.renderGioHang()}</tbody>
                  <tfoot>
                    <tr>
                      <td colSpan="3"></td>
                      <td>Tổng Tiền</td>
                      <td>{this.totalMoney().toLocaleString()}</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
