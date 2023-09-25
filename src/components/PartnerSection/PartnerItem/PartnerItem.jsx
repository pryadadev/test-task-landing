import "./PartnerItem.css";

const PartnerItem = (props) => {

  const {image, name} = props;

  return (
    <img
      className="partner-item"
      src={`src/assets/logos/${image}`}
      alt={name}
      title={name}
    />
  );
};

export default PartnerItem;