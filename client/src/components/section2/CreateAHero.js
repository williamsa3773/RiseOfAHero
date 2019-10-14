import React from 'react'
import createahero from './createahero.css'
import images from  './images'

const CreateAHero = (props) => {
  return (
    <>
      <div className='create'>
      {props.currentUser && props.currentUser.heros.map((hero, i) => (
        <div className='heroes'>
          <div
          className='portrait'
          onClick={() => props.handleSelect(hero)}>
          <img alt={images[i]} key={i} src={images[i]} height='100px' width='100px'/>
          </div>
          <button
          name='delete'
          onClick={() => props.handleDelete(hero.id)}
          >Delete</button>
        </div>
      ))}
      </div>
    </>
  )
}

export default CreateAHero
