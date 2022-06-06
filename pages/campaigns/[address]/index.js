import { useRouter } from "next/router";

const CampaignByAddress = () => {
  const router = useRouter();
  const { address } = router.query

  return <h1>Welcome to campaign {address}</h1>;
};

export default CampaignByAddress;
