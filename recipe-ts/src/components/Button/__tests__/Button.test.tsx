import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import {
  PrimaryButton,
  SecondaryButton,
  LargeButton,
  SmallButton,
  LabellessButton,
} from '../Button.stories'

describe('Button', () => {
  test('should create a primary button', () => {
    const { container } = render(
      <PrimaryButton
        primary={PrimaryButton.args?.primary}
        label={PrimaryButton.args?.label || ''}
      />
    )

    expect(screen.getByRole('button')).toHaveTextContent('Button')
    expect(container.querySelector('button')).toMatchSnapshot()
  })

  test('should create a default medium secondry button', () => {
    const { container } = render(
      <SecondaryButton label={SecondaryButton.args?.label || ''} />
    )

    expect(container.querySelector('button')).toMatchSnapshot()
  })

  test('should create a large secondry button', () => {
    const { container } = render(
      <LargeButton
        size={LargeButton.args?.size}
        label={LargeButton.args?.label || ''}
      />
    )

    expect(container.querySelector('button')).toMatchSnapshot()
  })

  test('should create a small secondry button', () => {
    const { container } = render(
      <SmallButton
        size={SmallButton.args?.size}
        label={SmallButton.args?.label || ''}
      />
    )

    expect(container.querySelector('button')).toMatchSnapshot()
  })

  test('should create a yellow labeless button', () => {
    const { container } = render(
      <LabellessButton
        label={LabellessButton.args?.label || ''}
        style={{ backgroundColor: 'yellow' }}
      />
    )

    expect(container.querySelector('button')).toMatchSnapshot()
  })
})
