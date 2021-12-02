import React from "react";
import { ReactComponent as CircleIcon } from "../../svg/circle.svg";
import { ReactComponent as ArrowIcon } from "../../svg/arrow.svg";
import { useMediaQuery } from "../../hook/useMediaQuery";

function Selection2() {
  const smallScreen = useMediaQuery(375);
  if (smallScreen) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          background: "#00A4B8",
          padding: "64px 24px",
          color: "white",
          zIndex: 2,
          position: "relative",
        }}
      >
        <CircleIcon style={{ height: 327, width: 334 }} />
        <div>
          <p className="h6" style={{ marginTop: 64 }}>
            {"Team of unique combination"}
          </p>
          <p style={{ fontSize: "42px", lineHeight: "48px", marginTop: 40 }}>
            {"Global Intelligence"}
            <br />
            {"Asian Insights"}
            <br />
            {"Local Experience"}
          </p>{" "}
          <p
            className="body1"
            style={{
              marginTop: 48,
            }}
          >
            Team of unique combination Global Intelligence Asian Insights Local
            Experience We transform intelligent insights into innovative,
            relevant investment opportunities for our clients. Leveraging our
            unique combination of a global perspective complemented by our Asian
            DNA, we aspire to create sophisticated and diverse solutions that
            set new standards in the asset management industry. Learn more about
            what makes us unique
          </p>
          <a
            className="body1"
            style={{
              alignItems: "center",
              display: "flex",
              marginTop: 48,
              marginBottom: 48,
              textDecoration: "none",
              color: "inherit",
            }}
            href="http://google.com"
            target="_blank"
            rel="noreferrer"
          >
            {"Learn more about what makes us unique"}
            <ArrowIcon style={{ fill: "white" }} />
          </a>
        </div>
      </div>
    );
  }
  return (
    <div
      style={{
        display: "flex",
        background: "#00A4B8",
        padding: "166px 170px 0px 118px",
        color: "white",
        zIndex: 2,
        position: "relative",
      }}
    >
      <div style={{ width: "40%" }}>
        <CircleIcon />
      </div>
      <div style={{ width: "60%" }}>
        <p className="h6">{"Team of unique combination"}</p>
        <p style={{ fontSize: "73px", lineHeight: "82px", marginTop: 32 }}>
          {"Global Intelligence"}
          <br />
          {"Asian Insights"}
          <br />
          {"Local Experience"}
        </p>{" "}
        <div
          style={{
            marginTop: 104,
            padding: "8px 32px",
            borderLeft: "0.5px solid white",
            height: 280,
          }}
        >
          <p className="body1">
            Team of unique combination Global Intelligence Asian Insights Local
            Experience We transform intelligent insights into innovative,
            relevant investment opportunities for our clients. Leveraging our
            unique combination of a global perspective complemented by our Asian
            DNA, we aspire to create sophisticated and diverse solutions that
            set new standards in the asset management industry. Learn more about
            what makes us unique
          </p>
          <a
            className="h6"
            style={{
              alignItems: "center",
              display: "flex",
              marginTop: 8,
              textDecoration: "none",
              color: "inherit",
            }}
            href="http://google.com"
            target="_blank"
            rel="noreferrer"
          >
            {"Learn more about what makes us unique"}
            <ArrowIcon style={{ fill: "white" }} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Selection2;
