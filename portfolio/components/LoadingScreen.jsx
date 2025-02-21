export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gray-900 text-white">
      {/* Rotating & Moving HR Line */}
      <div className="relative w-32 h-1 bg-gray-700 overflow-hidden rounded-full">
        <div className="absolute inset-0 w-full h-full bg-pink-500 animate-rotate-move"></div>
      </div>
    </div>
  );
}
