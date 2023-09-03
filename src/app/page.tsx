"use client";

import { useState } from "react";

import FileUpload from "./components/FileUpload";
import GoogleChart from "./components/GoogleChart";
import parseCSV from "@/lib/parseCSV";

export default function Home() {
  const [csvData, setCSVData] = useState<CSVRow[] | null>(null);

  const handleFileUpload = (file: File) => {
    if (file) {
      parseCSV(file, (data) => {
        // Handle the parsed CSV data
        setCSVData(data);
        console.log(data);
      });
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <FileUpload handleFileUpload={handleFileUpload} />
      <GoogleChart />
    </main>
  );
}
