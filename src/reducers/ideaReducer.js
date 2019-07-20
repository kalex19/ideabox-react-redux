export const ideaReducer = (state = [], action) => {
  const {
    type,
    payload
  } = action
  switch (type) {
    case 'ADD_IDEA':
      return [...state, payload.idea];
    case 'DELETE_IDEA':
      return state.filter(idea => idea.id !== payload.id);
    default:
      return state
  }
}