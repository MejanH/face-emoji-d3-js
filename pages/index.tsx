import Head from "next/head";
import Layout from "../components/Layout";
import * as d3 from "d3";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const chart = d3.select(".chart");

    const width = 950;
    const height = 400;

    const svg = chart
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .style("margin", "auto");

    const g = svg
      .append("g")
      .attr("transform", `translate(${width / 2}, ${height / 2})`);

    const circle = g
      .append("circle")
      .attr("r", height / 2)
      .attr("fill", "yellow")
      .attr("stroke", "black");

    const eyeXOffset = 80;
    const eyeYOffset = -70;
    const eyeRadius = 35;
    const eyeBrowWidth = 70;
    const eyeBrowHeight = 15;
    const eyeBrowYOffset = -60;

    const eyesG = g
      .append("g")
      .attr("transform", `translate(0, ${eyeYOffset})`);

    const leftEye = eyesG
      .append("circle")
      .attr("r", eyeRadius)
      .attr("cx", -eyeXOffset);

    const rightEye = eyesG
      .append("circle")
      .attr("r", eyeRadius)
      .attr("cx", eyeXOffset);

    const eyeBrowsG = eyesG
      .append("g")
      .attr("transform", `translate(0, ${eyeYOffset})`);

    eyeBrowsG
      .transition()
      .duration(2000)
      .attr("transform", `translate(0, ${eyeBrowYOffset - 50})`)
      .attr("transform", `translate(0, ${eyeBrowYOffset})`);

    const leftEyeBrow = eyeBrowsG
      .append("rect")
      .attr("x", -eyeXOffset - eyeBrowWidth / 2)
      .attr("width", eyeBrowWidth)
      .attr("height", eyeBrowHeight);

    const rightEyeBrow = eyeBrowsG
      .append("rect")
      .attr("x", eyeXOffset - eyeBrowWidth / 2)
      .attr("width", eyeBrowWidth)
      .attr("height", eyeBrowHeight);

    const arc = d3
      .arc()
      .innerRadius(120)
      .outerRadius(140)
      .startAngle(Math.PI / 2)
      .endAngle((Math.PI * 3) / 2);
    const mouth = g.append("path").attr("d", arc);
  }, []);
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main>
        <div className="m-8">
          <h1 id="title" className="text-center">
            Welcome
          </h1>
          <div className="chart mt-16"></div>
        </div>
      </main>

      <footer className="border-t-2 border-gray-200">
        <h4 className="text-center">Muhammad Mejanul Haque</h4>
      </footer>
    </Layout>
  );
}
