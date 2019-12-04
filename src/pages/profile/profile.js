import React, { Suspense} from "react";
import ProfileDetails from "../../components/profile-details/profile-details";
import ProfileTimeline from "../../components/profile-timeline/profile-timeline";

export default function Profile() {
	return (
		<Suspense fallback={<h1>Loading profile ...</h1>}>
			<ProfileDetails />
			<Suspense fallback={<h3>Loading posts ...</h3>}>
				<ProfileTimeline />
			</Suspense>
		</Suspense>
	);
}