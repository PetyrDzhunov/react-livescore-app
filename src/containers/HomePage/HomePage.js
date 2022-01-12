import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import AsideTopLeagues from "../../components/AsideTopLeagues/AsideTopLeagues";

const HomePage = () => {


	return (
		<PageWrapper>
			<Header />
			<main>
				<AsideTopLeagues />
				// show the chosen from the aside menu league or a default one

			</main>
			<Footer />
		</PageWrapper>
	);
};

export default HomePage;
