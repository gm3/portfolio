import React from 'react'
import TextPressure from './TextPressure.jsx'

export default function Hero() {
  return (
    <div className="hero">
      <div style={{ position: 'relative', height: '40vh', width: '100%', padding: '0 16px' }}>
        <TextPressure
          text="LETS BUILD"
          flex={true}
          alpha={false}
          stroke={false}
          width={true}
          weight={true}
          italic={true}
          textColor="#0a0a0a"
          strokeColor="#0a0a0a"
          minFontSize={24}
          sizeMultiplier={0.35}
          maxFontSize={96}
          scale={false}
          className="hero-pressure"
        />
      </div>
    </div>
  )
}


