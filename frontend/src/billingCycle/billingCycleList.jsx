import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class BillingCycleList extends Component {
	render() {
		return (
			<div>
				<table className="table">
					<thead>
						<tr>
							<th>Nome</th>
							<th>Mês</th>
							<th>Ano</th>
						</tr>
					</thead>
					<tbody></tbody>
				</table>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({ list: state.list });

export default connect(mapStateToProps)(BillingCycleList);
