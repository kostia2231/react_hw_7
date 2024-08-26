import "./App.css";
import React from "react";
import { LanguageProvider } from "./LanguageContext";
import LanguageSwitcher from "./components/LanguageSwitcher";
import TextTemplate from "./components/TextTemplate";

function App() {
  return (
    <LanguageProvider>
      <div className="wrapper">
        <TextTemplate />
        <LanguageSwitcher />
      </div>
    </LanguageProvider>
  );
}

export default App;
