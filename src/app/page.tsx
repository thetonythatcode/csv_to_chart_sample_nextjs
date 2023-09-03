import GoogleChart from "./components/GoogleChart";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div id="upload-box" className="flex justify-center">
        <p className="mr-2">Please choose upload file:</p>
        <input type="file" id="csvFileInput" accept=".csv" />
      </div>
      <GoogleChart />
    </main>
  );
}
