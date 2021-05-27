import axios from "axios";
const BASE_URL = "http://localhost:3000/api";

export function getList() {
	const req = axios.get(`${BASE_URL}/billingCycles`);
	return {
		type: "BILLING_CYCLES_FETCHED",
		payload: req,
	};
}

export function create(values) {
	axios.post(`${BASE_URL}/billingCycles`, values);
	return {
		type: "BILLING_CYCLES_CREATE",
	};
}