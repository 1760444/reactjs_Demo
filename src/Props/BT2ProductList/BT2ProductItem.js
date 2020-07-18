import React, { Component } from "react";

export default class BT2ProductItem extends Component {
  render() {
    let { image, name, price } = this.props.item;
    return (
      <div className="card text-left">
        <img className="card-img-top" src={image} style={{height:"200px"}} />
        <div className="card-body">
          <h6 className="card-title">{name}</h6>
          <p className="card-text">Price: {price} <strong>$</strong></p>
          <button className="btn btn-dark">Mua</button>
        </div>
      </div>
    );
  }
}
