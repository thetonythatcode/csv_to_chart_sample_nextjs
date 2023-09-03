"use client";

import Chart from "react-google-charts";

type Props = {};

export default function GoogleChart({}: Props) {
  const content = (
    <Chart
      chartType="ScatterChart"
      data={[
        ["Age", "Weight"],
        [4, 5.5],
        [8, 12],
      ]}
      width="100%"
      height="400px"
      legendToggle
    />
  );
  return (
    <>
      {content}
      <div>GoogleChart</div>
    </>
  );
}
