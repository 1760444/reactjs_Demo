import React, { Component } from "react";
import Child from "./Child";

export default class DemoProps extends Component {
  render() {
    let product = {
      id: 1,
      name: "Iphone X",
      price: 1000,
    };

    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-4">
            <Child productProps={product} />
          </div>
          <div className="col-4">
            <Child productProps={product} />
          </div>
          <div className="col-4">
            <Child productProps={product} />
          </div>
        </div>
      </div>
    );
  }
}
