export const initialState = {
  loaded: false,
  loading: true,
  data: [{ label: 'Eat Pizza', complete: false }],
};

export function reducer(
  state = initialState,
  action: { type: string; payload: any },
) {
  console.log('reducer', state, action);
  switch (action.type) {
    case 'ADD_TODO': {
      const todo = action.payload;
      const data = [...state.data, todo];
      return {
        ...state,
        data,
      };
    }
  }
  return state;
}
