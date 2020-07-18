import React from 'react';
import logo from './logo.svg';
import './App.css';
// import BaiTaplayout from './components/BaiTapLayout/BaiTaplayout';
import DataBinding from './DataBinding/DataBinding';
import EventBinding from './EventBinding/EventBinding';
import HandleState from './HandleState/HandleState';
import SelectCar from './HandleState/SelectCar';
import RenderWithMap from './RenderWithMap/RenderWithMap';
import EXRenderMap from './RenderWithMap/EXRenderMap';
import DemoProps from './Props/DemoProps';
import BT2ProductList from './Props/BT2ProductList/BT2ProductList';


function App() {
  return (
    <div className="App">
      {/* <BaiTaplayout /> */}
      {/* <DataBinding /> */}
      {/* <EventBinding /> */}
      {/* <HandleState /> */}
      {/* <SelectCar /> */}
      {/* <RenderWithMap /> */}
      {/* <EXRenderMap /> */}
      {/* <DemoProps /> */}
      <BT2ProductList></BT2ProductList>
      
    </div>
  );
}

export default App;
