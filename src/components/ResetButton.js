import React from 'react'
import "./ResetBotton.css"

export const ResetButton = ({resetBoard}) => {
  return (
    <button className="reset-btn" onClick={resetBoard}>Reset Game</button>
  )
}
