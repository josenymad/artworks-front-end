import React from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const ArtworkPreview = ({ formData, alert }) => {
  const { image } = formData;
  return (
    <div className="artwork-preview">
      <Document file={image}>
        <Page
          pageNumber={1}
          renderAnnotationLayer={false}
          renderTextLayer={false}
        />
      </Document>
      <p className="artwork-preview__alert">{alert}</p>
    </div>
  );
};

export default ArtworkPreview;
