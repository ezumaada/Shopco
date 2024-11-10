import React, { useState, useEffect } from 'react';

const Toast = ({ message, onClose }) => {
  useEffect(() => {
    // Auto-close the toast after 3 seconds
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [message, onClose]);

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg">
      {message}
    </div>
  );
};

export default Toast;
