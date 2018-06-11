const initialState = {
  todos: []
};
const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TODO_CREATE":
      const newState = {
        ...state
      } // get a fresh copy of the state, so we don't accidentally modify it
      
      const newTodo = action.payload;
      newState.todos = [
        ...state.todos,
        {
          title: newTodo.title,
          description: newTodo.description
        }
      ]
      return newState
      break;
  }
  return state;
};

export default todosReducer;
