/*//  Theory-
                                Q. What is MUI library?
                               -------------------------
    MUI is a basic component react library. Core motive of MUI is use its components.
//  whereas Bootstrap or Tailwind has styling library.
//  It is highely used UI Library.
//  Material UI is a library of React UI components that implements Google's Material Design.
//                                          or
//                                     -------------
//                           Q. What is MUI in web development?
                            ------------------------------------
//  MUI, or Material UI, is a massive library of UI design components that developers can easily import to build React applications. 
//  It is an open-source project that follows Google's guidelines for creating an app or website components.

// open={open}- This means when i want to open drawer it will open or when close it will close.
// {open} is current value of usestate.
// If open={true}- This means drawer always open.     If open={false}- This means always close.

// IconButton is an effect in MUI that we see.
// */

import { Switch } from "@mui/material";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Drawer from "@mui/material/Drawer";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

export default function MobileDrawer() {
  const [flag, setFlag] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") == "dark" ? true : false
  );

  useEffect(() => {
    if (localStorage.getItem("theme") == "dark") {
      setDark();
    } else {
      setLight();
    }
  }, []);

  const changeMode = () => {
    setDarkMode(!darkMode);
    // toast.success("Theme Changed!");
    const mode = localStorage.getItem("theme");
    if (mode == "dark") {
      setLight();
    } else {
      setDark();
    }
  };

  const setDark = () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
  };

  const setLight = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
  };
  return (
    <div className="drawer-wrapper">
      <MenuRoundedIcon className="link" onClick={() => setFlag(true)} />
      <Drawer anchor={"right"} open={flag} onClose={() => setFlag(false)}>
        <div className="mobile-drawer">
          <a href="/">
            <p className="link">Home</p>
          </a>
          <a href="/compare">
            <p className="link">Compare</p>
          </a>
          <a href="/watchlist">
            <p className="link">Watchlist</p>
          </a>
          <a href="/dashboard">
            <p className="link">Dashboard</p>
          </a>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <p className="link">{darkMode ? "Light Mode" : "Dark Mode"}</p>
            <Switch
              checked={darkMode}
              onClick={() => {
                changeMode();
              }}
            />
          </div>
        </div>
      </Drawer>
    </div>
  );
}
