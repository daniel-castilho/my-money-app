import React from "react";
import Grid from "../leiaute/grid";

export default (props) => {
	return (
		<Grid cols={props.cols}>
			<div className="form-group">
				<label htmlFor={props.name}>{props.label}</label>
				<input
					{...props.input}
					className="form-control"
					placeholder={props.placeholder}
					readOnly={props.readOnly}
					type={props.type}
                    minLength={props.min}
                    maxLength={props.max}
				/>
			</div>
		</Grid>
	);
};
