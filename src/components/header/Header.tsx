import logoBlack from "../../assets/images/logo-black.svg";
import logoWhite from "../../assets/images/logo-white.svg";
import NavButton from "./NavButton.tsx";
import NavIcon from "./NavIcon.tsx";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";

function Header() {
  const [theme, setTheme] = useState("light");
  const location = useLocation();
  const base = "/~jillge";

  useEffect(() => {
    if (location.pathname === `${base}/contact`) {
      setTheme("dark");
    } else {
      setTheme("light");
    }

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [location, theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const toggleLight = () => {
    setTheme("light");
  };

  return (
    <>
      <nav
        className={`fit fixed h-dvh w-full items-center px-1 md:flex z-100 md:h-fit ${theme ? "light" : "dark"}`}
        role="navigation"
      >
        <div className="absolute bottom-0 left-0 md:relative md:flex md:flex-1">
          <NavIcon
            path={theme === "dark" ? `${base}/` : `${base}/contact`}
            icon={theme === "light" ? logoBlack : logoWhite}
            alt="alien logo"
            onClick={toggleTheme}
          />
        </div>
        <div className="flex justify-center md:block">
          <NavButton
            path={`${base}/`}
            text="james illge"
            onClick={toggleLight}
          />
        </div>
        <div className="absolute right-0 bottom-0 justify-end md:relative md:flex md:flex-1">
          <NavButton path={`${base}/info`} text="info" onClick={toggleLight} />
        </div>
      </nav>
    </>
  );
}

export default Header;
