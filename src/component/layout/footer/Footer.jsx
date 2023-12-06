import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaArrowUpLong } from "react-icons/fa6";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleWhatsappClick = () => {
    window.open("https://wa.me/543425496379", "_blank");
  };
  const handleFacebookClick = () => {
    window.open("https://www.facebook.com/ComunadeFranck", "_blank");
  };
  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/comuna_de_franck/", "_blank");
  };

  return (
    <div>
      <span>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21286.86635459391!2d-60.95529837292551!3d-31.582640585998753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b50ca70cff7dd7%3A0xdd231fade962a9ed!2sComuna%20De%20Franck!5e1!3m2!1ses-419!2sar!4v1701096431990!5m2!1ses-419!2sar"
          width="100%"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </span>
      <div className="footer">
        <div className="contact1">
          <span style={{ margin: "10px" }}>
            <h4>Informacion de contacto</h4>
            <hr />
          </span>
          <span style={{ display: "flex", margin: "10px" }}>
            <FaLocationDot size={25} />
            <span>
              <h5 style={{ marginLeft: "5px", marginBottom: "5px" }}>
                San Martín 1986, (3009)
              </h5>
              <h5 style={{ marginLeft: "5px" }}>Franck, Santa Fe, Argentina</h5>
            </span>
          </span>
          <span style={{ display: "flex", margin: "10px" }}>
            <FaPhoneAlt size={25} />
            <h5 style={{ marginLeft: "5px" }}>0800 777 5197</h5>
          </span>
          <span style={{ display: "flex", margin: "10px" }}>
            <MdEmail size={25} />
            <h5 style={{ marginLeft: "5px" }}>comuna@franck.gob.ar</h5>
          </span>
        </div>
        <div className="contact2">
          <span>
            <h4>© Comuna De Franck 2023</h4>
          </span>
        </div>
        <div className="contact3">
          <div className="iconos-superiores">
            <span>
              <a onClick={handleWhatsappClick}>
                <FaWhatsapp size={30} />
              </a>
            </span>
            <span>
              <a onClick={handleFacebookClick}>
                <FaFacebookF size={30} />
              </a>
            </span>
            <span>
              <a onClick={handleInstagramClick}>
                <IoLogoInstagram size={30} />
              </a>
            </span>
          </div>
          <div className="flecha">
            <span>
              <Link onClick={scrollToTop}>
                <FaArrowUpLong />
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
