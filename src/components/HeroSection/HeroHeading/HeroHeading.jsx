import "./HeroHeading.css";
import { ReactComponent as Logo } from "@assets/shopguide.svg";
import { ReactComponent as MarketplaceIOS } from "@assets/download_ios.svg";
import { ReactComponent as MarketplaceAndroid } from "@assets/download_android.svg";
import { useEffect } from "react";
import imgUrlPopup from "@assets/only_popup.svg";


const HeroHeading = () => {

  const adjustComponentScaleForMobile = () => {
    if (window.innerWidth <= 768) {
      document.querySelector(".hero-heading").style.transform = `scale(${window.innerWidth / 600})`;
    }
  };

  // Adjust component scale at the first load
  useEffect(() => {
    adjustComponentScaleForMobile();
  }, []);

  // Adjust component scale at window width change
  window.addEventListener('resize', adjustComponentScaleForMobile, true);

  return (
    <div className="hero-heading">
      <div className="hero-heading__bubble">
        <div className="hero-heading__bubble-icon" style={{background: `url(${imgUrlPopup}) no-repeat 50% 50% / cover`}}>
          Только лучшие акции
        </div>
      </div>
      <Logo className="hero-heading__logo" />
      <div className="hero-heading__download">
        <div className="hero-heading__download-separator"></div>
        <div className="hero-heading__download-label">загрузить</div>
        <div className="hero-heading__download-separator"></div>
      </div>
      <div className="hero-heading__marketplace">
        <a href="#ios">
          <MarketplaceIOS className="hero-heading__marketplace--ios" />
        </a>
        <a href="#android">
          <MarketplaceAndroid className="hero-heading__marketplace--android" />
        </a>
      </div>
    </div>
  );
};

export default HeroHeading;
