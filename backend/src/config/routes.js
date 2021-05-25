const express = require("express");
const server = express();

module.exports = (server) => {
	// API Routes
	const router = express.Router();
	server.use("/api", router);

	// TODO Routes
	const BillingCycle = require("../api/billingCycle/billingCycleService");
	BillingCycle.register(router, "/billingCycles");
};
