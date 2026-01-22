// src/components/Modal.jsx
"use client";
import { useState, useEffect } from "react";

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsOpen(true);
//     }, 4000); // 4 seconds
//     return () => clearTimeout(timer);
//   }, []);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      {/* Your Modal Content Here */}
      <button onClick={() => setIsOpen(false)}>Close</button>
    </div>
  );
}
