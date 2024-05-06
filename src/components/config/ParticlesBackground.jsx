import React, { useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import particlesConfig from './particles-config'

function ParticlesBackground() {

    const particlesInit = useCallback((engine) => {
        loadFull(engine)
    }, [])

  return (
    <div>
        <Particles 
        // id= "tsparticles"
        options={particlesConfig}
        particlesInit={particlesInit}
         />

    </div>
  )
}

export default ParticlesBackground