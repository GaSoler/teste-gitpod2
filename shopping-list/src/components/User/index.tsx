import './styles.css'
import WelcomeIcon from '../../assets/emojis/aceno.svg'

export function User() {
  return (
    <header>
      <img src="https://github.com/GaSoler.png" width={64} height={64} alt="foto de perfil" />

      <div className="welcome">
        <span>Boa tarde,</span>
        <span id="name">Gabriel
          <img src={WelcomeIcon} width={24} height={24} alt="Ícone de aceno" />
        </span>
      </div>
    </header>
  )
}