const detectEthereumProvider = require("@metamask/detect-provider");
const MetaMaskSDK = require("@metamask/sdk");

// const config = require("../config");

//NOTE
/*
  THE CONNECT WALLET ONLY WORK WITH WINDOW AND THIS SHOULD BE AT FRONT END MAY BE THIS WILL NEED TO ADD TO FRONT END NOT AT SERVEER
 */
const connectWithMetaMask = async (req, res) => {
  try {
    const provider = await detectProvider();

    if (!provider) {
      throw new Error("MetaMask not found");
    }

    const accounts = await provider.request({ method: "eth_requestAccounts" });
    const accountAddress = accounts[0];
    try {
      //Can send it to User Login db
    } catch (error) {
      res.status(404).send(`Error save data: ${error.message}`);
    }

    res
      .status(200)
      .send(`YOU ARE NOW CONNECT METAMASK WITH : ${accountAddress}`);
  } catch (error) {
    res.status(404).send(`Error connecting MetaMask: ${error.message}`);
  }
};
const connectWithMetaMaskWTHSDK = async (req, res) => {
  const sdk = new MetaMaskSDK({
    shouldShimWeb3: false,
    showQRCode: true,
  });

  const ethereum = sdk.getProvider();

  try {
    const accounts = await ethereum.request({
      method: "eth_requestAccounts",
      params: [],
    });
    res.status(200).send(`YOU ARE NOW CONNECT METAMASK WITH : ${accounts[0]}`);
  } catch (error) {
    res.status(404).send(`Error connecting MetaMask: ${error.message}`);
  }
};
module.exports = {
  connectWithMetaMask,
};
