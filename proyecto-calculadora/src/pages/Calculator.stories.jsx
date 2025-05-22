import React, { useState } from 'react'
import Calculator from './Calculator'

export default {
  title: 'Components/Calculator',
  component: Calculator
}

// Historia base (la calculadora funcional normal)
export const Default = () => <Calculator />

// Historia simulando error en el display
export const DisplayError = () => {
  const ErrorDisplayWrapper = () => {
    const [display, setDisplay] = useState('ERROR')
    return (
      <div className="calculator">
        <input type="text" className="display" value={display} disabled />
        {/* Botones no funcionales (solo para visualización) */}
        <div className="buttons">
          {['7', '8', '9', '/'].map((val, i) => (
            <button key={i}>{val}</button>
          ))}
        </div>
      </div>
    )
  }
  return <ErrorDisplayWrapper />
}

// Historia con número grande al borde del límite
export const MaxNumber = () => {
  const MaxNumberWrapper = () => {
    const [display] = useState('999999999')
    return (
      <div className="calculator">
        <input type="text" className="display" value={display} disabled />
        <div className="buttons">
          {/* Solo algunos botones de ejemplo */}
          {['1', '2', '3', '+'].map((val, i) => (
            <button key={i}>{val}</button>
          ))}
        </div>
      </div>
    )
  }
  return <MaxNumberWrapper />
}

export const AfterOperation = () => {
  const AfterOperationWrapper = () => {
    const [display] = useState('5') // resultado simulado
    return (
      <div className="calculator">
        <input type="text" className="display" value={display} disabled />
        <div className="buttons">
          <button>3</button>
          <button>+</button>
          <button>2</button>
          <button>=</button>
        </div>
      </div>
    )
  }
  return <AfterOperationWrapper />
}

