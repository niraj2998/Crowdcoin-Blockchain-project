import React from "react";
import { Card, Button } from "semantic-ui-react";
import web3 from "../ethereum/web3";
import Link from 'next/link';

const CampaignDetails = ({
  address,
  minimumContribution,
  balance,
  requestsCount,
  approversCount,
  manager,
}) => {
  console.log(address);
  const items = [
    {
      id: 1,
      header: manager,
      meta: "Address of Manager",
      description:
        "The manager created this campaign and can requests to withdraw money",
      style: { overflowWrap: "break-word" },
    },
    {
      id: 2,
      header: minimumContribution,
      meta: "Minimum Contribution (wei)",
      description:
        "You must contribute atleast this much wei to become  an approver",
    },
    {
      id: 3,
      header: requestsCount,
      meta: "Number of Requests",
      description:
        "A request tries to withdraw money from the contract. Requests must be approved by the approvers",
    },
    {
      id: 4,
      header: approversCount,
      meta: "Number of Approvers",
      description: "Number of people who have already donated to this campaign",
    },
    {
      id: 5,
      header: web3.utils.fromWei(balance, "ether"),
      meta: "Campaign Balance (Ether)",
      description:
        "This balance is how much money this campaign has left to spend.",
    },
  ];

  return (
      <Card.Group>
        {items.map((item) => {
          return (
            <Card
              key={item.id}
              color="blue"
              header={item.header}
              meta={item.meta}
              description={item.description}
              style={item.style}
            />
          );
        })}
        <Link href={`/campaigns/${address}/requests`}><a>
          <Button style={{margin: '35px 0px 0px 55px', fontSize: '2rem', padding: '10px'}}  color='blue'>Requests</Button>
          </a></Link>
      </Card.Group>
  );
};

export default CampaignDetails;
