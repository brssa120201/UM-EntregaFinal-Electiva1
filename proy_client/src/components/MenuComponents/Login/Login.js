import { Button, Form } from "antd";
import Input from "rc-input";
import React from "react";
import { UserOutlined } from "@ant-design/icons";

import "./Login.scss";

export default function Login() {
	return (
		<Form className="login-form">
			<Form.Item>
				<Input 
					prefix={
						<UserOutlined />
					}
						type="email"
						name="email"
						placeholder="Correo Electronico"
						className="login-form__input"
				/>
			</Form.Item>
			<Form.Item>
				<Input 
					prefix={
						<UserOutlined />
					}
						type="password"
						name="password"
						placeholder="Contraseña"
						className="login-form__input"					
				/>
			</Form.Item>
			<Form.Item>
				<Button htmlType="submit" className="login-form__button">
					Entrar
				</Button>
			</Form.Item>
		</Form>
	);
}
