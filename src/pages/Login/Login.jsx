import { useRef, useState, useEffect, useContext } from 'react';
import React from "react";
import { Section, ContainerLogin, H1, Input, TextoRe, TextoBtn } from './someStyle'
import { ImageFondo, DesignRectangle, DesignCicle1, DesignCicle2, DesignCicle3, DesignCicle4, Background, StyledLink } from './someStyle'
import Sidebar from "../../components/SideBar/Sidebar";

const Login = () => {

	const userRef = useRef();
	const errRef = useRef();

	const [user, setUser] = useState('');
	const [password, setPassword] = useState('');
	const [errMsg, setErrMsg] = useState('');
	const [success, setSuccess] = useState(false);
	const isEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

	useEffect(() => {
		userRef.current.focus();
	}, [])

	useEffect(() => {
		setErrMsg('');
	}, [user, password])

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (user === '' && password === '') {
			setErrMsg("Favor de ingresar correo y contraseña");
		}
		else if (!isEmail.test(user)) {
			setErrMsg("Correo Invalido")
		}
		else if (password === '') {
			setErrMsg("ingresar contraseña");
		}
		else {
			console.log("API TEST")
			console.log(user);
			console.log(password);
			await fetch("http://127.0.0.1:5013/api/login", {
				method: "POST",
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					email: user,
					password: password
				}),
			})
				.then((response) => {
					if (response.status === 400) {
						setErrMsg('Correo o contraseña incorrectos');
					} else if (response.status === 201) {
						setUser('');
						setPassword('');
						setSuccess(true);
					}
					return response.json();
				})
		}
	}
	return (
		<>
			{success ? (
				<>
					<Sidebar />
				</>
			) : (
				<Section>
					<ContainerLogin>
						<p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
						<H1>Iniciar Sesión</H1>
						<Input
							type="text"
							id="email"
							ref={userRef}
							autoComplete="off"
							onChange={(e) => setUser(e.target.value)}
							value={user}
							required
							placeholder="Enter E-mail" />
						<br />
						<br />
						<Input
							type="password"
							id="password"
							onChange={(e) => setPassword(e.target.value)}
							value={password}
							required
							placeholder="•••••••••••" />
						<br />
						<TextoRe href="$">Recuperar contraseña?</TextoRe>
						<br />
						<TextoBtn onClick={handleSubmit}>Sign In</TextoBtn>
					</ContainerLogin>
					<ImageFondo />
					<DesignRectangle />
					<DesignCicle1 />
					<DesignCicle2 />
					<DesignCicle3 />
					<DesignCicle4 />
					<Background />
				</Section>
			)}
		</>
	);
}

export default Login