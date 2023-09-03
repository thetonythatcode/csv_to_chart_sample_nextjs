import { useRef } from "react";
import Chart from "react-google-charts";
import generatePDF from "@/lib/generatePDF";

type Props = { csvData: CategorizedData };

export default function GoogleChart({ csvData }: Props) {
  const chartRef = useRef<any>(null);

  const options = {
    colors: ["green", "red"],
    legend: { position: "top" },
    bar: { groupWidth: "75%" },
    isStacked: true,
    hAxis: {
      title: "Hours", // X-axis title
    },
    vAxis: {
      title: "Total Value (USD)", // Y-axis title
    },
  };

  const content = (
    <>
      <div ref={chartRef} className="w-full m-2">
        <Chart
          chartType="ColumnChart"
          data={csvData}
          width="100%"
          height="500px"
          options={options}
          legendToggle
        />
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
        onClick={() => generatePDF(chartRef)}
      >
        Download as PDF
      </button>
    </>
  );
  return content;
}
