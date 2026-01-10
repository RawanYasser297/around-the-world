// src/components/Header/Logo.jsx
import React from "react";

export default function Logo() {
  return (
    <div className="flex items-center space-x-2">
      {/* ممكن يكون صورة svg أو نص */}
      <img src="images/logo.svg" alt="Logo" className="h-8 w-auto" />
      <span className="text-[15px] md:text-xl font-bold text-text" >Around The World</span>
    </div>
  );
}
