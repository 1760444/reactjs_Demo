import React, { Component } from "react";

export default class Child extends Component {
  render() {
    // this.props thuộc tính có sẵn của Component nhận giá trị từ Component cha truyền vào
    // và không thể gán lại giá trị

    let {name,price} = this.props.productProps;
    return (
      <div>
        <div className="card text-left ">
          <img className="card-img-top" src="https://picsum.photos/720" alt="123" />
          <div className="card-body">
            <h4 className="card-title">{name}</h4>
            <p className="card-text">{price}</p>
          </div>
        </div>
      </div>
    );
  }
}
