// LoadingSpinner.jsx
import React from 'react';

const LoadingSpinner = () => {
  return (
    <div style={{
      display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'
    }}>
      <div className="spinner" />
      <style>{`
        .spinner {
          border: 8px solid #f3f3f3;
          border-top: 8px solid rgb(52, 219, 110);
          border-radius: 50%;
          width: 60px;
          height: 60px;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default LoadingSpinner;
