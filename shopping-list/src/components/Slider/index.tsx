import './styles.css'
import { useState } from 'react';

interface SliderProps {
  min: number,
  max: number,
  step: number,
  onSliderChange: (value: number) => void;
}

export function Slider({ min, max, step, onSliderChange }: SliderProps) {
  const [sliderValue, setSliderValue] = useState(0);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const tempSliderValue = parseFloat(event.target.value);
    setSliderValue(tempSliderValue);

    const progress = ((tempSliderValue - min) / (max - min)) * 100;

    event.target.style.background = `linear-gradient(to right, #7FC4ED ${progress}%, #322F40 ${progress}%)`;

    onSliderChange(tempSliderValue);
  };

  return (
    <div className="range">
      <input 
        type="range"
        min={min}
        max={max}
        step={step}
        value={sliderValue}
        onChange={handleSliderChange}
      />
    </div>
  )
}