import React from 'react'
import './styles.css'

interface ButtonProps {
  label: string,
  icon: React.ReactNode,
  onClick: () => void,
}

export function Button({ label, icon, onClick }: ButtonProps) {
  return(
    <button id="start" onClick={onClick}>
      {label}
      {icon}
    </button>
  )
}