import React from 'react'
import loadahero from './loadahero.css'

const LoadAHero = (props) => {
  return (
    <>
        <div className='load'>
          <h1 className='name'>{props.currentHero.name}</h1>
          <div className='stats'>
            <p className='level'>Lvl: {props.currentHero.level}</p>
            <p className='exp'> {props.currentHero.exp} :Exp</p>
          </div>
          <div className='display'>
          </div>
          <div className='gear'>
            <h1 className='weapon'>Weapon:</h1>
            <h1 className='armor'>:Armor</h1>
          </div>
          <p className='points'>Remaing points: {props.currentHero.skill_point}</p>
          <div className='skill-point'>
            <div className='left-side'>
              <p>Vit: {props.currentHero.vit}</p>
              <button
              name='vitUp'
              onClick={props.onClick}
              >+1</button>
              <button
              name='vitDown'
              onClick={props.onClick}
              >-1</button>
              <p>Def: {props.currentHero.def}</p>
              <button
              name='defUp'
              onClick={props.onClick}
              >+1</button>
              <button
              name='defDown'
              onClick={props.onClick}
              >-1</button>
              <p>Cha: {props.currentHero.cha}</p>
              <button
              name='chaUp'
              onClick={props.onClick}
              >+1</button>
              <button
              name='chaDown'
              onClick={props.onClick}
              >-1</button>
            </div>
            <div className='right-side'>
              <p>{props.currentHero.str} :Str</p>
              <button
              name='strUp'
              onClick={props.onClick}
              >+1</button>
              <button
              name='strDown'
              onClick={props.onClick}
              >-1</button>
              <p>{props.currentHero.dex} :Dex</p>
              <button
              name='dexUp'
              onClick={props.onClick}
              >+1</button>
              <button
              name='dexDown'
              onClick={props.onClick}
              >-1</button>
              <p>{props.currentHero.kno} :Kno</p>
              <button
              name='knoUp'
              onClick={props.onClick}
              >+1</button>
              <button
              name='knoDown'
              onClick={props.onClick}
              >-1</button>
            </div>
          </div>
          <div className='update'>
            <button>Save</button>
          </div>
        </div>
    </>
  )
}

export default LoadAHero
