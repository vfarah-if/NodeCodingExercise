import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import ListReducer, { ListReducerProps } from './ListReducer'

export default {
  title: 'Component/ListReducer',
  component: ListReducer,
} as Meta

export const DefaultListReducer: Story<ListReducerProps> = () => (
  <>
    <ListReducer />
  </>
)
