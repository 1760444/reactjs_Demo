import React, { Component } from 'react'
import SP from './SP';

export default class DSSP extends Component {

    renderSP = (list,eventAdd) =>{
        return list.map((sanpham)=>{
            return <SP sanpham={sanpham} add={eventAdd} />
        })
    }

    render() {
        let {listSP} = this.props;
        return (
            <div className="container">
                <h3 className="text-center my-5" style={{color:"green"}}>Bài tập giỏ hàng</h3>
                <div className="row">
                    {this.renderSP(listSP,this.props.add)}
                </div>
            </div>
        )
    }
}
