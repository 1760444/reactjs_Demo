import React, { Component } from "react";

export default class RenderWithMap extends Component {
  danhSachSanPham = [
    {
      masp: 1,
      tensp: "Iphone X",
      gia: 1000,
      hinhAnh: "https://picsum.photos/200/200",
    },
    {
      masp: 2,
      tensp: "Iphone XS",
      gia: 2000,
      hinhAnh: "https://picsum.photos/200/200",
    },
    {
      masp: 3,
      tensp: "Iphone XS Max",
      gia: 3000,
      hinhAnh: "https://picsum.photos/200/200",
    },
  ];

  renderTable = () => {
    let arrSPJXS = [];
    // for (let index = 0; index < this.danhSachSanPham.length; index++) {
    //   let sanpham = this.danhSachSanPham[index];
    //   let trJSX = (
    //     <tr>
    //       <td style={{verticalAlign:'middle'}}>{sanpham.masp}</td>
    //       <td style={{verticalAlign:'middle'}}>{sanpham.tensp}</td>
    //       <td style={{verticalAlign:'middle'}}>{sanpham.gia}</td>
    //       <td>
    //         <img
    //           src={sanpham.hinhAnh}
    //           alt={sanpham.hinhAnh}
    //           width={100}
    //           height={100}
    //         />
    //       </td>
    //       <td style={{verticalAlign:'middle'}}>
    //         <button className="btn btn-danger">Xóa</button>
    //       </td>
    //     </tr>
    //   );
    //   arrSPJXS.push(trJSX);
    // }

    // Cách 2: Dùng map

    return this.danhSachSanPham.map((sanpham,index)=>{
        return <tr key={index}>
          <td style={{verticalAlign:'middle'}}>{sanpham.masp}</td>
          <td style={{verticalAlign:'middle'}}>{sanpham.tensp}</td>
          <td style={{verticalAlign:'middle'}}>{sanpham.gia}</td>
          <td>
            <img
              src={sanpham.hinhAnh}
              alt={sanpham.hinhAnh}
              width={100}
              height={100}
            />
          </td>
          <td style={{verticalAlign:'middle'}}>
            <button className="btn btn-danger">Xóa</button>
          </td>
        </tr>;
    });
  };

  render() {
    return (
      <div className="container">
        <h3 className="text-primary mb-5 mt-3">Danh Mục Sản Phẩm</h3>
        <table class="table table-striped table-hover">
          <thead className="thead-dark">
            <tr style={{verticalAlign:'middle'}}>
              <th scope="col">Mã SP</th>
              <th scope="col">Tên SP</th>
              <th scope="col">Giá</th>
              <th scope="col">Hình Ảnh</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>{this.renderTable()}</tbody>
        </table>
      </div>
    )
  }
}
