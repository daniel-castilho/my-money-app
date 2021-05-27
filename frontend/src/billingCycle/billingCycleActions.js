import axios from "axios";
import { toastr } from "react-redux-toastr";
import { reset as resetForm, initialize } from "redux-form";
import { showTabs, selectTab } from "../common/tab/tabActions";
import billingCycle from "./billingCycle";

const BASE_URL = "http://localhost:3000/api";
const INITIAL_VALUES = {};

export function getList() {
	const req = axios.get(`${BASE_URL}/billingCycles`);
	return {
		type: "BILLING_CYCLES_FETCHED",
		payload: req,
	};
}

export function create(values) {
	return (dispatch) => {
		axios.post(`${BASE_URL}/billingCycles`, values)
			.then((res) => {
				toastr.success("Sucesso", "Operação Realizada com Sucesso");
				dispatch(init());
			})
			.catch((e) => {
				e.response.data.errors.forEach((error) =>
					toastr.error("Erro", error)
				);
			});
	};
}

export function showUpdate(billingCycle) {
	return [
		selectTab("tabUpdate"),
		showTabs("tabUpdate"),
		initialize("billingCycleForm", billingCycle),
	]
}

export function init() {
	return [
		showTabs("tabList", "tabCreate"),
		selectTab("tabList"),
		getList(),
		initialize('billingCycleForm', INITIAL_VALUES),
	]
}