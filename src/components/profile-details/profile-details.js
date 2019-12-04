import React, { useContext } from "react";
import SuspenseContext from "../../context/suspense-context/suspense-context";

export default function ProfileDetails() {
	const resource = useContext(SuspenseContext);
	const user = resource.user.read();
	return <h1>{user.name}</h1>
}