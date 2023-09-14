import { mainFooter } from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={mainFooter}>
      <p>© {new Date().getFullYear()}, Team Luffy</p>
    </footer>
  );
};
export default Footer;
