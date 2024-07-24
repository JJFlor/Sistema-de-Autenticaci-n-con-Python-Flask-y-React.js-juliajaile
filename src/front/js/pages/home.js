import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Signup } from "./component/Signup";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<Signup />
		</div>
	);
};
