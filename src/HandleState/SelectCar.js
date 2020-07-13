import React, { Component } from "react";

export default class SelectCar extends Component {
  state = {
    img: "./img/steel-car.jpg",
  };

  changeColor = (img) => {
    this.setState(
      {
        img: img,
      }
    );
  };

  renderContent() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h1>Please choose your favorite about car's color</h1>
            <img
              src={this.state.img}
              style={{
                backgroundSize: "cover",
                display: "block",
                width: "100%",
                border: "1px solid rgba(0,0,0,0.2)",
              }}
            />
          </div>
          <div className="col-6">
            <h1>Change Color</h1>
            <div className="container">
              <div className="row">
                <div className="col-4">
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      this.changeColor('./img/red-car.jpg');
                    }}
                  >
                    Red Color
                  </button>
                </div>
                <div className="col-4">
                  <button
                    className="btn btn-light"
                    style={{
                      backgroundColor: "silver",
                      padding: "6px 12px",
                      color: "#fff",
                    }}
                    onClick={() => {
                      this.changeColor('./img/silver-car.jpg');
                    }}
                  >
                    Silver Color
                  </button>
                </div>
                <div className="col-4">
                  <button
                    className="btn btn-dark"
                    onClick={() => {
                      this.changeColor('./img/black-car.jpg');
                    }}
                  >
                    Black Color
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return this.renderContent();
  }
}
