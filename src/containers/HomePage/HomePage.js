import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import AsideTopLeagues from "../../components/AsideTopLeagues/AsideTopLeagues";
import League from './League';

import { useParams } from "react-router-dom";

const HomePage = () => {

	return (
		<PageWrapper>
			<Header />
			<main>
				<AsideTopLeagues />
				<League />
			</main>

			<Footer />
		</PageWrapper>
	);
};

export default HomePage;
