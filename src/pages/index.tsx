import React, { useEffect, useState } from "react";
import Footer from "../components/organisms/footer";
import HomeExplore from "../components/organisms/home-explore";
import HomeHeading from "../components/organisms/home-heading";
import LandingView from "../components/organisms/landing-view";
import DesktopScreen from "../components/organisms/desktop-screen";

const Index: React.FC<{}> = () => {
  const [animationEnd, setAnimationEnd] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setAnimationEnd(true);
    }, 4700);
  }, []);
  return (
    <>
      <LandingView />
      <DesktopScreen />
      {animationEnd && (
        <div>
          <HomeHeading />
          <HomeExplore />
          <Footer />
        </div>
      )}
    </>
  );
};

export default Index;
