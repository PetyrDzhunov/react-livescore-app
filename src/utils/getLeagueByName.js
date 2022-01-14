const getLeagueByName = (name) => {
	let id;
	switch (name) {
		case "premier-league":
			id = 39;
			break;
		case "ligue1":
			id = 61;
			break;
		case "bundesliga":
			id = 78;
			break;
		case "seriea":
			id = 135;
			break;
		case "laliga":
			id = 140;
			break;
		case "eredevisie":
			id = 88;
			break;
	};

	return id;
};

export default getLeagueByName;