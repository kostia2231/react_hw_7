import { useContext, React } from "react";
import { LanguageContext } from "../../LanguageContext";
import styles from "./languageSwitcher.module.css";

export default function LanguageSwitcher() {
  const { toggleLanguage, language } = useContext(LanguageContext);

  return (
    <button className={styles} onClick={toggleLanguage}>
      {language === "en" ? "Изменить язык" : "Switch language"}
    </button>
  );
}
