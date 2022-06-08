import { Form, Input, Message, Button } from "semantic-ui-react";
import { useState } from "react";
import Campaign from '../ethereum/campaign'
import web3 from "../ethereum/web3";
import {useRouter} from 'next/router'

const ContributeForm = ({address}) => {
  const [fields, setFields] = useState({
    contributionValue: '',
    errorMessage:'',
    loading: false
  })
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const campaign = Campaign(address);

    setFields((prev) => {
      return {...prev, loading: true, errorMessage: ''}
    })

    try{
      const accounts = await web3.eth.getAccounts();
      await campaign.methods.contribute().send({
        from: accounts[0],
        value: web3.utils.toWei(fields.contributionValue, 'ether')
      })
      router.replace(`/campaigns/${address}`);
    }
    catch(err){
      setFields(prev => {
        return {...prev, errorMessage: err.message}
      })
    }
    setFields(prev => {
      return {...prev, loading: false, contributionValue: ''}
    })
  }

  return(
    <>
    <Form onSubmit={handleSubmit} error={!!fields.errorMessage}>
      <Form.Field>
        <label>Amount to Contribute</label>
        <Input value={fields.contributionValue} onChange={event => {
          setFields(prev => {
            return {...prev, contributionValue:`${event.target.value}`}
          })
        }} label="ether" labelPosition="right" />
      </Form.Field>
      <Message error header="Oops!" content={fields.errorMessage} />
      <Button loading={fields.loading} primary>Contribute</Button>
    </Form>
  </>
  );
};

export default ContributeForm;
