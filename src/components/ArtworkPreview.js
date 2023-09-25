import React from "react";
import { Document, pdfjs, Thumbnail } from "react-pdf";
import "../styles/artwork-preview.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const ArtworkPreview = ({ formData, alert }) => {
  const { image } = formData;
  return (
    <div className="artwork-preview">
      <Document file={image}>
        <Thumbnail
          pageNumber={1}
          renderAnnotationLayer={false}
          renderTextLayer={false}
          width={300}
        />
      </Document>
      <p className="artwork-preview__alert">{alert}</p>
    </div>
  );
};

export default ArtworkPreview;
