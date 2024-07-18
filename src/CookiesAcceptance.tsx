import { useState } from "react";
import "./CookiesAcceptance.css";

export default function CookiesAcceptance() {
  const [accept, setAccept] = useState<boolean>(false);

  const acceptCookies = (type: string) => {
    let cookiesContent = "";
    if (type === "all") {
      cookiesContent = document.cookie =
        "acceptedCookies=true; expires=30; path=/";
    } else {
      cookiesContent = "acceptedCookies=necessary; expires=30; path=/";
    }
    document.cookie = cookiesContent;
    setAccept(true);
  };
  return (
    <div id="cookie-consent" className={accept ? "hidden" : ""}>
      <div>
        We use cookies to improve your experience. By using our website, you
        consent to all cookies in accordance with our Privacy Policy.
      </div>
      <button onClick={() => acceptCookies("all")}>Accept All Cookies</button>
      <button onClick={() => acceptCookies("necessary")}>
        Accept Necessary Cookies
      </button>
    </div>
  );
}
