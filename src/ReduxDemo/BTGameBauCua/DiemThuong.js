import React, { Component } from 'react'
import { connect } from 'react-redux'

class DiemThuong extends Component {
    render() {
        return (
            <div className="text-center mt-3">
                <span className="px-3 bg-warning" style={{fontSize:"25px",borderRadius:"10px",border:"5px solid #000"}}>
                    Tiền thưởng: 
                    <span className="text-success">
                        {this.props.diemThuong} điểm
                    </span>
                </span>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        diemThuong: state.BaiTapGameBauCuaReducer.diemThuong,
    }
}

export default connect(mapStateToProps)(DiemThuong)