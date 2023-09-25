import "./App.css";
import HeroSection from "@components/HeroSection/HeroSection.jsx";
import BenefitsSection from "@components/BenefitsSection/BenefitsSection.jsx";
import MobileFeaturesSection from "@components/MobileFeaturesSection/MobileFeaturesSection.jsx";
import DailyDealsSection from "@components/DailyDealsSection/DailyDealsSection.jsx";
import PartnerSection from "@components/PartnerSection/PartnerSection.jsx";
import Footer from "@components/Footer/Footer.jsx";

const App = () => {
  return (
    <>
      <HeroSection />
      <BenefitsSection />
      <MobileFeaturesSection />
      <DailyDealsSection />
      <PartnerSection />
      <Footer />

      {/*  Картинка по которой можно проверить наложение на десктопный макет  */}
      {/*  При ширине экрана соответствующем картинке - 1600px  */}
      {/*  Для активации снять галочку у "display: none" в браузере  */}
      <img
        src="src/assets/SG_landing.jpg"
        alt=""
        style={{
          display: "none",
          position: "absolute",
          left: "0",
          top: "0",
          zIndex: "9999",
          opacity: "0.5",
          width: "1600px",
          height: "3098px"
        }}
      />

      {/*  Картинка по которой можно проверить наложение на мобильный макет  */}
      {/*  При ширине экрана соответствующем картинке - 750px  */}
      {/*  Для активации снять галочку у "display: none" в браузере  */}
      <img
        src="src/assets/SG_mlanding.jpg"
        alt=""
        style={{
          display: "none",
          position: "absolute",
          left: "0",
          top: "0",
          zIndex: "9999",
          opacity: "0.5",
          width: "750px",
          height: "2488px"
        }}
      />
    </>
  );
}

export default App;
