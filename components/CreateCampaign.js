import { Button, Checkbox, Form, Input } from "semantic-ui-react";
import { useState } from "react";
import factory from "../ethereum/factory";
import web3 from "../ethereum/web3";

const CreateCampaign = () => {
  const [minimumContribution, setMinimumContribution] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const accounts = await web3.eth.getAccounts();
    await factory.methods.createCampaign(minimumContribution).send({
      from: accounts[0],
    });
  };

  return (
    <>
      <h2 style={{ margin: "30px 0" }}>Create a Campaign</h2>
      <Form size="big" onSubmit={handleSubmit}>
        <Form.Field>
          <label style={{ margin: "10px 0" }}>
            Minimum Contribution{" "}
            <span
              style={{ marginLeft: "10px", color: "red", fontSize: "1rem" }}
            >
              * Minimum amount of Wei people should contribute for your campaign
            </span>
          </label>
          <Input
            value={minimumContribution}
            onChange={(event) => {
              setMinimumContribution(event.target.value);
            }}
            label="wei"
            labelPosition="right"
          />
        </Form.Field>
        <Button size="medium" primary>
          Create!
        </Button>
      </Form>
    </>
  );
};

export default CreateCampaign;
