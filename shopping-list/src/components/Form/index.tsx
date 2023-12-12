import './styles.css'
import { Box } from '../Box'
import { ChevronRight } from 'lucide-react'
import { CountDown } from '../CountDown';

export function Form() {
  return (
      <div className='controls'>
        <Box text='Meta diária' max={10000} min={1000} step={100} />
        <Box text='Quantidade por timer' max={1000} min={100} step={100} />
        <CountDown />
        <button className='button-start' type="submit">
          Começar
          <ChevronRight />
        </button>
      </div>

  )
}
