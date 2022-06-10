import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";


const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x8671B18aeA27bf2c4ef6C01583474120C77B22De'
);


export default instance;