import React from "react";
import factory from "../ethereum/factory";
import { Card } from "semantic-ui-react";
import { Button } from "semantic-ui-react";

function CampaignIndex({ campaigns }) {
  console.log("campaigns", campaigns);

  const renderCampaigns = () => {
    const items = campaigns.map((address) => {
      return {
        header: address,
        description: <a>View Campaign </a>,
        fluid: true,
      };
    });
    return <Card.Group items={items} />;
  };

  return <h1>{renderCampaigns()}
  <Button
  content="Create Campaign"
  icon="add circle"
  primary
   />
  </h1>;
}

//uses server side rendering to call the campaign contracts (so good for slow devices)
CampaignIndex.getInitialProps = async () => {
  const campaigns = await factory.methods.getDeployedCampaigns().call();
  return { campaigns };
};

export default CampaignIndex;
