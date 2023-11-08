import Header from "../../components/blocks/Header";
import Experience from "../ScreensPages/Experience/Experience";
import Good from "../ScreensPages/Good/Good";
import  from "../ScreensPages/Star/";
import Hero from "../ScreensPages/HeroPage/Hero";
import Register from "../ScreensPages/Register";

const HomeScreen = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Good/>
      <Experience/>
      <StarsCanvas/>
      <Register />
    </div>
  );
};

export default HomeScreen;
