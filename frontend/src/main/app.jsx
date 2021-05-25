import "../common/template/dependencies";
import React from "react";

import Header from "../common/template/header";
import SideBar from "../common/template/sideBar";
import Footer from "../common/template/footer";

export default (props) => {
	return (
		<div className="wrapper">
			<Header></Header>
            <SideBar></SideBar>
            <div className="content-wrapper">
                <h1>Conteudo</h1>
            </div>
            <Footer></Footer>
		</div>
	);
};
