import { useState } from 'react';

export function PdfPreview({ title, pdfUrl, description }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Card */}
      <div className="pdf-card" onClick={() => setIsOpen(true)}>
        <h3>{title}</h3>
        <p>{description}</p>
        <span>Click to preview</span>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="modal-overlay" onClick={() => setIsOpen(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close" onClick={() => setIsOpen(false)}>×</button>
            <iframe src={pdfUrl} width="100%" height="100%" />
            <a href={pdfUrl} download className="download-btn">
              Download PDF
            </a>
          </div>
        </div>
      )}
    </>
  );
}