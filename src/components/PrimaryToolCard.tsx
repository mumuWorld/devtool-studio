import React from 'react'
import './PrimaryToolCard.css'

interface PrimaryToolCardProps {
  title: string
  description: string
  onOpen: () => void
}

const PrimaryToolCard: React.FC<PrimaryToolCardProps> = ({
  title,
  description,
  onOpen,
}) => {
  return (
    <div className="primary-tool-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={onOpen}>打开工具</button>
    </div>
  )
}

export default PrimaryToolCard
