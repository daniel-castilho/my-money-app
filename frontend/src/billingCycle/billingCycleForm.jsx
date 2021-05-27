import React, { Component } from "react";
import { reduxForm, Field, formValueSelector } from "redux-form";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import { init } from './billingCycleActions'
import LabelAndInput from "../common/form/labelAndInput";
import CreditList from "./creditList";

class BillingCycleForm extends Component {
	render() {
		const { handleSubmit, readOnly, credits } = this.props;
		return (
			<form role="form" onSubmit={handleSubmit}>
				<div className="box-body">
					<Field name="name" component={LabelAndInput} label="Nome" cols="12 4" placeholder="Informe o nome" readOnly={readOnly} />
					<Field name="month" component={LabelAndInput} label="Mês" cols="12 4" placeholder="Informe o mês" type="number" min="1" max="12" readOnly={readOnly} />
					<Field name="year" component={LabelAndInput} label="Mês" cols="12 4" placeholder="Informe o mês" type="number" min="1970" max="2100" readOnly={readOnly} />
					<CreditList cols="12 6" readOnly={readOnly} list={credits} />
				</div>
				<div className="box-footer">
					<button type="submit" className={`btn btn-${this.props.submitClass}`}>
						{this.props.submitLabel}
					</button>
					<button type="button" className="btn btn-default" onClick={this.props.init}>
						Cancelar
					</button>
				</div>
			</form>
		);
	}
}

BillingCycleForm = reduxForm({ form: "billingCycleForm", destroyOnUnmount: false })(BillingCycleForm);
const selector = formValueSelector('billingCycleForm');

const mapStateToProps = state => ({credits: selector(state, 'credits')});
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm)
