import "./PartnerSection.css";
import PartnerItem from "./PartnerItem/PartnerItem.jsx";
import { ReactComponent as ArrowLeft } from "@assets/arrow_left.svg";
import { ReactComponent as ArrowRight } from "@assets/arrow_right.svg";

const PartnerSection = () => {

  const logos = [
    {image: "logo_prada.png", name: "Prada"},
    {image: "logo_nike.png", name: "Nike"},
    {image: "logo_cym.png", name: "ЦУМ"},
    {image: "logo_adidas.png", name: "Adidas"},
    {image: "logo_gum.png", name: "ГУМ"},
    {image: "logo_zara.png", name: "Zara"},
    {image: "logo_carlo.png", name: "Carlo Pazolini"}
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
                <PartnerItem
                  image={item.image}
                  name={item.name}
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