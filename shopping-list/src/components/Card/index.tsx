import './styles.css'

import waterEmoji from '../../assets/emojis/agua.svg'

interface cardProps {
  dailyGoal: number,
  dailyGoalPercentage: number,
}

export function Card({ dailyGoal, dailyGoalPercentage }: cardProps) {
  return (
    <div className='card'>
      <p>{dailyGoalPercentage}%</p>

      <div className='goal'>
        <img src={waterEmoji} height="151px" alt="Imagem de copo de água" />
        <div className='goal-info'>
          <h3>Beber água</h3>
          <span>Meta: {dailyGoal}l</span>
        </div>
      </div>
    </div>
  )
}