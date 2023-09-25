import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
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
          <img
            className="footer__contact-us__icon"
            src="src/assets/contact.svg"
            alt=""
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