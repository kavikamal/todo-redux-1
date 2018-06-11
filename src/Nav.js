import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
export default () => {
  return (
    <React.Fragment>
      <Menu.Item as={Link} to="/todos">
        Todos
      </Menu.Item>
      <Menu.Item as={Link} to="/todos/new">
        Create Todo
      </Menu.Item>
    </React.Fragment>
  );
};
