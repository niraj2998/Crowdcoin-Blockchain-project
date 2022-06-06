import { Button, Form, Input, Message } from "semantic-ui-react";
import { useState } from "react";
import factory from "../ethereum/factory";
import web3 from "../ethereum/web3";
import {useRouter} from "next/router"

const CreateCampaign = () => {
  const [fields, setFields] = useState({
    minimumContribution: "",
    errorMessage: "",
    loading: false
  });
  // const [errorMessage, setErrorMessage] = useState("");

  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFields((prev) => {
      return {...prev, loading: true, errorMessage: ""}
    });
    try{
      const accounts = await web3.eth.getAccounts();
      await factory.methods.createCampaign(fields.minimumContribution).send({
        from: accounts[0],
      });
      router.push('/');
    }
    catch (err){
      setFields((prev) => {
        return {...prev, errorMessage:`Error: ${err.message}`};
      })
    }
    setFields(prev => {
      return {...prev, loading: false}
    })
  };

  return (
    <>
      <h2 style={{ margin: "30px 0" }}>Create a Campaign</h2>
      <Form size="big" onSubmit={handleSubmit} error={!!fields.errorMessage}>
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
            value={fields.minimumContribution}
            onChange={(event) => {
              setFields((prev) => {
                return {...prev, minimumContribution:`${event.target.value}`};
              });
            }}
            label="wei"
            labelPosition="right"
          />
        </Form.Field>
        <Message error header="Oops!" content={fields.errorMessage} />
        <Button loading={fields.loading}  size="medium" primary>
          Create!
        </Button>
      </Form>
    </>
  );
};

export default CreateCampaign;
