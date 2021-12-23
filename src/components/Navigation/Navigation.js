import Logo from '../Logo/Logo';
import './Navigation.css';
import NavList from './NavList';

const Navigation = () => {
	return (
		<nav className='navigation'>
			<Logo />
			<NavList />
		</nav>
	);
};

export default Navigation;
