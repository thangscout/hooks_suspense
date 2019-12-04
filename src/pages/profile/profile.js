import React, { Suspense} from "react";
import ProfileDetails from "../../components/profile-details/profile-details";
import ProfileTimeline from "../../components/profile-timeline/profile-timeline";

export default function Profile({ resource }) {
	return (
		<Suspense fallback={<h1>Loading profile ...</h1>}>
			<ProfileDetails resource={resource}/>
			<Suspense fallback={<h1>Loading posts ...</h1>}>
				<ProfileTimeline resource={resource}/>
			</Suspense>
		</Suspense>
	);
}