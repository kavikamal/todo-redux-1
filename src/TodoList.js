import React from "react";
import { Header, List } from "semantic-ui-react";
import { connect } from "react-redux";
const renderTodoItem = (todo, index) => {
  return (
    <List.Item key={index}>
      <List.Content>
        <List.Header>{todo.title}</List.Header>
        <List.Description>{todo.description}</List.Description>
      </List.Content>
    </List.Item>
  );
};
const TodoList = ({ todos }) => {
  return (
    <React.Fragment>
      <Header as="h1">Your Todo List</Header>
      <List divided relaxed>
        {todos.map((todo, index) => renderTodoItem(todo, index))}
      </List>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};
export default connect(mapStateToProps)(TodoList);
