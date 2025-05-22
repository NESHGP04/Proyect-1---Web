import React from 'react'
import Button from './Button.jsx'

export default function Panel ({ onAppend, onOperator, onCalculate, onClear }) {
  return (
    <div className='buttons'>
      {['7', '8', '9'].map(n => <Button key={n} label={n} onClick={() => onAppend(n)} />)}
      <Button label='÷' onClick={() => onOperator('/')} className='operator' />
      {['4', '5', '6'].map(n => <Button key={n} label={n} onClick={() => onAppend(n)} />)}
      <Button label='×' onClick={() => onOperator('*')} className='operator' />
      {['1', '2', '3'].map(n => <Button key={n} label={n} onClick={() => onAppend(n)} />)}
      <Button label='−' onClick={() => onOperator('-')} className='operator' />
      <Button label='0' onClick={() => onAppend('0')} />
      <Button label='.' onClick={() => onAppend('.')} />
      <Button label='=' onClick={onCalculate} className='equals' />
      <Button label='+' onClick={() => onOperator('+')} className='operator' />
      <Button label='C' onClick={onClear} className='clear' style={{ gridColumn: 'span 4' }} />
    </div>
  )
}
