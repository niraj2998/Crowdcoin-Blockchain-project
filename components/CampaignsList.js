import { Card } from "semantic-ui-react";
import { Button } from "semantic-ui-react";
import React from "react";
import { useRouter } from "next/router";
import Link from 'next/link'

const CampaignList = ({ campaigns }) => {
  console.log(campaigns);

  const router = useRouter();

  const renderCampaigns = () => {
    const items = campaigns.map((address) => {
      return {
        header: address,
        description: <Link href={`/campaigns/${address}`}><a> View Campaign </a></Link> ,
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
        onClick={() => {
          router.push("/campaigns/new");
        }}
        primary
      />
      {renderCampaigns()}
    </div>
  );
};

export default CampaignList;
