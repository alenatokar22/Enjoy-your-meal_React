import { BsInstagram, BsTelegram, BsLinkedin } from "react-icons/bs";
import TAU from "../assets/TAU.png";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        <img className="footer__img" src={TAU} alt="My logo" />
      </a>

      <div className="footer__socials">
        <a href="https://www.instagram.com/tokar.alena2022/?next=%2F">
          <BsInstagram />
        </a>
        <a href="@ITAU007">
          <BsTelegram />
        </a>
        <a href="https://www.linkedin.com/in/alona-tokar-817068194/">
          <BsLinkedin />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; 2023 DesignByTAU. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
