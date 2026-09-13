import Navigation from "../Navigation";
import styles from "./AppBar.module.css";
import LangSwitcher from "../LangSwitcher/LangSwitcher";


export default function AppBar() {
  return (
    <header className={styles.header}>
      <Navigation />
      <LangSwitcher/>
    </header>
  );
}
