import React, { Component } from 'react'
import BTHeader from './components/BaiTapLayout/BTHeader';
import BTCarousel from './components/BaiTapLayout/BTCarousel';
import BTBeginSmart from './components/BaiTapLayout/BTBeginSmart';
import BTBeginLaptop from './components/BaiTapLayout/BTBeginLaptop';
import BTPromotion from './components/BaiTapLayout/BTPromotion';

export default class BaiTaplayout extends Component {
    render() {
        return (
            <div>
                <BTHeader />
                <BTCarousel />
                <BTBeginSmart />
                <BTBeginLaptop />
                <BTPromotion />
            </div>
        )
    }
}
