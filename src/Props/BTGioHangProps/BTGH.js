import React, { Component } from "react";
import Modals from "./Modals";
import DSSP from "./DSSP";

export default class BTGH extends Component {
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
    cartList: [
      {
        maSP: 1,
        tenSP: "VinSmart Live",
        hinhAnh: "./img/vsphone.jpg",
        gia: 1000,
        soLuong: 1,
      },
    ],
  };

  addGioHang = (sanpham) => {
    let gioHangCapNhat = [...this.state.cartList];
    let index = gioHangCapNhat.findIndex((item) => item.maSP === sanpham.maSP);
    if (index === -1) {
      let cartItem = {
        maSP: sanpham.maSP,
        tenSP: sanpham.tenSP,
        hinhAnh: sanpham.hinhAnh,
        gia: sanpham.giaBan,
        soLuong: 1,
      };
      gioHangCapNhat.push(cartItem);
    }
    else{
        gioHangCapNhat[index].soLuong +=1;
    }

    this.setState({
        cartList: gioHangCapNhat,
      });
  };

  render() {
    return (
      <div>
        <Modals listCartItem={this.state.cartList} />
        <DSSP listSP={this.arrProduct} add={this.addGioHang} />
      </div>
    );
  }
}
