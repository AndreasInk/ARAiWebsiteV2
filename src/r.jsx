import React, { useState, useEffect } from "react";
import { Navigation } from './components/navigation'
import { Header } from './components/rHeader'
import { Features } from './components/features'
import { About } from './components/rAbout'
import { Services } from './components/services'
import { Gallery } from './components/gallery'
import { Footer } from './components/footer'
import JsonData from './data/r.json'
import SmoothScroll from 'smooth-scroll'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Vs } from './vs'
export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
})
export const R = () => {
  const [landingPageData, setLandingPageData] = useState({})
  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])
  return (
    <div>

    
<Navigation />
<Header data={landingPageData.Header} />
<Features data={landingPageData.Features} />
<About data={landingPageData.About} />
<Gallery />
<Footer />
</div>
  )
};



