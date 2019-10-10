import React, { useState, useEffect } from 'react'
import CreateAHero from './CreateAHero'
import LoadAHero from './LoadAHero'
import { Link } from 'react-router-dom'
import heropage from './heropage.css'

const HeroPage = (props) => {
  const [currentHero, setCurrentHero] = useState({
    name: "Click the images",
    level: 100,
    exp: 0,
    str: 17,
    dex: 16,
    kno: 17,
    cha: 16,
    vit: 16,
    def: 17,
    user: null,
    skill_point: 99+5,
  })

  const handleSelect = (hero) => {
    setCurrentHero(hero)
  }

  const handleClick = (e) => {
    e.preventDefault()
    //increase
    if (currentHero.skill_point > 0) {
      if (e.target.name === 'vitUp') {
        currentHero.skill_point -= 1
        currentHero.vit += 1
      }
      if (e.target.name === 'defUp') {
          currentHero.skill_point -= 1
          currentHero.def += 1
        }
      if (e.target.name === 'chaUp') {
          currentHero.skill_point -= 1
          currentHero.cha += 1
      }
      if (e.target.name === 'strUp') {
          currentHero.skill_point -= 1
          currentHero.str += 1
      }
      if (e.target.name === 'dexUp') {
          currentHero.skill_point -= 1
          currentHero.dex += 1
      }
      if (e.target.name === 'knoUp') {
          currentHero.skill_point -= 1
          currentHero.kno += 1
      }
    }
    //decrease
    if (currentHero.vit || currentHero.vit || currentHero.vit || currentHero.vit || currentHero.vit || currentHero.vit > 1) {
      if (e.target.name === 'vitDown') {
          currentHero.skill_point += 1
          currentHero.vit -= 1
      }
      if (e.target.name === 'defDown') {
          currentHero.skill_point += 1
          currentHero.def -= 1
      }
      if (e.target.name === 'chaDown') {
          currentHero.skill_point += 1
          currentHero.cha -= 1
      }
      if (e.target.name === 'strDown') {
        currentHero.skill_point += 1
        currentHero.str -= 1
      }
      if (e.target.name === 'dexDown') {
        currentHero.skill_point += 1
        currentHero.dex -= 1
      }
      if (e.target.name === 'knoDown') {
        currentHero.skill_point += 1
        currentHero.kno -= 1
      }
    }
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
          onClick={handleClick}
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
