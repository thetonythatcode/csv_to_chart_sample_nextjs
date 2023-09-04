import React, { Dispatch, SetStateAction } from "react";

type Props = {
  showBarChart: boolean;
  setShowBarChart: Dispatch<SetStateAction<boolean>>;
  showPieChart: boolean;
  setShowPieChart: Dispatch<SetStateAction<boolean>>;
};

export default function ChartsOptions({
  showBarChart,
  setShowBarChart,
  showPieChart,
  setShowPieChart,
}: Props) {
  function switchChart(currChart: boolean) {
    if (!currChart) {
      setShowBarChart((state) => !state);
      setShowPieChart((state) => !state);
    }
  }

  const content = (
    <div className="flex">
      <button
        className={`${
          showBarChart
            ? "bg-green-500 hover:bg-green-700"
            : "bg-slate-300 hover:bg-slate-500"
        } text-white font-bold m-2 py-2 px-4 border border-blue-700 rounded`}
        onClick={() => switchChart(showBarChart)}
      >
        Bar Chart
      </button>
      <button
        className={`${
          showPieChart
            ? "bg-green-500 hover:bg-green-700"
            : "bg-slate-300 hover:bg-slate-500"
        } text-white font-bold m-2 py-2 px-4 border border-blue-700 rounded`}
        onClick={() => switchChart(showPieChart)}
      >
        Pie Chart
      </button>
    </div>
  );

  return content;
}
