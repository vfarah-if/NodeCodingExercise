import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ListReducer from '../ListReducer'
import { initialState, reducer } from '../reducer'

describe('List', () => {
  const item1 = 'TODO 1: Add the first item'
  const item2 = 'TODO 2: Add the second item'

  test('should add one item into the list', async () => {
    const component = render(<ListReducer />)
    const input = (await component.findByPlaceholderText(
      'Enter new item'
    )) as HTMLInputElement
    editValue(input, item1)

    await submitAddButton(component)

    const listItem = await component.findByText(item1)
    expect(listItem).toMatchSnapshot()
  })

  test('should clear the list after adding another item', async () => {
    const component = render(<ListReducer />)
    const input = (await component.findByPlaceholderText(
      'Enter new item'
    )) as HTMLInputElement

    editValue(input, item1)
    await submitAddButton(component)
    expect(input.value).toBe('')

    editValue(input, item2)
    await submitAddButton(component)
    expect(input.value).toBe('')

    const listItem = await component.findByText(item2)
    expect(listItem).toMatchSnapshot()
    expect(component.container).toMatchSnapshot('both items')
  })

  // REMARKS: Not needed but a good example using the reducer direct when test driving the development
  test('should show an example of testing the reducer direct as an example', async () => {
    let state = reducer(initialState, {
      type: 'newItemChange',
      payload: item1,
    })
    expect(state.newItem).toBe(item1)
    expect(state.items.length).toBe(0)

    state = reducer(state, { type: 'add' })
    expect(state.newItem).toBe('')
    expect(state.items.length).toBe(1)
    expect(state.items[0]).toBe(item1)
  })
})

async function submitAddButton(component: any) {
  const form = await component.findByTestId('form')
  expect(form).toBeDefined()
  fireEvent.submit(form)
}

function editValue(input: HTMLInputElement, value: string) {
  expect(input).toBeDefined()
  fireEvent.change(input, {
    target: { value },
  })
  expect(input.value).toBe(value)
}
