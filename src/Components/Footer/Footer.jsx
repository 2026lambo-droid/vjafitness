import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";
import { socialLinks } from "../../constants/social";

const data = {
  logo: "/assets/img/vjafitness-logo.svg",
  newsletterText:
    " Recibe tips de entrenamiento <br /> y novedades de VJAFitness.",
  menus: [
    {
      title: "SUPPORT",
      links: [
        { label: "FAQ", url: "/faq" },
        { label: "USER GUIDE", url: "/" },
        { label: "TESTIMONIAL", url: "/" },
        { label: "CUSTOMER", url: "/" },
      ],
    },
    {
      title: "LINKS",
      links: [
        { label: "ABOUT US", url: "/about" },
        { label: "GALLERY", url: "/gallery" },
        { label: "PROJECTS", url: "/projects" },
        { label: "BLOG", url: "/blog" },
      ],
    },
    {
      title: "SERVICIOS",
      links: [
        { label: "ENTRENAMIENTO GLÚTEOS", url: "/services/entrenamiento-gluteos" },
        { label: "ENTRENAMIENTO PIERNA", url: "/services/entrenamiento-pierna" },
        { label: "ENTRENAMIENTO ONLINE", url: "/services/entrenamiento-online" },
        { label: "ENTRENAMIENTO PRESENCIAL", url: "/services/entrenamiento-presencial" },
      ],
    },
  ],
  copyright: "VJAFITNESS © 2025. TODOS LOS DERECHOS RESERVADOS.",
  bottomLinks: [
    { label: "PRIVACY POLICY", url: "/" },
    { label: "TERMS & CONDITION", url: "/" },
  ],
};

export default function Footer() {
  return (
    <footer className={`cs_footer cs_style_1 cs_color_1`}>
      <div className="container">
        <div className="cs_footer_row">
          <div className="cs_footer_col">
            <div className="cs_footer_widget">
              <div className="cs_text_widget">
                <img
                  data-aos="zoom-in"
                  src={data.logo}
                  alt="VJAFitness - Fitness Coach"
                  className="wow zoomIn"
                />
                <p
                  dangerouslySetInnerHTML={{ __html: data.newsletterText }}
                ></p>
              </div>
            </div>
            <div className="cs_footer_widget">
              <form action="#" className="cs_newsletter cs_style_1">
                <input
                  type="email"
                  placeholder="Tu email..."
                  className="cs_newsletter_input"
                />
                <button
                  type="submit"
                  className="cs_newsletter_btn cs_arrow_btn cs_white_bg cs_heading_color"
                >
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.3846 0H0.615385C0.275692 0 0 0.275692 0 0.615385C0 0.955077 0.275692 1.23077 0.615385 1.23077H13.8988L0.180308 14.9495C-0.06 15.1898 -0.06 15.5794 0.180308 15.8197C0.300615 15.94 0.457846 16 0.615385 16C0.772923 16 0.930461 15.94 1.05046 15.8197L14.7692 2.10092V15.3846C14.7692 15.7243 15.0449 16 15.3846 16C15.7243 16 16 15.7243 16 15.3846V0.615385C16 0.275692 15.7243 0 15.3846 0Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </div>

          {data.menus.map((menu, i) => (
            <div className="cs_footer_col" key={i}>
              <div className="cs_footer_widget">
                <h4 className="cs_footer_widget_title">{menu.title}</h4>
                <ul className="cs_footer_widget_menu cs_mp_0">
                  {menu.links.map((link, index) => (
                    <li key={index}>
                      <Link to={link.url}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="cs_bottom_footer">
          <div className="cs_bottom_footer_left" data-aos="fade-right">
            <div
              className="cs_copyright"
              dangerouslySetInnerHTML={{ __html: data.copyright }}
            ></div>
          </div>
          <div className="cs_bottom_footer_right" data-aos="fade-left">
            <ul className="cs_footer_links cs_mp_0">
              {data.bottomLinks.map((link, i) => (
                <li key={i}>
                  <Link to={link.url}>{link.label}</Link>
                </li>
              ))}
            </ul>
            <div className="cs_footer_social_icons">
              {socialLinks.instagram && (
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cs_footer_social_icon"
                  aria-label="Instagram"
                >
                  <Icon icon="fa6-brands:instagram" width="16" height="16" />
                </a>
              )}
              {socialLinks.facebook && (
                <a
                  href={socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cs_footer_social_icon"
                  aria-label="Facebook"
                >
                  <Icon icon="fa6-brands:facebook-f" width="16" height="16" />
                </a>
              )}
              {socialLinks.tiktok && (
                <a
                  href={socialLinks.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cs_footer_social_icon"
                  aria-label="TikTok"
                >
                  <Icon icon="fa6-brands:tiktok" width="16" height="16" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
