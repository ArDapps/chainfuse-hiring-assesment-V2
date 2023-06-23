const walletConnectController = require("../controller/walletsConnect");

module.exports = (router) => {
  router.get(
    "/connectwithmetamask",
    walletConnectController.connectWithMetaMask
  );
};
