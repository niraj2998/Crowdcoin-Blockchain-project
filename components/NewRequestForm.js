import { Form, Button, Message, Input } from "semantic-ui-react";
import Campaign from "../ethereum/campaign";
import web3 from "../ethereum/web3";
import { useRouter } from "next/router";
import { useState } from "react";

const NewRequestForm = () => {
  const [data, setData] = useState({
    expense: "",
    description: "",
    recipient: "",
  });

  const router = useRouter();
  const { address } = router.query;

  const handleSubmit = async (event) => {
    event.preventDefault();
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
    } catch (error) {}
  };

  return (
    <>
      <h1>Create a Request</h1>
      <Form onSubmit={handleSubmit}>
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
        <Button color="blue">Create</Button>
      </Form>
    </>
  );
};

export default NewRequestForm;
