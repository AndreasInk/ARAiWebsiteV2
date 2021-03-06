import React, { useState, useEffect } from "react";
import { Navigation } from './components/navigation'
import { Header } from './components/header'
import { Features } from './components/features'
import { About } from './components/about'
import { Services } from './components/services'
import { Gallery } from './components/gallery'
import { Footer } from './components/footer'
import JsonData from './data/data.json'
import SmoothScroll from 'smooth-scroll'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Vs } from './vs'
import { R } from './r'
export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
})
const Home = () => {
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
<Services data={landingPageData.Services} />
<Gallery />
<Footer />
</div>
  )
};
const App = () => {
  const [landingPageData, setLandingPageData] = useState({})
  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])

  return (
    <div>
         <Router>
    

         <Route>
       
             <Route path='/VPizza' component={Vs} />
             <Route path='' component={R} />
             <Route path='/Home' component={Home} />
            
       
       </Route>
    
      
       </Router>
     
    </div>
  )
}

export default App
