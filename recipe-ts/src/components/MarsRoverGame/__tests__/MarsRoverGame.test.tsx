import { render as mount, screen } from '@testing-library/react'
import { DefaultMarsRoverGame } from '../MarsRoverGame.stories'

describe('MarsRoverKata', () => {
  test('should compile the component ready to start', async () => {
    mount(<DefaultMarsRoverGame />)
    await screen.findByText('Mars Rover Game')
  })
})
