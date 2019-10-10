import React from 'react'
import loadahero from './loadahero.css'

const LoadAHero = (props) => {
  return (
    <>
      <form>
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
              <p>Vit: {props.currentHero.vit}</p><button>+1</button><button>-1</button>
              <p>Def: {props.currentHero.def}</p><button>+1</button><button>-1</button>
              <p>Cha: {props.currentHero.cha}</p><button>+1</button><button>-1</button>
            </div>
            <div className='right-side'>
              <p>{props.currentHero.str} :Str</p><button>+1</button><button>-1</button>
              <p>{props.currentHero.dex} :Dex</p><button>+1</button><button>-1</button>
              <p>{props.currentHero.kno} :Kno</p><button>+1</button><button>-1</button>
            </div>
          </div>
          <div className='update'>
            <button>Save</button>
          </div>
        </div>
      </form>
    </>
  )
}

export default LoadAHero
