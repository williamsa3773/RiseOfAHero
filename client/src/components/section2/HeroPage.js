import React, { useState, useEffect } from 'react'
import CreateAHero from './CreateAHero'
import LoadAHero from './LoadAHero'
import { Link } from 'react-router-dom'
import { updateHero, deleteHero, createHero } from '../../services/api-helper'
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
    skill_point: 99+5,
  })

  useEffect(() => {
    if (!currentHero.id && props.currentUser) {
      setCurrentHero(props.currentUser.heros[0])
    }
  }, [props.currentUser]);

  const handleSelect = (hero) => {
    setCurrentHero(hero)
  }

  const handleClick = (e) => {
    e.preventDefault()
    //increase
    if (currentHero.skill_point > 0) {
      console.log(currentHero.id)
      if (e.target.name === 'vitUp') {
        setCurrentHero(currentHero => ({...currentHero, skill_point: currentHero.skill_point - 1}))
        setCurrentHero(currentHero => ({...currentHero, vit: currentHero.vit + 1}))
      }
      if (e.target.name === 'defUp') {
        setCurrentHero(currentHero => ({...currentHero, skill_point: currentHero.skill_point - 1}))
        setCurrentHero(currentHero => ({...currentHero, def: currentHero.def + 1}))
        }
      if (e.target.name === 'chaUp') {
        setCurrentHero(currentHero => ({...currentHero, skill_point: currentHero.skill_point - 1}))
        setCurrentHero(currentHero => ({...currentHero, cha: currentHero.cha + 1}))
      }
      if (e.target.name === 'strUp') {
        setCurrentHero(currentHero => ({...currentHero, skill_point: currentHero.skill_point - 1}))
        setCurrentHero(currentHero => ({...currentHero, str: currentHero.str + 1}))
      }
      if (e.target.name === 'dexUp') {
        setCurrentHero(currentHero => ({...currentHero, skill_point: currentHero.skill_point - 1}))
        setCurrentHero(currentHero => ({...currentHero, dex: currentHero.dex + 1}))
      }
      if (e.target.name === 'knoUp') {
        setCurrentHero(currentHero => ({...currentHero, skill_point: currentHero.skill_point - 1}))
        setCurrentHero(currentHero => ({...currentHero, kno: currentHero.kno + 1}))
      }
    }
    //decrease
    if (currentHero.vit > 1 || currentHero.def > 1 || currentHero.cha > 1 || currentHero.str > 1 || currentHero.dex > 1 || currentHero.kno > 1) {
      if (e.target.name === 'vitDown') {
        setCurrentHero(currentHero => ({...currentHero, skill_point: currentHero.skill_point + 1}))
        setCurrentHero(currentHero => ({...currentHero, vit: currentHero.vit - 1}))
      }
      if (e.target.name === 'defDown') {
        setCurrentHero(currentHero => ({...currentHero, skill_point: currentHero.skill_point + 1}))
        setCurrentHero(currentHero => ({...currentHero, def: currentHero.def - 1}))
      }
      if (e.target.name === 'chaDown') {
        setCurrentHero(currentHero => ({...currentHero, skill_point: currentHero.skill_point + 1}))
        setCurrentHero(currentHero => ({...currentHero, cha: currentHero.cha - 1}))
      }
      if (e.target.name === 'strDown') {
        setCurrentHero(currentHero => ({...currentHero, skill_point: currentHero.skill_point + 1}))
        setCurrentHero(currentHero => ({...currentHero, str: currentHero.str - 1}))
      }
      if (e.target.name === 'dexDown') {
        setCurrentHero(currentHero => ({...currentHero, skill_point: currentHero.skill_point + 1}))
        setCurrentHero(currentHero => ({...currentHero, dex: currentHero.dex - 1}))
      }
      if (e.target.name === 'knoDown') {
        setCurrentHero(currentHero => ({...currentHero, skill_point: currentHero.skill_point + 1}))
        setCurrentHero(currentHero => ({...currentHero, kno: currentHero.kno - 1}))
      }
    }
  }

  const handleUpdate = async () => {
    const { updated_at, created_at, id, images_id, ...hero } = currentHero;
    const updatedHero = await updateHero(id, { hero })
    setCurrentHero(updatedHero)
  }

  const handleCreate = async (id) => {
    const createdHero = await createHero();
    setCurrentHero(createdHero);
    props.setCurrentUser({ ...props.currentUser, heros: props.currentUser.heros.map((hero) => hero.id === id ? createdHero : hero)});
  }

  const handleDelete = async (id) => {
    const deletedHero = await deleteHero(id);
    await handleCreate(id);
  }

  return (
    <div className='heropage'>
        <h1 className='head'> Welcome {props.currentUser && props.currentUser.username} :) :) :) :) :)</h1>
        <div className='right-panel'>
          <CreateAHero
          currentUser={props.currentUser}
          handleSelect={handleSelect}
          onClick={handleClick}
          handleDelete={handleDelete}
          />
        </div>
        <div className='left-panel'>
          <LoadAHero
          currentUser={props.currentUser}
          currentHero={currentHero}
          onClick={handleClick}
          handleUpdate={handleUpdate}
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
