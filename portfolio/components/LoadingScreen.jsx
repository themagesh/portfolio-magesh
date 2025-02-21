"use client";
import { useState, useEffect } from "react";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return oldProgress + 5;
      });
    }, 100);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-gray-900 text-white z-50">
      <div className="w-64 h-1 bg-gray-700 relative overflow-hidden">
        <div
          className="h-full bg-[#ff64ab] transition-all duration-200 ease-in-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}
