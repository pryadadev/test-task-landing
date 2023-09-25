import "./BenefitItem.css";
import SvgIcon from "@components/SvgIcon/SvgIcon.jsx";

const BenefitItem = (props) => {

  const { header, description, icon } = props;

  const getLineBreak = () => {
    return (window.innerWidth > 1196 ? <br/> : " ");
  };

  return (
    <figure className="benefit-item">

      <SvgIcon
        iconName={icon}
        svgStyle="benefit-item__icon"
      />

      <div className="benefit-item__header">
        {header}
      </div>

      <div className="benefit-item__description">
        {description.map((item, index) =>
          <span key={index}>
            {item}
            {getLineBreak()}
          </span>
        )}
      </div>

    </figure>
  );
};

export default BenefitItem;