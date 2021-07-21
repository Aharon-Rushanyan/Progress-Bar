import React, { useEffect, useState } from 'react';
import Button from './FormElements/Button/Button'
import Input from './FormElements/Input/Input'

import './StepContainer.scss'

const StepContainer = () => {


  const [step, setStep] = useState(1)
  const [show, setShow] = useState(false)
  const [showWarning, setShowWarning] = useState(false)

  const [maxStep, setMaxStep] = useState(0)
  const [disabledNext, setDisabledNext] = useState(false)
  const [disabledPrevious, setDisabledPrevious] = useState(false)
  const ShowSteps =
    [
      <div key="1" className={`stepper-item ${step > 1 ? 'completed' : 'active'}`}>
        <div className="step-counter">1</div>
        <div className="step-name">First</div>
      </div>,
      <div key="2" className={`stepper-item ${step > 2 && 'completed'} ${step === 2 && 'active'}`}>
        <div className="step-counter">2</div>
        <div className="step-name">Second</div>
      </div>,
      <div key="3" className={`stepper-item ${step > 3 && 'completed'} ${step === 3 && 'active'}`}>
        <div className="step-counter">3</div>
        <div className="step-name">Third</div>
      </div>,
      <div key="4" className={`stepper-item ${step > 4 && 'completed'} ${step === 4 && 'active'}`}>
        <div className="step-counter">4</div>
        <div className="step-name">Forth</div>
      </div>,
      <div key="5" className={`stepper-item ${step > 5 && 'completed'} ${step === 5 && 'active'}`}>
        <div className="step-counter">5</div>
        <div className="step-name">fift</div>
      </div>
    ]

  useEffect(() => {
    if (step === 1) {
      setDisabledPrevious(true)
    } else {
      setDisabledPrevious(false)
    }

    if (step > (+maxStep)) {
      setDisabledNext(true)
    } else {
      setDisabledNext(false)
    }
  }, [step, maxStep])

  const OnNextClick = () => {
    setStep(step + 1)
  }

  const onShow = (event) => {
    event.preventDefault()
    if (maxStep > 1 && maxStep < 6)
      setShow(true)
    else {
      setShowWarning(true)
    }
  }

  const OnPreviousClick = () => {
    setStep(step - 1)
  }

  const onsetMaxStep = (event, value) => {
    setMaxStep(value)
  }

  return (
    <div className="StepContainer">
      {!show ? <div className="start">
        <form className='notSteps'>
          <Input type="number"
            value={maxStep}
            placeholder='0'
            onChange={(event, value) => onsetMaxStep(event, value)}>
          </Input>
          <Button type="submit" onClick={onShow} color="purple" >Ok</Button>
        </form>
        {showWarning && <div className='Warning'>Enter Number From 2 to 5 </div>}
      </div> :
        <div>
          <div className="stepper-wrapper">
            {ShowSteps.slice(0, maxStep)}
          </div>
          <div>
          </div>
          <div className="Buttons">
            <Button onClick={OnPreviousClick} disabled={disabledPrevious} color="purple">Previous</Button>
            <Button onClick={OnNextClick} disabled={disabledNext} color="purple"> {step >= maxStep ? 'Submit' : 'Next'}</Button>
          </div>
        </div>
      }
    </div>
  )
}

export default StepContainer;