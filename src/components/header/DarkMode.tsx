import * as React from "react";
import imgsun from "../../assets/images/icon/sun.png";
import Link from "next/link";
import Image from "next/image";

const DarkMode = () => {
  let clickedClass = "clicked";
  let body: HTMLElement;

  const lightTheme = "light";
  const darkTheme = "is_dark";
  let theme = "";

  React.useEffect(() => {
    body = document?.body;
    if (localStorage) {
      theme = localStorage.getItem("theme") ?? "";
    }
    if (theme === lightTheme || theme === darkTheme) {
      body.classList.add(theme);
    } else {
      body.classList.add(darkTheme);
    }
  }, []);

  const switchTheme = (e: any) => {
    if (theme === darkTheme) {
      body.classList.replace(darkTheme, lightTheme);
      e.target.classList.remove(clickedClass);
      localStorage.setItem("theme", "light");
      theme = lightTheme;
    } else {
      body.classList.replace(lightTheme, darkTheme);
      e.target.classList.add(clickedClass);
      localStorage.setItem("theme", "is_dark");
      theme = darkTheme;
    }
  };
  return (
    <div className="mode_switcher">
      <h6>
        Dark mode <strong>Available</strong>
      </h6>
      <Link href="#" onClick={(e) => switchTheme(e)}>
        <Image src={imgsun} alt="" />
      </Link>
    </div>
  );
};

export default DarkMode;
