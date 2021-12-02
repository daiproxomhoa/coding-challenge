import React, { useState } from "react";
import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4core from "@amcharts/amcharts4/core";
import animated from "@amcharts/amcharts4/themes/animated";
import { useMediaQuery } from "../../hook/useMediaQuery";

am4core.useTheme(animated);
am4core.addLicense("ch-custom-attribution");

function generateData(index) {
  const value = Math.round(Math.random() * 10 - 4.2 + 100 + index);
  const value2 = Math.round(Math.random() * 10 - 4.2 + 100 + index);
  let date = new Date();
  date.setDate(date.getDate() + index);
  return {
    date: date.getTime(),
    value: value,
    value2: value2,
  };
}

function generateDatas() {
  let data = [];
  for (var i = 0; i < 50; ++i) {
    data.push(generateData(i));
  }
  return data;
}

const FAKE_DATA = [
  {
    title: "NAV (per 100 shares)",
    value: "¥196,977",
  },
  { title: "Net Assets", value: "7,309,193 million" },
  { title: "Day Change", value: "- ¥1,094" },
  { title: "Issued", value: "3,710,686,634 shares" },
];

function Selection3() {
  const [option, setOption] = useState(1);
  const smallScreen = useMediaQuery(375);

  const chartRef = React.useRef(null);
  const dataChart = React.useRef(null);

  const buildChart = React.useCallback(() => {
    // Create chart instance
    chartRef.current = am4core.create("columnChart", am4charts.XYChart);

    // Increase contrast by taking evey second color
    chartRef.current.colors.step = 2;
    const dateAxis = chartRef.current.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.hidden = true;
    dateAxis.renderer.hidden = true;

    const valueAxis = chartRef.current.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.grid.template.hidden = true;
    valueAxis.renderer.hidden = true;
    // Create series
    function createAxisAndSeries(field, name) {
      if (!chartRef.current) {
        return;
      }
      const series = chartRef.current.series.push(new am4charts.LineSeries());
      series.dataFields.valueY = field;
      series.dataFields.dateX = "date";
      series.strokeWidth = 2;
      series.name = name;
      series.tooltipText = "{name}: [bold]{valueY}[/]";
      series.tensionX = 0.8;
      series.showOnInit = true;
    }
    createAxisAndSeries("value", "testA");
    createAxisAndSeries("value2", "testB");
    // Add cursor
    chartRef.current.cursor = new am4charts.XYCursor();
    chartRef.current.cursor.xAxis = dateAxis;
  }, []);

  React.useEffect(() => {
    buildChart();
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      dataChart?.current?.dispose();
    };
  }, [buildChart]);

  React.useEffect(() => {
    if (chartRef.current) {
      chartRef.current.data = generateDatas();
    }
  }, [option]);

  if (smallScreen) {
    return (
      <div
        style={{
          padding: "64px 24px 90px 24px ",
        }}
      >
        <p style={{ fontSize: "42px", lineHeight: "48px", width: 306 }}>
          {"Our Featured Funds"}
        </p>
        <div
          style={{
            marginTop: 40,
            boxSizing: "border-box",
            display: "flex",
          }}
        >
          {Array(4)
            .fill(0)
            .map((_, index) => {
              return (
                <span
                  key={index}
                  style={{
                    fontSize: "52px",
                    lineHeight: "60px",
                    marginRight: 24,
                    color: "#00A4B8",
                    opacity: option === index ? 1 : 0.1,
                    cursor: "pointer",
                  }}
                  onClick={() => setOption(index)}
                >{`0${index + 1}`}</span>
              );
            })}
        </div>
        <p
          style={{
            fontSize: "22px",
            lineHeight: "28px",
            color: "#00A4B8",
            width: 256,
            marginTop: 40,
            marginBottom: 32,
          }}
        >
          {"Nikko AM ARK Disruptive Innovation Fund"}
        </p>
        <div style={{ width: 190, marginTop: 24 }}>
          {FAKE_DATA.map((item, index) => {
            return (
              <div
                key={index}
                style={{
                  marginTop: !index ? 0 : 8,
                }}
              >
                <span style={{ fontSize: "14px", lineHeight: "18px" }}>
                  {item.title}
                </span>
                &emsp;
                <span
                  style={{
                    color: "#8A8A8A",
                    fontSize: "14px",
                    lineHeight: "18px",
                  }}
                >
                  {item.value}
                </span>
              </div>
            );
          })}
        </div>
        <div
          id="columnChart"
          style={{
            height: 240,
            width: "calc(100% + 64px)",
            marginLeft: -50,
            transition: "opacity 0.3s",
          }}
        />
      </div>
    );
  }
  return (
    <div
      style={{
        display: "flex",
        padding: "180px 0px 100px 0px ",
      }}
    >
      <div
        style={{
          width: "40%",
          textAlign: "end",
          paddingRight: 100,
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {Array(4)
          .fill(0)
          .map((_, index) => {
            return (
              <span
                key={index}
                style={{
                  fontSize: "150px",
                  lineHeight: "132px",
                  marginBottom: "48px",
                  color: "#00A4B8",
                  opacity: option === index ? 1 : 0.1,
                  cursor: "pointer",
                }}
                onClick={() => setOption(index)}
              >{`0${index + 1}`}</span>
            );
          })}
      </div>
      <div>
        <p style={{ fontSize: "73px", lineHeight: "82px", width: 450 }}>
          {"Our Featured Funds"}
        </p>
        <p
          style={{
            fontSize: "40px",
            lineHeight: "48px",
            color: "#00A4B8",
            width: 450,
            marginTop: 48,
            marginBottom: 32,
          }}
        >
          {"Nikko AM ARK Disruptive Innovation Fund"}
        </p>
        <div
          id="columnChart"
          style={{
            height: 300,
            width: 660,
            marginBottom: 32,
            marginLeft: -50,
            transition: "opacity 0.3s",
          }}
        />
        <div style={{ width: 316 }}>
          {FAKE_DATA.map((item, index) => {
            return (
              <div
                key={index}
                style={{
                  borderBottom: "0.5px solid #8A8A8A",
                  borderTop: !index ? "0.5px solid #8A8A8A" : undefined,
                  padding: "16px 0px",
                }}
              >
                <span className="h6">{item.title}</span>&emsp;
                <span
                  className="h6"
                  style={{ color: "#8A8A8A", fontWeight: "normal" }}
                >
                  {item.value}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Selection3;
