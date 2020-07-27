import React, { Component } from 'react'
import { connect } from 'react-redux'

class XucXac extends Component {
    render() {
        return (
            <div className="mt-5" style={{display:"flex",width:"100%",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                <div className="col-4">
                    <img src="./img/gameBauCua/cua.png" style={{width:80}}/>
                </div>
                <div className="col-4" >
                    <img src="./img/gameBauCua/cua.png" style={{width:80}}/>
                </div>
                <div className="col-4">
                    <img src="./img/gameBauCua/cua.png" style={{width:80}}/>
                </div>
                <button className="btn btn-success">Xóc</button>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return{
        xucXac: state.BaiTapGameBauCuaReducer.xucXac,
    }
}

export default connect(mapStateToProps)(XucXac)