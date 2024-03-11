type MultiStepProps = {
  size: number
  currentStep: number
}

export function MultiStep({ currentStep, size }: MultiStepProps) {
  const steps = []

  for (let i=0; i < size; i++) {
    const bgColor = i < currentStep ? 'bg-zinc-100' : 'bg-zinc-800';
    steps.push(
      <div key={i} className={`h-1 rounded-sm ${bgColor}`}></div>
    );
  }
  return (
    <div className="">
      <p className="text-xs text-zinc-400 leading-relaxed">Passo {currentStep} de {size}</p>
      <div className="grid grid-cols-4 gap-2 mt-1">
        {steps}
      </div>
    </div>
  )
}