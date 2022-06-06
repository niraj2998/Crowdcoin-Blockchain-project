import { Menu, Header, Segment } from "semantic-ui-react";
import Link from "next/link";

const colors = ["blue"];

const LayoutHeader = () => {
  return (
    <Menu style={{ marginTop: "10px" }}>
      <Segment inverted style={{ marginBottom: "00px" }}>
        <Link href="/"><a style={{ cursor: "pointer" }} className="item">
          <Header as="h3" inverted color="blue">
              CrowdCoin
          </Header>
          </a></Link>
      </Segment>
      <Menu.Menu position="right">
        <Link href="/"><a style={{ cursor: "pointer" }} className="item">
          <Header as="h4">
              Campaigns
          </Header>
          </a></Link>
        <Link href="/campaigns/new"><a style={{ cursor: "pointer" }} className="item">
            +
          </a></Link>
      </Menu.Menu>
    </Menu>
  );
};

export default LayoutHeader;
