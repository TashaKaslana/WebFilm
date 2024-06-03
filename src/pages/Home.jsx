import Header from "../layouts/Header/Header.jsx";
import HomeSection from "../layouts/Main/HomeSection/HomeSection.jsx";
import Footer from "../layouts/Footer/Footer.jsx";

const Home = () => {
    return (
        <div className={'font-sans'}>
            <Header></Header>
            <HomeSection></HomeSection>
            <Footer></Footer>
        </div>
    )
}

export default Home;