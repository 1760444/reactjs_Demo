import React, { Component } from 'react'
import cssDatabinding from './DataBinding.module.css';

export default class DataBinding extends Component {
    name = 'frontend-44';
    img = 'https://picsum.photos/200/200';

    renderImg = () =>{
        return <div className="card">
            <img className="card-img-top" src={this.img} />
        </div>
    }

    render() {
        let title = "CyberSoft = FE44";
        let srcing = 'https://picsum.photos/200/200';

        let renderText = () =>{
            return <div>
                <h1 className={`${cssDatabinding.title} display-4`}>hello 123</h1>
            </div>
        }
        return (
            <div>
                <h1 style={{fontSize:'80px'}} id="title">{title}</h1>
                <img src={srcing} />
                {renderText()}
                {this.renderImg()}
                <p>Name: {this.name}</p>
            </div>
        )
    }
}
