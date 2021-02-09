import querystring from "querystring";
const Web3 = require('web3');

var abi = require('./KUDIToken.json').abi
const {NODE_URL, FAUCET_PRIVATE_KEY, TOKEN_CONTRACT } = process.env;
const web3 = new Web3(NODE_URL);
const account = web3.eth.accounts.privateKeyToAccount(FAUCET_PRIVATE_KEY)
web3.eth.accounts.wallet.add(account);

exports.handler = async (event, context) => {
    // Only allow POST
    if (event.httpMethod !== "POST") {
        return {statusCode: 405, body: "Method Not Allowed"};
    }
        
        let contract = await new web3.eth.Contract(abi, TOKEN_CONTRACT);
    
        contract.mint(params.address, params.amount).send(account.address).on('transactionHash', function(hash){
            return {
                statusCode: 200,
                body: `Transaction announced: ${hash}`
            };
        })

};
