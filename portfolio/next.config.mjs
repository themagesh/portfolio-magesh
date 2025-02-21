/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export", // Required for static exports
    images: {
      unoptimized: true, // Disable Next.js image optimization
    },
  };
  
  export default nextConfig; // Use ES module syntax
  