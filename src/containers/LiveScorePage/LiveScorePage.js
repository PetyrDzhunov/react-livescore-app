import PageWrapper from "../../components/PageWrapper/PageWrapper";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import LiveScoreList from "./LiveScoreList";

const LiveScorePage = () => {
	return (
		<PageWrapper>
			<Header />
			<main>
				<LiveScoreList />
			</main>

			<Footer />
		</PageWrapper>
	)
};

export default LiveScorePage;
