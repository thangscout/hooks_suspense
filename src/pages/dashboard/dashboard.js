import React, { useState } from "react";
import { fetchProfileData } from "../../helper";
import Profile from "../profile/profile";

function getNextId(id) {
	return id === 3 ? 0 : id +1;
}

const initialResource = fetchProfileData(0);

export default function Dashboard() {
	const [resource, setResource] = useState(initialResource);

	let style = {
		margin: "0 auto",
		width: "50%",
		padding: "5rem"
	}

	return (
		<div style={style}>
			<button onClick={() => {
				const nextUserId = getNextId(resource.userId);
				setResource(fetchProfileData(nextUserId));
			}}>
				Next
			</button>
			<Profile resource={resource}/>
		</div>
	);
}