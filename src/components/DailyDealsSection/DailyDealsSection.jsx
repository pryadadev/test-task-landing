import "./DailyDealsSection.css";
import imgUrlPhone1 from "@assets/phone3_1.png";
import imgUrlPhone2 from "@assets/phone3_2.png";
import { useEffect, useState } from "react";

const DailyDealsSection = () => {

  const [description, setDescription] = useState();

  const getDescription = () => {
    if (window.innerWidth > 768) {
      return (
        <>
          Каждый день в Москве проходят распродажи.<br />
          В акциях и скидках дня могут принимать участие любые группы<br />
          товаров. Особенно популярны распродажи одежды и обуви,<br />
          распродажи мебели, распродажи сумок.
        </>
      );
    } else {
      return (
        <>
          <p className="daily-deals-section__description__first-paragraph">
            Каждый день в Москве проходят распродажи. В акциях и скидках дня могут принимать участие любые группы товаров.
          </p>
          <p className="daily-deals-section__description__second-paragraph">
            Особенно популярны распродажи одежды и обуви, распродажи мебели, распродажи сумок.
          </p>
        </>
      );
    }
  };

  // Set description at the first load
  useEffect(() => {
    setDescription(getDescription());
  }, []);

  let previousWidth;
  // Set description at window width change
  window.addEventListener('resize', () => {
    // A new description is only set if the 768px is crossed
    if (previousWidth <= 768 && window.innerWidth > 768 || previousWidth > 768 && window.innerWidth <= 768) {
      setDescription(getDescription());
    }
    previousWidth = window.innerWidth;
  }, true);

  return (
    <section className="daily-deals-section">
      <div className="daily-deals-section__empty-space"></div>
      <div className="daily-deals-section__background">
        <div className="daily-deals-section__wrapper">
          <div className="daily-deals-section__text-box">
            <div className="daily-deals-section__header">Наши акции</div>
            <div className="daily-deals-section__description">
              {description}
            </div>
          </div>
          <img
            src={imgUrlPhone2}
            alt="Смартфон2"
            className="daily-deals-section__mobile2"
          />
          <img
            src={imgUrlPhone1}
            alt="Смартфон1"
            className="daily-deals-section__mobile1"
          />
        </div>
      </div>
    </section>
  );
};

export default DailyDealsSection;
