const express = require("express");
const router = express.Router();

require("./fiat")(router);
require("./litecoin")(router);
require("./walletConnect")(router);

module.exports = router;
