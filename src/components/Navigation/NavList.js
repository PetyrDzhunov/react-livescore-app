import './NavList.css';
import { NavLink } from 'react-router-dom';

const NavList = () => {
	return (
		<ul className='nav-list'>

			<li className='nav-list__item'>
				<NavLink className={(navData) => navData.isActive ? "active nav-list__link" : "nav-list__link"} to='/livescore'>Livescore</NavLink>
			</li>

			<li className='nav-list__item'>
				<NavLink className={(navData) => navData.isActive ? "active nav-list__link" : "nav-list__link"} to='/teams'>Teams</NavLink>
			</li>

			<li className='nav-list__item'>
				<NavLink className={(navData) => navData.isActive ? "active nav-list__link" : "nav-list__link"} to='/fixtures'>Fixtures</NavLink>
			</li>

			<li className='nav-list__item'>
				<NavLink className={(navData) => navData.isActive ? "active nav-list__link" : "nav-list__link"} to='/seasons'>Seasons</NavLink>
			</li>

		</ul>
	)
};

export default NavList;
