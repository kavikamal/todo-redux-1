import React from "react";
import { connect } from "react-redux";

import { Form, Button } from "semantic-ui-react";
class TodoCreate extends React.Component {
  state = {
    todo: {
      description: ""
    }
  };
  onTitleChanged = e => {
    this.setState({
      todo: {
        ...this.state.todo,
        title: e.target.value
      }
    });
  };
  onDescriptionChanged = e => {
    this.setState({
      todo: {
        ...this.state.todo,
        description: e.target.value
      }
    });
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.dispatch({
      type: "TODO_CREATE",
      payload: this.state.todo
    });
    this.props.history.push("/todos");
  };
  render() {
    return (
      <React.Fragment>
        <h1>Create Todo</h1>
        <Form onSubmit={this.onSubmit}>
          <Form.Field>
            <label>Title</label>
            <input
              type="text"
              value={this.state.todo.title}
              onChange={this.onTitleChanged}
            />
          </Form.Field>
          <Form.Field>
            <label>Description</label>
            <textarea
              value={this.state.todo.description}
              onChange={this.onDescriptionChanged}
            />
          </Form.Field>
          <Button onClick={this.onSubmit}>Submit</Button>
        </Form>
      </React.Fragment>
    );
  }
}

export default connect()(TodoCreate);
