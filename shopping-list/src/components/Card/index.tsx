import './styles.css'

import waterEmoji from '../../assets/emojis/agua.svg'

export function Card() {
  return (
    <div className='card'>
      <p>80%</p>

      <div className='goal'>
        <img src={waterEmoji} height="151px" alt="Imagem de copo de água" />
        <div className='goal-info'>
          <h3>Beber água</h3>
          <span>Meta: 3l</span>
        </div>
      </div>
    </div>
  )
}