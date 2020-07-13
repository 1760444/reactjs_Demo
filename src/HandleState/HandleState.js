import React, { Component } from 'react'

export default class HandleState extends Component {
    // State thuộc tính có sẵn của Component => cho phép thay đổi giá trị và render lại giao diện
    state = {
        // chỉ đặt các thuộc tính sẽ thay đ
        isLogined: false      
    }
    userName = 'Hào chicken fried';
    renderContent = () =>{
        if(this.state.isLogined){
            return <h1>
                Hello {this.userName}
            </h1>
        }

        return <button onClick={()=>{
            this.loginHanhler();
        }}>Login</button>
    }

    loginHanhler = ()=>{
        // this.State.isLogined = true;

        const newState = {
            isLogined : true
        }
        this.setState(newState,()=>{
            //Tham số thứ 2 của hàm setState là callback chạy sau khi state thay đổi
            console.log(this.state.isLogined)
        });
    }
    render() {
        return (
            <div>
                {/* {this.isLogined ? <h1>Hello {this.userName}</h1> : <button>Login</button>}*/}
                {this.renderContent()}   
            </div>
        )
    }
}
