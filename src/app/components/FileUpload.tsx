import { ChangeEvent } from "react";

type Props = { handleFileUpload: (file: File) => void };

export default function FileUpload({ handleFileUpload }: Props) {
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      handleFileUpload(file); // Call the callback function with the selected file
    }
  };

  return (
    <div id="upload-box" className="flex justify-center">
      <p className="mr-2">Please choose upload file:</p>
      <input
        type="file"
        id="csvFileInput"
        accept=".csv"
        onChange={handleFileChange}
      />
    </div>
  );
}
