export const addIdea = (idea) => ({
  type: 'ADD_IDEA',
  payload: {
    idea
  }
})

export const deleteIdea = (id) => ({
  type: 'DELETE_IDEA',
  payload: {
    id
  }
})