import React, { useContext } from "react";
import { LanguageContext } from "../../LanguageContext";
import styles from "./textTemplate.module.css";

const text = {
  ru: "Русский язык был выбран",
  en: "English language was chosen",
};

export default function TextTemplate() {
  const { language } = useContext(LanguageContext);
  return <p className={styles}>{text[language]}</p>;
}
