import ThreeSection from "../../components/3 Card section/threeSection";
import Banner from "../../components/Banner/Banner";
import Events from "../../components/Events/Events";
import HomeSIgnUp from "../../components/HomeSignUp/HomeSIgnUp";
// import Header from "../../components/Header/Header";

const Home = () => {
    return (
        <div >
           <Banner></Banner>
           <HomeSIgnUp></HomeSIgnUp>
           <ThreeSection></ThreeSection>
           <Events></Events>
         
         
        </div>
    );
};

export default Home;