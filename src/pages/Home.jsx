import Hero from "../components/Hero";
import UpcomingEvents from "../components/UpcomingEvents";
import FeaturedPrograms from "../components/FeaturedPrograms";
import ActiveEvents from "../components/ActiveEvents";
import PlatformFeatures from "../components/PlatformFeatures";
import WhoUse from "../components/WhoUse";
import FAQ from "../components/FAQ";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <UpcomingEvents></UpcomingEvents>
      <ActiveEvents></ActiveEvents>
      <FeaturedPrograms></FeaturedPrograms>
      <PlatformFeatures></PlatformFeatures>
      <WhoUse></WhoUse>
      <FAQ></FAQ>
    </div>
  );
};

export default Home;
