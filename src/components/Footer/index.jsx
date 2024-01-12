import styles from "./Footer.module.css";
import { ReactComponent as MarcaRegistrada } from "assets/marca_registrada.svg";
const Footer = () => {
  return (
    <footer className={styles.rodape}>
      <MarcaRegistrada />
      <p>Created by JoviDante </p>
    </footer>
  );
};

export default Footer;
