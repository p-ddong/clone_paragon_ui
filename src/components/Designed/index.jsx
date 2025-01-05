import React from 'react'
import "./styles.sass";
import vid from '../../assets/vid/designed-vid.webm'

const Designed = () => {
  return (
    <div className='designed'>

      <div className='designed-container'>
        <div className="designed-info">
          <p>🍑</p>
          <h1>Designed to Sculpt</h1>
          <h2>After trying our <h2 style={{ fontWeight: 'bold' }}>Sculptseam®</h2> hidden scrunch you won't want to go back to normal, boring leggings.</h2>
          <button>Shop Sculptseam®</button>
        </div>

        <div className="vid-info">

          <video autoPlay loop muted>
            <source src={vid} type="video/webm"/>
          </video>

          <div>
            <span>Other brands</span>
            <span>Sculptseam®</span>
          </div>

          <button>Shop Sculptseam®</button>
        </div>

      </div>
    </div>
  )
}

export default Designed;
