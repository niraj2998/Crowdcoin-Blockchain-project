const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);

const campaignPath = path.resolve(__dirname, 'contracts', 'Campaign.sol');
const source = fs.readFileSync(campaignPath, 'utf-8');
const output = solc.compile(source, 1).contracts;

fs.ensureDirSync(__dirname);

console.log(output);
for (let contract in output){
    fs.outputJSONSync(
        path.resolve(buildPath, contract.replace(':','') + '.json'),
        output[contract]
    );
}