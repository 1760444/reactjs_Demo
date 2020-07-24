import React, { Component } from "react";
import SanphamProps from "./SanphamProps";

export default class DemoPropsFunction extends Component {
  arrProduct = [
    {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },
    {
      maSP: 2,
      tenSP: "Meizu 16Xs",
      manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
      heDieuHanh: "Android 9.0 (Pie); Flyme",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 7600000,
      hinhAnh: "./img/meizuphone.jpg",
    },
    {
      maSP: 3,
      tenSP: "Iphone XS Max",
      manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 27000000,
      hinhAnh: "./img/applephone.jpg",
    },
  ];

  state = {
    sanPhamChiTiet: {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },
  };

  renderSanPham = () => {
    return this.arrProduct.map((sanpham, index) => {
      return (
        <div className="col-4" key={index}>
            <SanphamProps sanpham={sanpham} xemCT = {this.xemChiTiet} />
        </div>
      );
    });
  };

  xemChiTiet = (spClcik) => {
    this.setState({
      sanPhamChiTiet: spClcik,
    });
  };

  render() {
    return (
      <div className="container">
        <h3 className="text-center my-5">Danh Sách Sản Phẩm</h3>
        <div className="row">{this.renderSanPham()}</div>

        <div className="row mt-5">
          <div className="col-4">
            <h3 className="text-center">{this.state.sanPhamChiTiet.tenSP}</h3>
            <img
              src={this.state.sanPhamChiTiet.hinhAnh}
              style={{ width: "100%", height: "350px" }}
            />
          </div>
          <div className="col-8">
            <table
              className="table"
              style={{ width: "70%", margin: "0 auto" }}
              cellPadding="10"
            >
              <thead>
                <tr>
                  <th scope="col" colSpan="2">
                    <h3>Thông Số Kỹ Thuật</h3>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Màn Hình</th>
                  <td>{this.state.sanPhamChiTiet.manHinh}</td>
                </tr>
                <tr>
                  <th scope="row">Hệ Điều Hành</th>
                  <td>{this.state.sanPhamChiTiet.heDieuHanh}</td>
                </tr>
                <tr>
                  <th scope="row">Camera Trước</th>
                  <td>{this.state.sanPhamChiTiet.cameraTruoc}</td>
                </tr>
                <tr>
                  <th scope="row">Camera Sau</th>
                  <td>{this.state.sanPhamChiTiet.cameraSau}</td>
                </tr>
                <tr>
                  <th scope="row">Ram</th>
                  <td>{this.state.sanPhamChiTiet.ram}</td>
                </tr>
                <tr>
                  <th scope="row">Rom</th>
                  <td>{this.state.sanPhamChiTiet.rom}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
