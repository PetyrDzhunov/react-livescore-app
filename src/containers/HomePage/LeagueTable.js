import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import './LeagueTable.css';
import getLeagueByName from '../../utils/getLeagueByName';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';


const LeagueTable = () => {
	const [league, setLeague] = useState();
	const { error, clearError, isLoading, sendRequest } = useFetch();
	const { league: leagueClicked } = useParams();

	const id = getLeagueByName(leagueClicked) || 39;


	useEffect(() => {
		sendRequest("https://api-football-v1.p.rapidapi.com/v3/standings?league=" + id + "&season=2021", 'GET', null, {
			"x-rapidapi-host": "api-football-v1.p.rapidapi.com",
			"x-rapidapi-key": "9bae1eb64bmsh97f35551078852fp1ae49cjsn17a5ed007de3"
		})
			.then(leagueFetched => setLeague(leagueFetched.response[0].league.standings[0]))
			.catch(err => console.log(error));
	}, [sendRequest, id])


	return (
		<>
			{isLoading && <LoadingSpinner />}
			<h1>{league?.name}</h1>
			<table className='league-table'>
				<thead>
					<tr>
						<td>Rank</td>
						<td>Team</td>
						<td>MP</td>
						<td>W</td>
						<td>D</td>
						<td>L</td>
						<td>G</td>
						<td>PTS</td>
						<td>Form</td>
					</tr>
				</thead>
				<tbody>
					{league?.map((team) => {
						return (
							<tr key={team.team.id}>
								<td>{team.rank}</td>
								<td>{team.team.name}</td>
								<td>{team.all.played}</td>
								<td>{team.all.win}</td>
								<td>{team.all.draw}</td>
								<td>{team.all.lose}</td>
								<td>{team.all.goals.for} : {team.all.goals.against}</td>
								<td>{team.points}</td>
								<td>{team.form.split().map((result, index) => <div key={index}>{result.split("").map((char, index) => (
									<React.Fragment key={index}>	{char === "W"
										? <span key={index} className='win'>{char}</span>
										: char === "L"
											? <span key={index} className='lost'>{char}</span>
											: <span key={index} className='draw'>{char}</span>}</React.Fragment>))}
								</div>
								)}</td>
							</tr>
						)
					})}
				</tbody>
			</table>
		</>

	)
}

export default LeagueTable;
