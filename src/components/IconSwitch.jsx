import React from 'react'

export default function IconSwitch({icon, onSwitch}) {
  return (
    <div className="material-icons" onClick={onSwitch}>{icon}</div>
  )
}
