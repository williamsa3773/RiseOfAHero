import React from 'react'
import CreateAHero from './CreateAHero'
import LoadAHero from './LoadAHero'
import heropage from './heropage.css'

const HeroPage = () => {
  return (
    <>
      <header>
        <h1> Welcome (Username)</h1>
      </header>
      <div className='container'>
        <div className='right-panel'>
          <CreateAHero />
        </div>
        <div className='left-panel'>
          <LoadAHero />
        </div>
      </div>
    </>
  )
}

export default HeroPage
