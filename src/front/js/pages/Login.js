import React, { useState, useEffect, useContext } from "react";
import { useNavigate} from "react-router-dom";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

import { Context } from "../store/appContext";

export const Login = () => {
	const { store, actions } = useContext(Context);
	const[email, setEmail] = useState('');
	const[password, setPassword] = useState('')
	const navigate = useNavigate();

	const logIn = async (email, password) =>{
		await actions.logIn(email, password);
		navigate('/private');
	}

	return (
		<div className="container">
			<div className="container">
				<div className="d-flex flex-column signUp-card w-50">
					<div className="p-4">
						<h1 className="display-4 jaro-h1">Log in</h1>
						<div>
							<div className="form-group mt-2">
								<label><MdOutlineAlternateEmail /></label>
								<input type="email" className="form-control" placeholder="Enter your email" />
							</div>
							<div className="form-group mt-2">
								<label><RiLockPasswordLine /></label>
								<input type="password" className="form-control" placeholder="Enter your password" />
							</div>
							<button onSubmit={()=> logIn(email, password)} type="submit" className="btn btn-primary w-100 mt-4 shadow-lg">Get logged in!</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};