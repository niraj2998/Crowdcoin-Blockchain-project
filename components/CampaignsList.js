import { Card } from "semantic-ui-react";
import { Button } from "semantic-ui-react";
import React from "react";

const CampaignList = ({ campaigns }) => {
  console.log(campaigns);
  const renderCampaigns = () => {
    const items = campaigns.map((address) => {
      return {
        header: address,
        description: <a>View Campaign</a>,
        fluid: true,
      };
    });
    return <Card.Group items={items} />;
  };

  return (
    <div>
      <h3>Open Campaigns</h3>
      <Button
        floated="right"
        content="Create Campaign"
        icon="add circle"
        primary
      />
      {renderCampaigns()}
    </div>
  );
};

export default CampaignList;
