import { fetchUser } from "./index";
import { fetchPosts } from "./index";

export function fetchProfileData(userId) {
	let userPromise = fetchUser(userId);
	let postsPromise = fetchPosts(userId);
	return {
		userId,
		user: wrapPromise(userPromise),
		posts: wrapPromise(postsPromise)
	}
}

function wrapPromise(promise) {
	let status = "pending";
	let result;
	let suspender = promise.then(
		r => {
			status = "success";
			result = r;
		},
		e => {
			status = "error";
			result = e;
		}
	);

	return {
		read(){
			if ( status === "pending") {
				throw suspender;
			} else if ( status === "error") {
				throw result;
			} else if ( status === "success") {
				return result;
			}
		}
	}
}