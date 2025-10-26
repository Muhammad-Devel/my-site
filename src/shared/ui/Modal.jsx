import React, { useEffect } from "react";

export default function Modal({ url, isOpen, onClose }) {
  // ESC bosilganda modalni yopish
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  // Agar ochilmagan bo‘lsa — hech narsa chiqarmaslik
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 
                 backdrop-blur-sm transition-all duration-300"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-gray-900 rounded-xl shadow-xl p-4 
                   w-[90%] md:w-[80%] h-[80%] relative"
        onClick={(e) => e.stopPropagation()} // modal ichiga bosilganda yopilmasin
      >
        {/* Yopish tugmasi */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-200
                     text-2xl font-bold"
        >
          ✕
        </button>

        {/* Live Demo preview */}
        <iframe
          src={url}
          title="Project Preview"
          className="w-full h-full rounded-lg border-none"
        ></iframe>
      </div>
    </div>
  );
}
