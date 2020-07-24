import React, { Component } from 'react'

export default class SanphamProps extends Component {
    
    render() {
        let {sanpham} = this.props;
        return (
            <div className="card">
            <img
              src={sanpham.hinhAnh}
              style={{ width: "100%", height: "350px" }}
            />
            <div className="card-body">
              <h5 className="card-text">{sanpham.tenSP}</h5>
              <p className="card-text">
                Price: {sanpham.giaBan} <strong>$</strong>
              </p>
              <button
                className="btn btn-warning"
                onClick={() => {
                  this.props.xemCT(sanpham);
                }}
              >
                Xem chi tiết
              </button>
            </div>
          </div>
        )
    }
}
