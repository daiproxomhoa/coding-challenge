import { Bounce } from "gsap/all";
import React from "react";
import { ScrollTrigger, Tween } from "react-gsap";
import { useMediaQuery } from "../../hook/useMediaQuery";
import { ReactComponent as ArrowIcon } from "../../svg/arrow.svg";
import { ReactComponent as WaveIcon } from "../../svg/wave.svg";

function Selection1() {
  const smallScreen = useMediaQuery(375);
  if (smallScreen) {
    return (
      <div>
        <div style={{ marginTop: -70 }}>
          <ScrollTrigger
            trigger="trigger"
            start="-200px"
            end="bottom center"
            scrub={1}
            pin={true}
          >
            <Tween
              to={{ y: 2700, opacity: 0.25 }}
              ease={Bounce.easeIn}
              duration={3}
            >
              <WaveIcon style={{ width: 315, height: 394 }} />
            </Tween>
          </ScrollTrigger>
        </div>
        <div style={{ position: "relative", padding: 24 }}>
          <span style={{ fontSize: "29px", lineHeight: "36px" }}>
            {"Progressive Solutions"}
            <br />
            {"Competitive Performance"}
            <br />
            {"Global Citizen with Asian DNA"}
          </span>
          <p
            style={{
              fontSize: "22px",
              lineHeight: "28px",
              marginTop: 32,
              color: "#474747",
              letterSpacing: "-0.02em",
              opacity: 0.5,
            }}
          >
            {"We’re one of Asia’s largest asset managers."}
          </p>
          <a
            className="body1"
            style={{
              color: "#00A4B8",
              alignItems: "center",
              display: "flex",
              marginTop: 24,
              marginBottom: 8,
              textDecoration: "none",
            }}
            href="http://google.com"
            target="_blank"
            rel="noreferrer"
          >
            {"Learn more about who we are"}
            <ArrowIcon />
          </a>
        </div>
      </div>
    );
  }
  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "40%" }}>
        <ScrollTrigger
          trigger="trigger"
          start="56px center"
          end="2000px center"
          scrub={1}
          pin={true}
        >
          <Tween
            to={{ y: 2000, opacity: 0.25 }}
            ease={Bounce.easeIn}
            duration={1}
          >
            <WaveIcon style={{ marginTop: -130 }} />
          </Tween>
        </ScrollTrigger>
      </div>
      <div style={{ marginTop: 300, position: "relative" }}>
        <span style={{ fontSize: "58px", lineHeight: "64px" }}>
          {"Progressive Solutions"}
          <br />
          {"Competitive Performance"}
          <br />
          {"Global Citizen with Asian DNA"}
        </span>
        <div
          style={{
            marginTop: 64,
            padding: "8px 32px",
            borderLeft: "0.5px solid #8A8A8A",
            height: 284,
          }}
        >
          <p style={{ fontSize: "30px", lineHeight: "38px" }}>
            {"We’re one of Asia’s largest asset managers."}
          </p>
          <a
            className="h6"
            style={{
              color: "#00A4B8",
              alignItems: "center",
              display: "flex",
              marginTop: 8,
              textDecoration: "none",
            }}
            href="http://google.com"
            target="_blank"
            rel="noreferrer"
          >
            {"Learn more about who we are"}
            <ArrowIcon />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Selection1;
