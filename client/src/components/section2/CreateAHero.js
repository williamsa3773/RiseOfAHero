import React from 'react'
import createahero from './createahero.css'

const CreateAHero = (props) => {
  return (
    <>
      <div className='create'>
      {props.currentUser && props.currentUser.heros.map((hero) => (
        <div className='heroes'>
          <div
          className='portrait'
          onClick={() => props.handleSelect(hero)}>
          </div>
          <button>Delete</button>
        </div>
      ))}
      </div>
    </>
  )
}

export default CreateAHero
