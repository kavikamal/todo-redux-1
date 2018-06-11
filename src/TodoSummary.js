import React from "react";
import { Menu } from "semantic-ui-react";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'
const TodoSummary = ({ todos }) => {
  return <Menu.Item position="right">You have {todos.length} todos</Menu.Item>;
};
const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};
export default withRouter(connect(mapStateToProps)(TodoSummary));
