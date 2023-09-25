import "./Footer.css";
import imgUrlBackground from "@assets/bg.jpg";
import SvgIcon from "@components/SvgIcon/SvgIcon.jsx";

const Footer = () => {
  return (
    <footer id="footer" className="footer" style={{backgroundImage: `url(${imgUrlBackground})`}}>
      <div className="footer__wrapper">
        <div className="footer__legal">
          <div className="footer__legal__copyright">
            2016 © ShopGuide
          </div>
          <a className="footer__legal__policies" href="#privacy">
            Политика конфиденциальности
          </a>
          <a className="footer__legal__policies" href="#usage">
            Политика пользования
          </a>
        </div>
        <a className="footer__contact-us" href="#contact-us">
          <SvgIcon
            iconName={"contact"}
            svgStyle="footer__contact-us__icon"
          />
          <span className="footer__contact-us__label">
            Связаться с нами
          </span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;