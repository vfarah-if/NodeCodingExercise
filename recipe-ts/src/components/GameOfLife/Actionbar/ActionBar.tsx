import React from 'react'
import Button from '../../Button'
import './style/index.css'

export interface ActionbarProps {
  title?: string
  generateDisplay?: string
  simulateDisplay?: string
  randomiseDisplay?: string
  clearDisplay?: string
  onGenerate: () => void
  onSimulate: () => void
  onRandomise: () => void
  onClear: () => void
}

const Actionbar: React.FC<ActionbarProps> = ({
  title = 'Game of Life on Mars',
  generateDisplay = 'Generate',
  simulateDisplay = 'Simulate',
  randomiseDisplay = 'Randomise',
  clearDisplay = 'Clear',
  onGenerate,
  onSimulate,
  onRandomise,
  onClear,
}) => {
  return (
    <header>
      <div className='wrapper'>
        <div>
          <svg
            version='1.0'
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
            width='72'
            height='58'
          >
            <defs>
              <rect
                id='alive'
                x='0'
                y='0'
                width='14'
                height='14'
                fill='black'
                stroke='#c0c0c0'
                strokeWidth='2'
              />
              <rect
                id='dead'
                x='0'
                y='0'
                width='14'
                height='14'
                fill='white'
                stroke='#c0c0c0'
                strokeWidth='2'
              />
            </defs>
            <g transform='translate(1,1)'>
              <use xlinkHref='#dead' transform='translate(0,0)' />
              <use xlinkHref='#alive' transform='translate(14,0)' />

              <use xlinkHref='#dead' transform='translate(28,0)' />
              <use xlinkHref='#dead' transform='translate(42,0)' />
              <use xlinkHref='#alive' transform='translate(56,0)' />

              <use xlinkHref='#alive' transform='translate(0,14)' />
              <use xlinkHref='#dead' transform='translate(14,14)' />
              <use xlinkHref='#dead' transform='translate(28,14)' />
              <use xlinkHref='#dead' transform='translate(42,14)' />
              <use xlinkHref='#dead' transform='translate(56,14)' />

              <use xlinkHref='#alive' transform='translate(0,28)' />
              <use xlinkHref='#dead' transform='translate(14,28)' />
              <use xlinkHref='#dead' transform='translate(28,28)' />
              <use xlinkHref='#dead' transform='translate(42,28)' />
              <use xlinkHref='#alive' transform='translate(56,28)' />

              <use xlinkHref='#alive' transform='translate(0,42)' />
              <use xlinkHref='#alive' transform='translate(14,42)' />
              <use xlinkHref='#alive' transform='translate(28,42)' />

              <use xlinkHref='#alive' transform='translate(42,42)' />
              <use xlinkHref='#dead' transform='translate(56,42)' />
            </g>
          </svg>
          <h1>{title}</h1>
        </div>
        <div>
          <Button
            primary
            size='small'
            onClick={onGenerate}
            label={generateDisplay}
          />
          <Button
            primary
            size='small'
            onClick={onSimulate}
            label={simulateDisplay}
          />
          <Button
            primary
            size='small'
            onClick={onRandomise}
            label={randomiseDisplay}
          ></Button>
          <Button
            primary
            size='small'
            onClick={onClear}
            label={clearDisplay}
          ></Button>
        </div>
      </div>
    </header>
  )
}

export default Actionbar
