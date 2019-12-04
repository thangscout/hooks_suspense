import React, { useState } from "react";
import { fetchProfileData } from "../../helper";
import Profile from "../profile/profile";
import SuspenseContext from "../../context/suspense-context/suspense-context";

function getNextId(id) {
	return id === 3 ? 0 : id +1;
}

const initialResource = fetchProfileData(0);

export default function Dashboard() {
	const [resource, setResource] = useState(initialResource);

	return (
		<SuspenseContext.Provider value={resource}>
			<div className="content-wrap">
				<button onClick={() => {
					const nextUserId = getNextId(resource.userId);
					setResource(fetchProfileData(nextUserId));
				}}>
					Next
				</button>
				<Profile resource={resource}/>
			</div>
		</SuspenseContext.Provider>
	);
}