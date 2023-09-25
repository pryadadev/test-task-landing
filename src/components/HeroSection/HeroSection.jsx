import "./HeroSection.css";
import SocialButtons from "@components/SocialButtons/SocialButtons.jsx";
import HeroHeading from "@components/HeroSection/HeroHeading/HeroHeading.jsx";
import imgUrlPhone from "@assets/phone1.png";
import imgUrlBackground from "@assets/bg.jpg";
import { useEffect } from "react";
import SvgIcon from "@components/SvgIcon/SvgIcon.jsx";

const HeroSection = () => {

  useEffect(() => {
    // Scroll without adding anchor name to url
    document.querySelector("#scroll-down").addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector("#footer").scrollIntoView({ behavior: "smooth" });
    });
  }, []);

  return (
    <section className="hero-section" style={{background: `url(${imgUrlBackground}) no-repeat center/cover`}}>
      <div className="hero-section__wrapper">
        <div className="hero-section__buttons">
          <SocialButtons />
          <a className="hero-section__partner-button" href="#partner">
            Стать партнером
          </a>
        </div>

        <HeroHeading />

        <img
          src={imgUrlPhone}
          alt="Мобильное приложение"
          className="hero-section__mobile"
        />
      </div>

      <a id="scroll-down" className="hero-section__scroll-down-button" href="">
        <div className="hero-section__scroll-down-button__label">
          Вниз
        </div>
        <SvgIcon
          iconName="arrow_down"
          svgStyle="hero-section__scroll-down-button__arrow"
        />
        <div className="hero-section__scroll-down-button__label">
          Вниз
        </div>
      </a>
    </section>
  );
};

export default HeroSection;
