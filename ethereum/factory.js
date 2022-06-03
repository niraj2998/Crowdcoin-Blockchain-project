import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";


const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xD4Cd58A4570Ed2057446D09c6F424A762D293d45'
);


export default instance;