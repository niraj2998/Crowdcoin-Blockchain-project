import CampaignRequestsList from "../../../../components/CampaignRequestsList";
import Campaign from "../../../../ethereum/campaign";
import web3 from "../../../../ethereum/web3";

const RequestsDetails = ({
  address,
  requests,
  requestCount,
  approversCount,
}) => {


  return (
    <CampaignRequestsList
      address={address}
      requests={requests}
      requestCount={requestCount}
      approversCount={approversCount}
    />
  );
};

export async function getServerSideProps(context) {
  const { address } = context.query;
  const campaign = Campaign(address);
  const requestCount = await campaign.methods.getRequestCount().call();
  const approversCount = await campaign.methods.approversCount().call();

  const requests = await Promise.all(
    Array(parseInt(requestCount))
      .fill()
      .map((element, index) => {
        return campaign.methods.requests(index).call();
      })
  );

  return {
    props: {
      address: address,
      requests: JSON.stringify(requests),
      requestCount: requestCount,
      approversCount: approversCount,
    },
  };
}

export default RequestsDetails;
