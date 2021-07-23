import React, { useState, useCallback } from "react";
import bu from './VPizza.png';
import modeli from './VPizza.usdz';
import modela from './VPizza.glb';









export const Vs = () => {
    const [landingPageData, setLandingPageData] = useState({})

  return (
    <div id="Vs" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>V's Pizza</h2>
          <p></p>
        </div>
      
        <div className='col-md-20'>
        <div className="hover-bg">
                
                <model-viewer src={modela}
              ios-src={modeli}
              poster={bu}
              alt="A 3D model of an astronaut"
              shadow-intensity="1"
              camera-controls
              auto-rotate ar>
</model-viewer>
              </div>
              
              
            </div>
            </div>
        
        <div className="row">
          
           
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item cursor">
                 
                
             
              </div>
          </div>
          
    
        </div>
        
      </div>
  );
};
