import './styles.css'
import { Card } from "../Card";
import { Form } from '../Form';
import { User } from '../User';

export function Main() {
  return (
    <div className='main'>
      <User />
      <div className='form'>
        <Card dailyGoal={3} dailyGoalPercentage={80} />
        <Form />
      </div>
    </div>
  )
}