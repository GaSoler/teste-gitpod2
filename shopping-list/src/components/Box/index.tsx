import './styles.css'
import { Slider } from "../Slider";
import { useState } from 'react';

interface BoxProps {
  text: string,
  min: number,
  max: number,
  step: number,
}

export function Box({ text, max, min, step }: BoxProps) {
  const [sliderValue, setSliderValue] = useState(0);

  const handleSliderChange = (value: number) => {
    setSliderValue(value);
  };
  
  return (
    <div className="box">
      <div className="box-title">
        <label htmlFor="daily-goal">{text}</label>
        <output id='daily-goal-value'>{sliderValue}ml</output>
      </div>
      <Slider min={min} max={max} step={step} onSliderChange={handleSliderChange} />
    </div>
  )
}