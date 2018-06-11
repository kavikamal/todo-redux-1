import React from "react";
import { Divider } from "semantic-ui-react";

import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Content />
        <Divider />
        <Footer />
      </React.Fragment>
    );
  }
}
