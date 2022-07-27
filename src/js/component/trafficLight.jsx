import React,{useState}from "react";
import "./../../styles/trafficLight.css";

const TrafficLight = () => {
    const [colorSelected,setColorSelected]=useState('');
    
  return (
    <>
    <div className="trafficLight-container">
      <div className="trafficLight-stick"></div>
        <div className="trafficLight-container-light">
              <div className={colorSelected==='red' ? 'trafficLight-red trafficLight-light-on ': 'trafficLight-red' }  onClick={()=>setColorSelected('red')}></div>
              <div className={colorSelected==='orange' ? 'trafficLight-orange trafficLight-light-on' : 'trafficLight-orange'} onClick={()=>setColorSelected('orange')}></div>
              <div className={colorSelected==='green' ? 'trafficLight-green trafficLight-light-on' : 'trafficLight-green'} onClick={()=>setColorSelected('green')}></div>
        </div>
    </div>
    </>
  );
};
export default TrafficLight;
