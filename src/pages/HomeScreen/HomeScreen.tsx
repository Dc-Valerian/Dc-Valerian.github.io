import Header from "../../components/blocks/Header";
import Experience from "../ScreensPages/Experience/Experience";
import Good from "../ScreensPages/Good/Good";
import Hero from "../ScreensPages/HeroPage/Hero";
// import Register from "../ScreensPages/Register";
import StarsCanvas from "../ScreensPages/Stars/StarsCanvas";

const HomeScreen = () => {
  return (
    <div>
      <Header />
      <div className='relative z-0'>

      <Hero />
      <Good/>
      <Experience/>
      <StarsCanvas/>
      </div>
      {/* <Register /> */}
      
    </div>
  );
};

export default HomeScreen;
