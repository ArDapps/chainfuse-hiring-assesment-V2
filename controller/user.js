var jwt = require("jsonwebtoken");
const UserService = require("../service/user");
const MetaMaskSDK = require("@metamask/sdk");

// const config = require("../config");
const sdk = new MetaMaskSDK({
  shouldShimWeb3: false,
  showQRCode: true,
});

const ethereum = sdk.getProvider();
const signUp = async (req, res) => {};

const logIn = async (req, res) => {};

const updateProfile = async (req, res) => {};

module.exports = {
  signUp,
  logIn,
  updateProfile,
};
