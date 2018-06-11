import React from "react";
import { Menu } from "semantic-ui-react";
import Nav from "./Nav";
import TodoSummary from "./TodoSummary";
export default () => {
  return (
    <Menu>
      <Nav />
      <TodoSummary />
    </Menu>
  );
};
