import Papa from "papaparse";

export default function parseCSV(
  file: File,
  callback: (data: CSVRow[]) => void
): void {
  Papa.parse<CSVRow>(file, {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    complete: (results) => {
      if (results.data) {
        callback(results.data);
      }
    },
    error: (error) => {
      console.error("CSV Parsing Error:", error.message);
    },
  });
}
