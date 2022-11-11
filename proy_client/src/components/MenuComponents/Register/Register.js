import React, { useState } from "react";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Form, Input, Button, Checkbox, notification } from "antd";
import "./Register.scss";
import { editableInputTypes } from "@testing-library/user-event/dist/utils";

export default function RegisterForm() {
	const [inputs, setInputs] = useState({
		email: false,
		password: "",
		repeatPassword: "",
		privacyPolicy: false,
	});
  
	const changeForm = (e) => {
		if(e.target.name === "privacyPolicy") {
			setInputs({
				...inputs,
				[e.target.name]: e.target.checked,
			});
		} else {
			setInputs({
				...inputs,
				[e.target.name]: e.target.value,
			});
		}
	};
  
	return (
		<Form className="register-form" onChange={changeForm}>
			<Form.Item>
				<Input 
					prefix={
            <UserOutlined />
          }
          type="email"
          name="email"
          placeholder="Correo Electronico"
          className="register-form__input"
          value={inputs.email}
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
          className="register-form__input"
          value={inputs.password}
				/>
      </Form.Item>
      <Form.Item>
        <Input 
					prefix={
            <UserOutlined />
          }
          type="password"
          name="repeatPassword"
          placeholder="Repetir contraseña"
          className="register-form__input"
          value={inputs.repeatPassword}
				/>
      </Form.Item>
      <Form.Item>
        <Checkbox name="privacyPolicy" checked={inputs.privacyPolicy} >
          He leido y acepto la politica de privacidad
        </Checkbox>
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" className="register-form__button">
          Crear cuenta
        </Button>
      </Form.Item>
		</Form>
	);
}