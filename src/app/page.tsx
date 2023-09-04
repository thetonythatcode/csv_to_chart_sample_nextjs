"use client";

import { useRef, useState } from "react";

import FileUpload from "./components/FileUpload";
import BarChart from "./components/BarChart";
import PieChart from "./components/PieChart";

import parseCSV from "@/lib/parseCSV";
import categorizeData from "@/lib/categorizeData";
import generateEmptyData from "@/lib/generateEmptyData";
import generatePDF from "@/lib/generatePDF";
import ChartsOptions from "./components/ChartsOptions";

export default function Home() {
  const [csvData, setCSVData] = useState<CategorizedData>(generateEmptyData());
  const [showBarChart, setShowBarChart] = useState<boolean>(true);
  const [showPieChart, setShowPieChart] = useState<boolean>(false);

  const chartRef = useRef<any>(null);

  const handleFileUpload = (file: File) => {
    if (file) {
      parseCSV(file, (data) => {
        // Handle the parsed CSV data
        const categorizedData: CategorizedData = categorizeData(data);
        setCSVData(categorizedData);
      });
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <FileUpload handleFileUpload={handleFileUpload} />
      <ChartsOptions
        {...{
          showBarChart,
          showPieChart,
          setShowBarChart,
          setShowPieChart,
        }}
      />
      <div ref={chartRef} className="w-full m-2">
        {showBarChart && <BarChart csvData={csvData} />}
        {showPieChart && <PieChart csvData={csvData} />}
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
        onClick={() => generatePDF(chartRef)}
      >
        Download as PDF
      </button>
    </main>
  );
}
