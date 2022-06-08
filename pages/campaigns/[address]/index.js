// import { useRouter } from "next/router";
import Campaign from "../../../ethereum/campaign";
import CampaignDetails from "../../../components/campaignDetails";
import ContributeForm from "../../../components/ContributeForm";
import styles from './address.module.css'

const CampaignShow = ({
  address,
  minimumContribution,
  balance,
  requestsCount,
  approversCount,
  manager,
}) => {
  return (
    <>
      <h2>Campaign Details</h2>
      <div className={styles.container}>
        <CampaignDetails
          address={address}
          minimumContribution={minimumContribution}
          balance={balance}
          requestsCount={requestsCount}
          approversCount={approversCount}
          manager={manager}
        />

        <ContributeForm address={address}/>
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  const { address } = context.query;
  
  const campaign = Campaign(address);
  const summary = await campaign.methods.getSummary().call();

  return {
    props: {
      address: address,
      minimumContribution: summary[0],
      balance: summary[1],
      requestsCount: summary[2],
      approversCount: summary[3],
      manager: summary[4],
    },
  };
}

export default CampaignShow;
