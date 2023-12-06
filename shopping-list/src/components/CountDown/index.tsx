import './styles.css'

export function CountDown() {
  return (
    <div className="countdown">
      <div className="hours">
        <span>00</span>
      </div>

      <span>h</span>

      <span>:</span>

      <div className="minutes">
        <span>00</span>
      </div>

      <span>m</span>
    </div>
  )
}