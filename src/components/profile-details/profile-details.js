import React from "react";

export default function ProfileDetails({ resource }) {
	const user = resource.user.read();
	return <h1>{user.name}</h1>
}