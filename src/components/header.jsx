import React from 'react'
import ReactLogo from './back.svg';
export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
      <div class="zstack">
        <bg> 
        <img src={ReactLogo} bg={{zIndex: 0, top:0}} class='cover'/>
        </bg>
        <div className='overlay'>
          <div className='container'>
          
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
              <h2>
                  ARAi
                 
                </h2>
                <h1>
                  {props.data ? props.data.title : 'Loading'}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                <a
                  href='#features'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  Learn More
                </a>{' '}
                <a
                  href='https://apps.apple.com/us/app/arai-photos-to-3d-model/id1571606646'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  Download
                </a>{' '}
              </div>
              
            </div>
          </div>
        </div>
        </div>
      </div>
    </header>
  )
}
