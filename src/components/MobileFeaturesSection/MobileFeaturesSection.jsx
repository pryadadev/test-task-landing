import "./MobileFeaturesSection.css";
import imgUrlPhone from "@assets/phone2.png";
import imgUrlActions from "@assets/phone2_actions.jpg";
import imgUrlArrowLeft from "@assets/arrow_left.svg";
import imgUrlArrowRight from "@assets/arrow_right.svg";
import SvgIcon from "@components/SvgIcon/SvgIcon.jsx";

const MobileFeaturesSection = () => {
  return (
    <section className="mobile-features-section">
      <div className="mobile-features-section__wrapper mobile-features-section__grid-container">
        <div className="mobile-features-section__mobile">
          <img
            src={imgUrlPhone}
            alt="Мобильное приложение"
            className="mobile-features-section__mobile-phone"
          />
          <img
            src={imgUrlActions}
            alt="Страница Профиль акции"
            className="mobile-features-section__mobile-page"
          />
        </div>
        <div className="mobile-features-section__header">Избранное</div>
        <div className="mobile-features-section__header mobile-features-section__header--selected">
          <div className="mobile-features-section__header--selected__left-arrow">
            <div style={{background: `url(${imgUrlArrowLeft}) no-repeat center/cover`}}></div>
          </div>
          Профиль акции
          <div className="mobile-features-section__header--selected__right-arrow">
            <div style={{background: `url(${imgUrlArrowRight}) no-repeat center/cover`}}></div>
          </div>
        </div>
        <div className="mobile-features-section__header">Подписки</div>
        <div className="mobile-features-section__header">Карта</div>
        <div className="mobile-features-section__header">Моя лента</div>
        <div className="mobile-features-section__header--underline"></div>
        <div className="mobile-features-section__description">
          <span>
            Вы всегда получите полную информацию об акции: подробное описание,
            бренд, магазины и торговые центры где проходит акция.
          </span>
          <span>
            Также доступна возможность сразу перейти на сайт товара и купить в
            рамках действующей акции.
          </span>
        </div>
      </div>
    </section>
  );
};

export default MobileFeaturesSection;
