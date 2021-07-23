import React, { useState, useCallback } from "react";
import bu from './bu.png';
import modeli from './Burger.usdz';
import modela from './Burger.glb';
import t from './t.png';






export const Gallery = props => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  
 

  

  const openImageViewer = useCallback(index => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Gallery</h2>
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
