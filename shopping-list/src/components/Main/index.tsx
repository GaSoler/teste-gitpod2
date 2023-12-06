import './styles.css'
import { Card } from "../Card";
import { Form } from '../Form';
import { User } from '../User';

export function Main() {
  return (
    <div className='main'>
      <User />
      <div className='form'>
        <Card />
        <Form />
      </div>
    </div>
  )
}