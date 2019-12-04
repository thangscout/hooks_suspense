import React from "react";

export default function ProfileTimeline({ resource }) {
	const posts = resource.posts.read();

	return (
		<ul>
			{posts.map(post => (
				<li key={post.id}>{post.text}</li>
			))}
		</ul>
	);
}