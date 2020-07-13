import React from 'react';
import logo from './logo.svg';
import './App.css';
// import BaiTaplayout from './components/BaiTapLayout/BaiTaplayout';
import DataBinding from './DataBinding/DataBinding';
import EventBinding from './EventBinding/EventBinding';
import HandleState from './HandleState/HandleState';
import SelectCar from './HandleState/SelectCar';


function App() {
  return (
    <div className="App">
      {/* <BaiTaplayout /> */}
      {/* <DataBinding /> */}
      {/* <EventBinding /> */}
      {/* <HandleState /> */}
      <SelectCar />
    </div>
  );
}

export default App;
