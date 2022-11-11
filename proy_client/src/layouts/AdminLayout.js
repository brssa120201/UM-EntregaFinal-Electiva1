import { GithubOutlined } from "@ant-design/icons";
import { Layout } from "antd";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import MenuSider from "../components/MenuComponents/MenuSider";
import MenuTop from "../components/MenuComponents/MenuTop";
import SignIn from "../pages/Admin/SignIn/SignIn";

import "./AdminLayout.scss";

export default function AdminLayout(props) {
	const [menuCollapsed, setMenuCollapsed] = useState(false);
	const { Header, Content, Footer } = Layout;
	const { children } = props;
	const user = null;
	/* const location = useLocation(); */
	if (!user) {
		return (
			<>
				<SignIn />
				<Routes>
					<Route path="/admin/login/*" element={<SignIn />} />
				</Routes>
			</>
		);
	}
	return (
		<Layout>
			<MenuSider menuCollapsed={menuCollapsed} />
			<Layout
				className="layout-admin"
				style={{ marginLeft: menuCollapsed ? "80px" : "200px" }}
			>
				<Header className="layout-admin__header">
					<MenuTop 
						menuCollapsed={menuCollapsed}
						setMenuCollapsed={setMenuCollapsed}
					/>
				</Header>
				<Content className="layout-admin__content">{children}</Content>
				<Footer className="layout-admin__footer">
					<GithubOutlined style={{ fontSize: "17px "}} /> BrissaH
				</Footer>
			</Layout>
		</Layout>
	);
}