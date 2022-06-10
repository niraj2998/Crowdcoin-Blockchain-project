import { Button, Table } from "semantic-ui-react";
import Link from "next/link";
import RequestRow from "./RequestRow";

const CampaignRequestsList = ({
  address,
  requests,
  requestCount,
  approversCount,
  onApprove,
  onFinalize,
}) => {
  const { Header, Row, HeaderCell, Body } = Table;
  const requestsAre = JSON.parse(requests);

  return (
    <>
      <h1>Requests</h1>
      <Link href={`/campaigns/${address}/requests/new`}>
        <a>
          <Button color="blue" primary floated="right" style={{marginBottom: 10}}>Create Request</Button>
        </a>
      </Link>
      <Table>
        <Header>
          <Row>
            <HeaderCell>ID</HeaderCell>
            <HeaderCell>Description</HeaderCell>
            <HeaderCell>Amount</HeaderCell>
            <HeaderCell>Recipient</HeaderCell>
            <HeaderCell>Approval Count</HeaderCell>
            <HeaderCell>Approve</HeaderCell>
            <HeaderCell>Finalize</HeaderCell>
          </Row>
        </Header>
        <Body>
          {requestsAre.map((request, index) => {
            return (
              <RequestRow
                id={index}
                key={index}
                request={request}
                address={address}
                approversCount={approversCount}
              />
            );
          })}
        </Body>
      </Table>
      <div>Found {requestCount} requests.</div>
    </>
  );
};

export default CampaignRequestsList;
