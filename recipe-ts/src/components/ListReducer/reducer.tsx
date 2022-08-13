export type ACTIONTYPE =
  | { type: 'newItemChange'; payload: string }
  | { type: 'add' }

export const initialState = {
  newItem: '',
  items: new Array<string>(),
}

export const reducer = (state: typeof initialState, action: ACTIONTYPE) => {
  switch (action.type) {
    case 'newItemChange':
      return {
        ...state,
        newItem: action.payload,
      }
    case 'add':
      return {
        items: state.items.concat([state.newItem]),
        newItem: '',
      }
  }
}
