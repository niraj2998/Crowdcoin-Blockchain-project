import {Button} from 'semantic-ui-react'
import Link from 'next/link'
import {useRouter} from 'next/router'

const CampaignRequestsList = () => {
  const router = useRouter();
  const {address} = router.query;
  console.log(address);
  return (
    <>
    <h1>Requests</h1>
    <Link href={`/campaigns/${address}/requests/new`}><a>
      <Button color='blue'>Create Request</Button>
      </a></Link>
    </>
  );
};

export default CampaignRequestsList;
