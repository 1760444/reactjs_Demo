import React, { Component } from "react";
import style from "./BTGameBauCua.module.css";
import DanhSachCuoc from "./DanhSachCuoc";
import XucXac from "./XucXac";
import DiemThuong from "./DiemThuong";

export default class BTGameBauCua extends Component {
  render() {
    return (
      <div className={`container-fluid ${style.gameBauCua} mt-3`}>
        <h3 className="display-5 text-center text-danger">BÀI TẬP BẦU CUA CYBERSOFT</h3>
        <div className="row">
          <div className="col-12 text-center">
              <DiemThuong />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <DanhSachCuoc />
          </div>
          <div className="col-6">
            <XucXac />
          </div>
        </div>
      </div>
    );
  }
}
