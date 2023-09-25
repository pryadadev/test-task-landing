import "./PartnerSection.css";
import { ReactComponent as ArrowLeft } from "@assets/arrow_left.svg";
import { ReactComponent as ArrowRight } from "@assets/arrow_right.svg";
import imgUrlPrada from "@assets/logos/logo_prada.png";
import imgUrlNike from "@assets/logos/logo_nike.png";
import imgUrlCym from "@assets/logos/logo_cym.png";
import imgUrlAdidas from "@assets/logos/logo_adidas.png";
import imgUrlGum from "@assets/logos/logo_gum.png";
import imgUrlZara from "@assets/logos/logo_zara.png";
import imgUrlCarlo from "@assets/logos/logo_carlo.png";

const PartnerSection = () => {

  const logos = [
    {imageUrl: imgUrlPrada, name: "Prada"},
    {imageUrl: imgUrlNike, name: "Nike"},
    {imageUrl: imgUrlCym, name: "ЦУМ"},
    {imageUrl: imgUrlAdidas, name: "Adidas"},
    {imageUrl: imgUrlGum, name: "ГУМ"},
    {imageUrl: imgUrlZara, name: "Zara"},
    {imageUrl: imgUrlCarlo, name: "Carlo Pazolini"}
  ];

  return (
    <section className="partner-section">
      <div className="partner-section__header">
        Наши партнеры
      </div>
        <div className="partner-section__logos">
          <div className="partner-section__wrapper">
            <ArrowLeft className="partner-section__logos-arrow partner-section__logos-arrow-left"/>
            <div className="partner-section__logos-container">
              {logos.map((item, index) =>
                <img
                  className="partner-item"
                  src={item.imageUrl}
                  alt={item.name}
                  title={item.name}
                  key={index}
                />
              )}
            </div>
            <ArrowRight className="partner-section__logos-arrow partner-section__logos-arrow-right"/>
          </div>
        </div>
        <div className="partner-section__join-us">
          <div className="partner-section__join-us-text">
            Хотите стать партнером?<br/>
            Напишите нам и про ваши акции узнают все.
          </div>
          <a className="partner-section__join-us-button" href="#partner">
            Стать партнером
          </a>
        </div>
    </section>
  );
};

export default PartnerSection;