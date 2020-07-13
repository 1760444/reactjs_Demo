import React, { Component } from 'react'

export default class EventBinding extends Component {
    handleClick = () =>{
        alert("hello fe 44");
    }
    showMessage = (message)=>{
        alert("hello " + message);
    }
    render() {
        return (
            <div>
                event binding component
                {/* Cách 1:truyền trực tiếp callback function -> nếu để dấu () hàm thực thi trước khi click */}
                <button onClick={this.handleClick}>Click me!</button>
                <button onClick={this.showMessage.bind(this,'Hào chicken fried')}>Click me!</button>
                {/* Cách 2: Truyền function gián tiếp */}
                <button onClick={()=>{
                    this.showMessage('Hào')
                }}>Click me!</button>
            </div>
        )
    }
}
