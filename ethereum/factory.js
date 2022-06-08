import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";


const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x947F59abcE2AE3E338fc36ff92F3e99D983e5332'
);


export default instance;