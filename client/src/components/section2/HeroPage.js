import React from 'react'
import CreateAHero from './CreateAHero'
import LoadAHero from './LoadAHero'
import { Link } from 'react-router-dom'
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
      <footer>
      <Link to='/login'>
        <button>Logout</button>
      </Link>
      </footer>
    </>
  )
}

export default HeroPage
