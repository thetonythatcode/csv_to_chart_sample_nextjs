"use client";

import { useEffect, useState } from "react";

import FileUpload from "./components/FileUpload";
import GoogleChart from "./components/GoogleChart";
import parseCSV from "@/lib/parseCSV";
import categorizeData from "@/lib/categorizeData";
import generateEmptyData from "@/lib/generateEmptyData";

export default function Home() {
  const [csvData, setCSVData] = useState<CategorizedData>(generateEmptyData());

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
      <GoogleChart csvData={csvData} />
    </main>
  );
}
