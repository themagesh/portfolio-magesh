import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 rounded-full bg-pink-500 opacity-70 pointer-events-none"
      style={{
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
    />
  );
}
