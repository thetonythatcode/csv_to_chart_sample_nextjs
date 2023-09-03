export default function generateEmptyData() {
  const dataTable = [];
  dataTable.push(["Hour", "Long", "Short"]);
  for (let i = 0; i < 24; i++) {
    const hour = i.toString().padStart(2, "0") + ":00";
    dataTable.push([hour, 0, 0]);
  }
  return dataTable;
}
