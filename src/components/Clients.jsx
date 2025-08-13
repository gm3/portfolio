import React from 'react'

const clients = [
  { name: 'MTV' },
  { name: 'Cartoon Network' },
  { name: 'VH1' },
  { name: 'BET' },
  { name: 'HBO' },
  { name: 'Monaverse' },
  { name: 'SuperRare' },
  { name: 'VRChat' },
  { name: 'M3org' },
  { name: 'ESPN' },
  { name: 'Telemundo' },
  { name: 'E!' },
  { name: 'NBC' },
  { name: 'ABC' },
  { name: 'CBS' },
  { name: 'FOX' },
  { name: 'Discovery' },
  
  { name: 'Nickelodeon' },
  { name: 'Comedy Central' },
  { name: 'Adult Swim' },
  { name: 'TNT' },
  { name: 'TBS' },
  { name: 'Syfy' },
  { name: 'National Geographic' },
  { name: 'A&E' },
  { name: 'History' },
  // removed by request
  { name: 'PBS' },
  
  { name: 'And Many More' },
]

export default function Clients() {
  return (
    <div className="clients">
      {clients.map((c) => (
        <div key={c.name} className="client-badge" aria-label={c.name} title={c.name}>
          <span>{c.name}</span>
        </div>
      ))}
    </div>
  )
}


