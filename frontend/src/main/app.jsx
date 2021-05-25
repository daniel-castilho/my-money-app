import "../common/template/dependencies";
import React from "react";

import Header from "../common/template/header";
import SideBar from "../common/template/sideBar";

export default (props) => {
	return (
		<div className="wrapper">
			<Header></Header>
            <SideBar></SideBar>
		</div>
	);
};
