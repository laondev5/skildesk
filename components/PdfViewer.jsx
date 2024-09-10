"use client";
import { Document, Page, pdfjs } from "react-pdf";
//import pdfjsWorker from "react-pdf/node_modules/pdfjs-dist/build/pdf.worker.entry";
import { useState } from "react";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
export default function PdfViewer({ pdfData }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoad = ({ numPages }) => {
    setNumPages(numPages);
  };

  const handlePreviousPage = () => {
    setPageNumber(pageNumber - 1);
  };

  const handleNextPage = () => {
    setPageNumber(pageNumber + 1);
  };

  return (
    <div>
      <Document file={pdfData} onLoadSuccess={onDocumentLoad}>
        <Page pageNumber={pageNumber} />
      </Document>
      <div>
        <button onClick={handlePreviousPage} disabled={pageNumber === 1}>
          Previous
        </button>
        <button onClick={handleNextPage} disabled={pageNumber === numPages}>
          Next
        </button>
      </div>
    </div>
  );
}
