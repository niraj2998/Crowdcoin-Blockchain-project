import { Menu, Header, Segment } from "semantic-ui-react";

const colors = ["blue"];

const LayoutHeader = () => {
  return (
    <Menu style={{ marginTop: "10px" }}>
      <Segment inverted style={{ marginBottom: "00px" }}>
        <Menu.Item>
          <Header as="h3" inverted color="blue">
            CrowdCoin
          </Header>
        </Menu.Item>
      </Segment>
      <Menu.Menu position="right">
        <Menu.Item>
          <Header as="h4">Campaigns</Header>{" "}
        </Menu.Item>
        <Menu.Item>+</Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default LayoutHeader;
