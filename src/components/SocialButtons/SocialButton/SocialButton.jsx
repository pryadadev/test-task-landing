import "./SocialButton.css";
import SvgIcon from "@components/SvgIcon/SvgIcon.jsx";
import imgUrlRect from "@assets/icon_rect.svg";

const SocialButton = (props) => {

  const { name, href, icon } = props;

  return (
    <a className="social-button" href={href} title={name}>
      <div className="social-button__rect" style={{backgroundImage: `url(${imgUrlRect})`}}>
        <SvgIcon
          iconName={icon}
          svgStyle="social-button__icon"
        />
      </div>
    </a>
  );
};

export default SocialButton;