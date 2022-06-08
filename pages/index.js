import React from "react";
import factory from "../ethereum/factory";
import CampaignList from "../components/CampaignsList";

function CampaignIndex({ campaigns }) {
  // console.log("campaigns", campaigns);

  return <CampaignList campaigns={campaigns} />;
}

//uses server side rendering to call the campaign contracts (so good for slow devices)
export async function getServerSideProps(context) {
  const campaigns = await factory.methods.getDeployedCampaigns().call();
  // console.log(campaigns);
  return {
    props: { campaigns },
  };
}

export default CampaignIndex;
