import React, { useState, createContext } from "react";
import PropTypes from "prop-types";

export const LanguageContext = createContext();
export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("ru");

  function toggleLanguage() {
    setLanguage((prevlanguage) => (prevlanguage === "ru" ? "en" : "ru"));
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

LanguageProvider.propTypes = {
  children: PropTypes.node,
};
