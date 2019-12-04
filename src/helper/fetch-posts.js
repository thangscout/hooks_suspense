export function fetchPosts(userId){
	return new Promise(resolve => {
		setTimeout(() => {
			switch(userId) {
				case 0:
					resolve([
						{
							id: 0,
							text: "I get by with a little help from my friends"
						},
						{
							id: 1,
							text: "I'd like to be under the sea in an octpus's garden"
						},
						{
							id: 2,
							text: "You got that sand all over your feet"
						}
					]);
					break;
				case 1:
					resolve([
						{
							id: 0,
							text: "Turn off your mind, relax, and float downstream"
						},
						{
							id: 1,
							text: "All things must pass"
						},
						{
							id: 2,
							text: "I look at the world and I notice it's turing"
						}
					]);
					break;
				case 2:
					resolve([
						{
							id: 0,
							text: "Living is easy with eyes closed"
						},
						{
							id: 1,
							text: "Nothing's gonna change my world"
						},
						{
							id: 2,
							text: "I am the walrus"
						}
					]);
					break;
				case 3:
					resolve([
						{
							id: 0,
							text: "Wokw up, fell out of bed"
						},
						{
							id: 1,
							text: "Here, there, and everywhere"
						},
						{ 
							id: 2,
							text: "Two of us sending postcards, writing letters"
						}
					]);
					break;
				default:
					throw Error("Unknown user.");
			}
		}, 3000 * Math.random());
	})
}