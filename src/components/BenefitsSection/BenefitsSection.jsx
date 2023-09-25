import "./BenefitsSection.css";
import BenefitItem from "@components/BenefitsSection/BenefitItem/BenefitItem.jsx";

const BenefitsSection = () => {
  const benefits = [
    {
      header: "Только лучшее",
      description: ["Всегда актуальные", "акции и скидки у вас в телефоне."],
      icon: "like",
    },
    {
      header: "Все рядом",
      description: ["Находите ближайшие акции на карте", "рядом с вами."],
      icon: "geo",
    },
    {
      header: "Уведомления",
      description: ["Подписывайтесь только на то,", "что вас интересует и всегда будьте", "в курсе новых акций."],
      icon: "bell",
    },
    {
      header: "Каталог",
      description: ["Огромный каталог с информацией", "о магазинах, брендах и ТЦ, всегда", "под рукой."],
      icon: "sheet",
    },
  ];

  return (
    <section className="benefits-section">
      <div className="benefits-section__wrapper">
        {benefits.map((item, index) =>
          <BenefitItem
            header={item.header}
            description={item.description}
            icon={item.icon}
            key={index}
          />
        )}
      </div>
    </section>
  );
};

export default BenefitsSection;