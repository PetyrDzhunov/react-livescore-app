import './AsideTopLeagues.css';
import { NavLink } from 'react-router-dom';
import React from 'react'

const AsideTopLeagues = () => {
	return (
		<aside className='aside-top-leagues'>
			<ul className='aside-top-leagues__list'>
				<li className='aside-top-league__list-item'>
					<NavLink className={(navData) => navData.isActive ? "active aside-top-league__NavLink" : "aside-top-league__NavLink"} to="/leagues/premier-league">Premier League</NavLink>
				</li>

				<li className='aside-top-league__list-item'>
					<NavLink className={(navData) => navData.isActive ? "active aside-top-league__NavLink" : "aside-top-league__NavLink"} to="/leagues/ligue1">Ligue 1</NavLink>
				</li>

				<li className='aside-top-league__list-item'>
					<NavLink className={(navData) => navData.isActive ? "active aside-top-league__NavLink" : "aside-top-league__NavLink"} to="/leagues/bundesliga">Bundesliga</NavLink>
				</li>

				<li className='aside-top-league__list-item'>
					<NavLink className={(navData) => navData.isActive ? "active aside-top-league__NavLink" : "aside-top-league__NavLink"} to="/leagues/seriea">Serie A</NavLink>
				</li>

				<li className='aside-top-league__list-item'>
					<NavLink className={(navData) => navData.isActive ? "active aside-top-league__NavLink" : "aside-top-league__NavLink"} to="/leagues/laliga">LaLiga</NavLink>
				</li>

				<li className='aside-top-league__list-item'>
					<NavLink className={(navData) => navData.isActive ? "active aside-top-league__NavLink" : "aside-top-league__NavLink"} to="/leagues/eredevisie">Eredivisie</NavLink>
				</li>
			</ul>
		</aside>
	)
};

export default AsideTopLeagues;
