import React from "react";
import LayoutHeader from "./Header";
import { Container } from "semantic-ui-react";

const Layout = (props) => {
  return (
    <div>
      <Container>
        <LayoutHeader />
        <main>{props.children}</main>
      </Container>
    </div>
  );
};
export default Layout;
