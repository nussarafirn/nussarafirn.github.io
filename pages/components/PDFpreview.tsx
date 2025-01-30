import React from 'react';

interface PDFPreviewProps {
  fileId: string;
  width?: string;
  height?: string;
}

const PDFPreview: React.FC<PDFPreviewProps> = ({ fileId, width = '100%', height = '600px' }) => {
  const googleDriveUrl = `https://drive.google.com/file/d/${fileId}/preview`;

  return (
    <div style={{ width, height }}>
      <iframe
        src={googleDriveUrl}
        style={{ width: '100%', height: '100%' }}
        frameBorder="0"
        allowFullScreen
        title="PDF Preview"
      />
    </div>
  );
};

export default PDFPreview;
