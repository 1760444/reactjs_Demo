import React, { Component } from 'react'
import SanPhamRedux from './SanPhamRedux'

export default class DanhSachSanPhamRedux extends Component {

    renderSanPham = () =>{
        return this.props.mangSanPham.map((sanpham,index)=>{
            return <div className="col-4" key={index}>
                <SanPhamRedux sanpham={sanpham}  />
            </div>
        });
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    {this.renderSanPham()}
                </div>
            </div>
        )
    }
}
