import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";

import TodoCreate from "./TodoCreate";
import TodoList from "./TodoList";
export default () => {
  return (
    <Container>
      <Switch>
        <Redirect exact from="/" to="/todos" />
        <Route exact path="/todos" component={TodoList} />
        <Route exact path="/todos/new" component={TodoCreate} />
      </Switch>
    </Container>
  );
};
