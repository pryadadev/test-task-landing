import "./SocialButton.css";

const SocialButton = (props) => {

  const { name, href, icon } = props;

  return (
    <a className="social-button" href={href} title={name}>
      <div className="social-button__rect">
        <img
          className="social-button__icon"
          src={`src/assets/${icon}.svg`}
          alt=""
        />
      </div>
    </a>
  );
};

export default SocialButton;