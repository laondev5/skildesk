"use client";
import { Document, Page, workerSrc } from "react-pdf";
import { useState } from "react";
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
      <Document
        file={new Blob([pdfData], { type: "application/pdf" })}
        onLoadSuccess={onDocumentLoad}
        workerSrc={workerSrc}
      >
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
