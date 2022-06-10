import { Form, Button, Message, Input } from "semantic-ui-react";
import Campaign from "../ethereum/campaign";
import web3 from "../ethereum/web3";
import { useRouter } from "next/router";
import { useState } from "react";
import Link from 'next/link'

const NewRequestForm = () => {
  const [data, setData] = useState({
    expense: "",
    description: "",
    recipient: "",
  });

  const [fields, setFields] = useState({
    errorMessage: "",
    loading: false,
  });

  const router = useRouter();
  const { address } = router.query;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFields({ loading: true, errorMessage: "" });
    const campaign = Campaign(address);
    const { description, expense, recipient } = data;
    try {
      const accounts = await web3.eth.getAccounts();
      await campaign.methods
        .createRequest(
          description,
          web3.utils.toWei(expense, "ether"),
          recipient
        )
        .send({
          from: accounts[0],
        });
        router.push(`/campaigns/${address}/requests`)
    } 
    catch (error) {
      setFields((prev) => {
        return { ...prev, errorMessage: `${error.message}` };
      });
    }
    setFields((prev) => {
      return { ...prev, loading: false };
    });
  };

  return (
    <>
      <Link href={`/campaigns/${address}/requests`}><a>
        Back
        </a></Link>
      <h3>Create a Request</h3>
      <Form onSubmit={handleSubmit} error={!!fields.errorMessage}>
        <Form.Field>
          <label>Description</label>
          <Input
            value={data.description}
            onChange={(event) => {
              setData((prev) => {
                return { ...prev, description: `${event.target.value}` };
              });
            }}
          />
        </Form.Field>
        <Form.Field>
          <label>Expense [Ether]</label>
          <Input
            value={data.expense}
            onChange={(event) => {
              setData((prev) => {
                return { ...prev, expense: `${event.target.value}` };
              });
            }}
          />
        </Form.Field>
        <Form.Field>
          <label>Recipient</label>
          <Input
            value={data.recipient}
            onChange={(event) => {
              setData((prev) => {
                return { ...prev, recipient: `${event.target.value}` };
              });
            }}
          />
        </Form.Field>
        <Message error header="Oops!" content={`${fields.errorMessage}`} />
        <Button loading={fields.loading} color="blue">
          Create
        </Button>
      </Form>
    </>
  );
};

export default NewRequestForm;
