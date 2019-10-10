import React, { useState, useEffect } from 'react'
import CreateAHero from './CreateAHero'
import LoadAHero from './LoadAHero'
import { Link } from 'react-router-dom'
import heropage from './heropage.css'

const HeroPage = (props) => {
  const [currentHero, setCurrentHero] = useState({
    name: "Hero",
    level: 0,
    exp: 0,
    str: 0,
    dex: 0,
    kno: 0,
    cha: 0,
    vit: 0,
    def: 0,
    user: null,
    skill_point: 0,
  })

  const handleSelect = (hero) => {
    setCurrentHero(hero)
  }

  return (
    <div className='heropage'>
        <h1 className='head'> Welcome {props.currentUser && props.currentUser.username}</h1>
        <div className='right-panel'>
          <CreateAHero
          currentUser={props.currentUser}
          handleSelect={handleSelect}
          />
        </div>
        <div className='left-panel'>
          <LoadAHero
          currentUser={props.currentUser}
          currentHero={currentHero}
          />
        </div>
      <div className='foot'>
        <Link to='/login'>
          <button
          onClick={props.handleLogout}>Logout</button>
        </Link>
      </div>
    </div>
  )
}

export default HeroPage
