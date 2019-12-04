export function fetchUser(userId) {
	return new Promise(resolve => {
		setTimeout(() => {
			switch(userId) {
				case 0:
					resolve({
						name: "Ringo Starr"
					});
					break;
				case 1:
					resolve({
						name: "George Harrison"
					});
					break;
				case 2:
					resolve({
						name: "John Lennon"
					});
					break;
				case 3:
					resolve({
						name: "Paul McCartney"
					});
					break;
				default:
					throw Error("Unkown user.");
			}
		}, 2000 * Math.random());
	})
}