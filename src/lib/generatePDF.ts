import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { MutableRefObject } from "react";

export default async function generatePDF(chartRef: MutableRefObject<any>) {
  const chartContainer = chartRef.current;

  // Use html2canvas to capture the chart container as a canvas
  const canvas = await html2canvas(chartContainer);

  // Calculate the dimensions of the captured canvas
  const canvasWidth = canvas.width;
  const canvasHeight = canvas.height;

  // Define the size of a letter-size paper (8.5 x 11 inches)
  const letterSizeWidth = 8.5 * 72; // 1 inch = 72 points
  const letterSizeHeight = 11 * 72;

  // Calculate the scaling factors for width and height
  const scaleFactorWidth = letterSizeWidth / canvasWidth;
  const scaleFactorHeight = letterSizeHeight / canvasHeight;

  // Choose the minimum scaling factor to ensure the entire image fits on the page
  const scaleFactor = Math.min(scaleFactorWidth, scaleFactorHeight);

  // Calculate the scaled dimensions
  const scaledWidth = canvasWidth * scaleFactor;
  const scaledHeight = canvasHeight * scaleFactor;

  // Create a new jsPDF instance with the letter size
  const pdf = new jsPDF({
    unit: "pt",
    format: [letterSizeWidth, letterSizeHeight],
  });

  // Add the captured canvas as an image to the PDF with the scaled dimensions
  pdf.addImage(
    canvas.toDataURL("image/png"),
    "PNG",
    0,
    0,
    scaledWidth,
    scaledHeight
  );

  // Download the PDF
  pdf.save("chart.pdf");
}
