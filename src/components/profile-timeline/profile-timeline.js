import React, { useContext } from "react";
import SuspenseContext from "../../context/suspense-context/suspense-context";

export default function ProfileTimeline() {
	const resource = useContext(SuspenseContext);
	const posts = resource.posts.read();

	return (
		<ul>
			{posts.map(post => (
				<li key={post.id}>{post.text}</li>
			))}
		</ul>
	);
}