import React from "react";
import { Document, pdfjs, Page } from "react-pdf";
import "../styles/artwork-preview.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const ArtworkPreview = ({ formData, alert }) => {
  const { image } = formData;
  return (
    <div className="artwork-preview">
      <div className="artwork-preview__thumbnail">
        <Document file={image}>
          <Page
            pageNumber={1}
            renderAnnotationLayer={false}
            renderTextLayer={false}
            width={300}
          />
        </Document>
      </div>
      <p className="artwork-preview__alert">{alert}</p>
    </div>
  );
};

export default ArtworkPreview;
