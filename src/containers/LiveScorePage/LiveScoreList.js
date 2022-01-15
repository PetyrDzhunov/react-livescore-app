import React, { useEffect, useState } from 'react'
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import useFetch from '../../hooks/useFetch';
import './LiveScoreList.css';

const LiveScoreList = () => {
	const [livescore, setLivescore] = useState();
	const { isLoading, sendRequest, clearError, error } = useFetch();

	useEffect(() => {
		sendRequest("https://api-football-v1.p.rapidapi.com/v3/fixtures?live=all", 'GET', null, {
			"x-rapidapi-host": "api-football-v1.p.rapidapi.com",
			"x-rapidapi-key": "9bae1eb64bmsh97f35551078852fp1ae49cjsn17a5ed007de3"
		})
			.then((fixturesFetched) => setLivescore(fixturesFetched.response))
			.catch(err => console.log(error));
	}, []);

	console.log(livescore);
	return (
		<>
			{isLoading && <LoadingSpinner />}
			<table className='league-table'>
				<tbody>
					{livescore?.map((liveMatch, index) => {
						return (
							<tr key={index} className='league-tableRow'>
								<td><img id='league-logo' src={liveMatch.league.logo} /></td>
								<td style={{ color: "red" }}>{`${liveMatch.fixture.status.elapsed}'` || `${liveMatch.fixture.status.long}`}</td>
								<td id="teams-parent" key={index}>
									<span className='special-tableRow'>{liveMatch.teams.home.name} {liveMatch.goals.home}</span>
									<span className='special-tableRow'>{liveMatch.teams.away.name} {liveMatch.goals.away}</span>
								</td>
							</tr>
						)
					})}

				</tbody>
			</table>
		</>
	)
};

export default LiveScoreList;
