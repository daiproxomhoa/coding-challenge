import React from "react";
import { ReactComponent as LogoIcon } from "../../svg/logo.svg";
import { ReactComponent as ArrowIcon } from "../../svg/arrowDown.svg";
import { ReactComponent as SearchIcon } from "../../svg/search.svg";
import { ReactComponent as MenuIcon } from "../../svg/menu.svg";
import { useMediaQuery } from "../../hook/useMediaQuery";

const TABS = [
  "About us",
  "Sustainability",
  "Insights & News",
  "Strategies",
  "Funds",
  "How to Invest",
];

function Header() {
  const smallScreen = useMediaQuery(375);
  if (smallScreen) {
    return (
      <div
        style={{
          padding: 24,
          display: "flex",
          alignItems: "center",
          position: "sticky",
          top: 0,
          background: "white",
          zIndex: 999,
        }}
      >
        <div style={{ flex: 1 }}>
          <LogoIcon />
        </div>
        <SearchIcon style={{ marginRight: 16 }} />
        <MenuIcon />
      </div>
    );
  }
  return (
    <div
      style={{
        height: 64,
        display: "flex",
        alignItems: "center",
        position: "sticky",
        top: 0,
        background: "white",
        zIndex: 999,
      }}
    >
      <LogoIcon style={{ margin: "0px 240px 0px 120px" }} />
      <div>
        {TABS.map((items, index) => {
          return (
            <span key={index} style={{ marginRight: 40, fontSize: 12 }}>
              {items}
            </span>
          );
        })}
        <span
          style={{
            marginRight: 40,
            fontSize: 12,
            lineHeight: 16,
            display: "inline-flex",
            alignItems: "center",
          }}
        >
          {"Singapore"}&nbsp; <ArrowIcon />
        </span>
      </div>
      <SearchIcon style={{ marginLeft: 40 }} />
    </div>
  );
}

export default Header;
