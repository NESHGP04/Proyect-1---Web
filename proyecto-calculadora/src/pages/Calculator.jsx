import React, { useState } from "react";
import '../styles/calculator.css';

export default function Calculator () {
  const [current, setCurrent] = useState('')
  const [previous, setPrevious] = useState('')
  const [operator, setOperatorValue] = useState('')
  const [resetDisplay, setResetDisplay] = useState(false)
  const [display, setDisplay] = useState('')

  const updateDisplay = (text) => {
    if (text.toString().length > 9) {
      setDisplay('ERROR')
      setCurrent('')
      setPrevious('')
      setOperatorValue('')
      return
    }

    setDisplay(text)
  }

  const append = (char) => {
    if (display === 'ERROR') return

    if (resetDisplay) {
      setCurrent('')
      setResetDisplay(false)
    }

    if (char === '.' && current.includes('.')) return
    if (current.length >= 9) return

    const newCurrent = current + char
    setCurrent(newCurrent)
    updateDisplay(newCurrent)
  }

  const handleOperator = (op) => {
    if (display === 'ERROR') return

    if (operator && current !== '') {
      operate()
    }

    setOperatorValue(op)
    setPrevious(current)
    setCurrent('')
  }

  const operate = () => {
    const a = parseFloat(previous)
    const b = parseFloat(current)
    let result = 0

    if (isNaN(a) || isNaN(b)) return

    switch (operator) {
      case '+':
        result = a + b
        break
      case '-':
        result = a - b
        break
      case '*':
        result = a * b
        break
      case '/':
        result = b === 0 ? 'ERROR' : a / b
        break
      case '%':
        result = b === 0 ? 'ERROR' : a % b
        break
      default:
        return
    }

    if (typeof result === 'number') {
      if (result < 0 || result > 999999999) {
        setCurrent('')
        setPrevious('')
        setOperatorValue('')
        updateDisplay('ERROR')
      } else {
        const sliced = result.toString().slice(0, 9)
        setCurrent(sliced)
        updateDisplay(sliced)
      }
    } else {
      updateDisplay('ERROR')
      setCurrent('')
      setPrevious('')
      setOperatorValue('')
    }

    setResetDisplay(true)
  }

  const calculate = () => {
    if (operator && current !== '') {
      operate()
    }
  }

  const clearDisplay = () => {
    setCurrent('')
    setPrevious('')
    setOperatorValue('')
    setResetDisplay(false)
    updateDisplay('')
  }

  return (
    <div className='calculator'>
      <input type='text' className='display' value={display} disabled />
      <div className='buttons'>
        <button onClick={() => append('7')}>7</button>
        <button onClick={() => append('8')}>8</button>
        <button onClick={() => append('9')}>9</button>
        <button className='operator' onClick={() => handleOperator('/')}>÷</button>

        <button onClick={() => append('4')}>4</button>
        <button onClick={() => append('5')}>5</button>
        <button onClick={() => append('6')}>6</button>
        <button className='operator' onClick={() => handleOperator('*')}>×</button>

        <button onClick={() => append('1')}>1</button>
        <button onClick={() => append('2')}>2</button>
        <button onClick={() => append('3')}>3</button>
        <button className='operator' onClick={() => handleOperator('-')}>−</button>

        <button onClick={() => append('0')}>0</button>
        <button onClick={() => append('.')}>.</button>
        <button className='equals' onClick={calculate}>=</button>
        <button className='operator' onClick={() => handleOperator('+')}>+</button>

        <button className='clear' style={{ gridColumn: 'span 4' }} onClick={clearDisplay}>C</button>
      </div>
    </div>
  )
}
