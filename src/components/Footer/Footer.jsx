import { mainFooter } from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={mainFooter}>
      <p>©Team Luffy, {new Date().getFullYear()} </p>
    </footer>
  );
};
export default Footer;
