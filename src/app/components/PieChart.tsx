import Chart from "react-google-charts";

type Props = { csvData: CategorizedData };

export default function PieChart({ csvData }: Props) {
  const pieChartData = [
    ["Position", "$ USD"],
    ["Long", 0],
    ["Short", 0],
  ];

  for (let i = 1; i < csvData.length; i++) {
    if (typeof pieChartData[1][1] === "number") {
      pieChartData[1][1] =
        (pieChartData[1][1] as number) + (csvData[i][1] as number);
    }
    if (typeof pieChartData[2][1] === "number") {
      pieChartData[2][1] =
        (pieChartData[2][1] as number) + (csvData[i][2] as number);
    }
  }

  const options = {
    colors: ["green", "red"],
    is3D: true,
    tooltip: { text: "value-and-percentage" },
  };

  const content = (
    <Chart
      chartType="PieChart"
      data={pieChartData}
      width="100%"
      height="500px"
      options={options}
    />
  );
  return content;
}
