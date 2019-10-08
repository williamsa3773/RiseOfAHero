import React from 'react'
import loadahero from './loadahero.css'

const LoadAHero = () => {
  return (
    <>
      <div className='load'>
        <h1 className='name'>Name</h1>
        <div className='display'>
        </div>
        <h1 className='weapon'>Weapon:</h1>
        <h1 className='armor'>Armor:</h1>
          <p className='points'>Remaing points:</p>
        <div className='left-side'>
          <p>Vit:</p><button>+1</button><button>-1</button>
          <p>Def:</p><button>+1</button><button>-1</button>
          <p>Cha:</p><button>+1</button><button>-1</button>
        </div>
        <div className='right-side'>
          <p>Str:</p><button>+1</button><button>-1</button>
          <p>Dex:</p><button>+1</button><button>-1</button>
          <p>Kno:</p><button>+1</button><button>-1</button>
        </div>
        <button className='update'>EDIT</button>
        <button className='enter'>Enter Arena</button>
        <button className='delete'>Delete</button>
      </div>
    </>
  )
}

export default LoadAHero
