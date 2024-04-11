import React, { Fragment, useState } from "react";
import { useTranslation } from "react-i18next";

export default function LocalStorage() {
  const [lang, setLang] = useState("");
  //   const words = [
  //     "apple",
  //     "banana",
  //     "cherry",
  //     "date",
  //     "elderberry",
  //     "fig",
  //     "grape",
  //     "honeydew",
  //   ];

  const { t, i18n } = useTranslation();

  console.log(i18n.language);

  const handleChangeLanguage = (lan: string) => {
    i18n.changeLanguage(lan);
    window.localStorage.setItem("lang", lan);
    setLang(lan);
  };

  //   const handleChangeLanguage = () => {
  //     const checkLang = window.localStorage.getItem("lang");
  //     console.log(checkLang);
  //     if (checkLang === "en") {
  //       window.localStorage.setItem("lang", "es");
  //     } else {
  //       window.localStorage.setItem("lang", "en");
  //     }
  //   };

  //   const randomIndex = Math.floor(Math.random() * words.length);
  //   const randomWord = words[randomIndex];

  //   const storageItem = localStorage.getItem("lang") as string;

  return (
    <Fragment>
      <div>{t("slots.animals.dogs")}</div>
      <br />
      <button type="button" onClick={() => handleChangeLanguage("es")}>
        {" "}
        {t("slots.changeLang")}
      </button>
      <br />
      <button type="button" onClick={() => handleChangeLanguage("en")}>
        {" "}
        {t("slots.changeLang")}
      </button>
    </Fragment>
  );
}
