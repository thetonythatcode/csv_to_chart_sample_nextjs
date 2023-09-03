export default function categorizeData(parsedData: CSVRow[]) {
  const dataTable = [];
  const index: { [key: string]: number } = {};
  dataTable.push(["Hour", "Long", "Short"]);
  for (let i = 0; i < 24; i++) {
    const hour = i.toString().padStart(2, "0") + ":00";
    index[hour] = i + 1;
    dataTable.push([hour, 0, 0]);
  }

  for (const row of parsedData) {
    const hour = row["Hour"].slice(0, -2) + "00";
    const idx = index[hour];
    const position = row["Position"] === "Long" ? 1 : 2;
    const value = row["Value"];

    if (typeof dataTable[idx][position] === "number") {
      dataTable[idx][position] = (dataTable[idx][position] as number) + value;
    }
  }

  return dataTable;
}
