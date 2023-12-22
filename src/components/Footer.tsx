import Contact from "./Contact";

const Footer = () => {
  return (
    <footer id="footer">
      <Contact />

      <div className="content">
        Made with ❤️ By{" "}
        <a href="https://www.linkedin.com/in/kiransuthar/" target="_new">
          Kiran Suthar
        </a>
      </div>
    </footer>
  );
};

export default Footer;
