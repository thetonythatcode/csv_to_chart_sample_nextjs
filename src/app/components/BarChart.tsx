import Chart from "react-google-charts";

type Props = { csvData: CategorizedData };

export default function BarChart({ csvData }: Props) {
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
    <Chart
      chartType="ColumnChart"
      data={csvData}
      width="100%"
      height="500px"
      options={options}
    />
  );
  return content;
}
