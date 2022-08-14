import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'

import MarsRoverGame, { MarsRoverGameProps } from './MarsRoverGame'

export default { title: 'Component/MarsRoverKata' } as Meta

const Template: Story<MarsRoverGameProps> = args => <MarsRoverGame {...args} />

export const DefaultMarsRoverGame = Template.bind({})
DefaultMarsRoverGame.args = {}
