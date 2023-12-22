import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const socialLinks = [
  {
    id: "facebook",
    href: "https://www.facebook.com/ksuthar1998",
    background: "#3b5998",
    icon: <FaFacebookF />,
  },
  {
    id: "linkedin",
    href: "https://www.linkedin.com/in/kiransuthar/",
    background: "#0082ca",
    icon: <FaLinkedin />,
  },
  {
    id: "instagram",
    href: "https://www.instagram.com/ksuthar98/",
    background:
      "linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
    icon: <FaInstagram />,
  },
  {
    id: "twitter",
    href: "https://twitter.com/ksuth1998",
    background: "#55acee",
    icon: <FaTwitter />,
  },
  {
    id: "github",
    href: "https://github.com/ksp1998",
    background: "#333333",
    icon: <FaGithub />,
  },
];

const Contact = () => {
  return (
    <section id="contact">
      <div className="social-icons">
        {socialLinks.map((link) => (
          <a
            key={link.id}
            className="icon"
            style={{ background: link.background }}
            href={link.href}
            target="_new"
          >
            {link.icon}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
