import React from 'react'
import "./RefreshButton.css"

export const RefreshButton = ({restartGame }) => {
  return (
    <button className="refresh-btn" onClick={restartGame}>Restart Game</button>
  )
}
