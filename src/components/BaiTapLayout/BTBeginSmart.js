import React, { Component } from "react";
import BTBeginSmartList from "./BTBeginSmartList";

export default class BTBeginSmart extends Component {
  render() {
    return (
      <div className="container-fluid">
        <section id="smartphone" className="container-fluid pt-5 pb-5">
          <h1 className="text-white text-center">BEST SMARTPHONE</h1>
          <div className="row">
            <BTBeginSmartList />
            <BTBeginSmartList />
            <BTBeginSmartList />
            <BTBeginSmartList />
          </div>
        </section>
      </div>
    );
  }
}
