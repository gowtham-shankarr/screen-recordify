"use client"
import React, { useState } from "react";
import Image from "next/image";

const Layout = ({ children }) => {

    const [canvasColor, setCanvasColor] = useState("bg-gradient-to-r from-red-500 to-orange-500")

  const bgColors = [
    "bg-gradient-to-r from-red-500 to-orange-500",
    "bg-gradient-to-r from-rose-400 to-red-500",
    "bg-gradient-to-r from-pink-500 to-rose-500",
    "bg-gradient-to-r from-amber-200 to-yellow-400",
    "bg-gradient-to-r from-amber-200 to-yellow-500",
    "bg-gradient-to-r from-amber-500 to-pink-500",
    "bg-gradient-to-r from-violet-200 to-pink-200",
    "bg-gradient-to-r from-blue-200 to-cyan-200",
    "bg-gradient-to-r from-teal-200 to-teal-500",
    "bg-gradient-to-r from-lime-400 to-lime-500",
    "bg-gradient-to-r from-teal-400 to-yellow-200",
    "bg-gradient-to-r from-emerald-400 to-cyan-400",
    "bg-gradient-to-r from-indigo-400 to-cyan-400",
    "bg-gradient-to-r from-cyan-500 to-blue-500",
    "bg-gradient-to-r from-indigo-500 to-blue-500",
    "bg-gradient-to-r from-blue-600 to-violet-600",
    "bg-gradient-to-r from-fuchsia-500 to-cyan-500",
    "bg-gradient-to-r from-fuchsia-600 to-pink-600",
    "bg-gradient-to-r from-fuchsia-600 to-purple-600",
    "bg-gradient-to-r from-fuchsia-500 to-pink-500",
    "bg-gradient-to-r from-violet-500 to-purple-500",
    "bg-gradient-to-r from-violet-600 to-indigo-600",
    "bg-gradient-to-r from-purple-500 to-purple-900",
    "bg-gradient-to-r from-blue-800 to-indigo-900",
    "bg-gradient-to-r from-neutral-300 to-stone-400",
    "bg-gradient-to-r from-stone-500 to-stone-700",
    "bg-gradient-to-r from-slate-300 to-slate-500",
    "bg-gradient-to-r from-emerald-500 to-emerald-900"
  ];

  const handleColorClick = (color) => {
    setCanvasColor(color);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-800 text-white p-4 editor-header">
      <div className="flex justify-between w-100">
      <Image src="/screen-recordify-logo.svg" alt="Vercel Logo" width={150} height={100} />
      <div>
        <button className="export-btn">Export video</button>
      </div>
      </div>
      </header>
      <main className="flex flex-1">
        <div className="flex-1 bg-gray-200 p-8 editor-main">{children}
        <div className="canvas-container">
        <canvas className={`canvas-bg ${canvasColor} canvas-size`}></canvas>
        </div>
        
        <div>
            tes
        </div>
        </div>
        <aside className="editor-sidebar bg-gray-300 p-4">
          <div className="editor-right-blocks">
            <div className="text-sm text-white ">Background</div>
            <div className="flex flex-wrap pt-3">
              {bgColors.map((bgColor, index) => (
                <div
                  key={index} onClick={() => handleColorClick(bgColor)}
                  className={`w-8 h-8 m-2 rounded-lg shadow-md ${bgColor}`}
                ></div>
              ))}
            </div>
          </div>

          <div className="editor-right-blocks pt-5">
            <div className="text-sm text-white ">Padding</div>
            <div className="pt-3">
              Rang slider
            </div>
          </div>

          <div className="editor-right-blocks pt-5">
            <div className="text-sm text-white ">Shadow</div>
            <div className="pt-3">
              Rang slider
            </div>
          </div>

          <div className="editor-right-blocks pt-5">
            <div className="text-sm text-white ">Border Radius</div>
            <div className="pt-3">
              Rang slider
            </div>
          </div>


        </aside>
      </main>
    </div>
  );
};

export default Layout;