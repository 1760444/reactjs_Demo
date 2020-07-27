import React, { Component } from "react";

export default class SP extends Component {
  render() {
    let {sanpham} = this.props;
    return (
      <div className="col-4">
        <div className="card text-left">
          <img
            className="card-img-top"
            src={sanpham.hinhAnh}
            style={{ width: "100%", height: "350px" }}
          />
          <div className="card-body">
            <h4 className="card-title">{sanpham.tenSP}</h4>
            <button
              type="button"
              className="btn btn-danger"
              data-toggle="modal"
              data-target="#modelId"
              onClick={()=>{
                this.props.add(sanpham);
              }}
            >
              Thêm giỏ hàng
            </button>
          </div>
        </div>
      </div>
    );
  }
}
