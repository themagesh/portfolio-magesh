import 'tailwindcss/tailwind.css';
import '@/styles/globals.css';
import { ThemeProvider } from 'next-themes';
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import LoadingScreen from "@/components/LoadingScreen";
import CustomCursor from "@/components/CustomCursor"; // Import cursor

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);

    setTimeout(() => setLoading(false), 1500);

    const handleStart = () => setLoading(true);
    const handleStop = () => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);

  if (!mounted) return null;

  return (
    <ThemeProvider attribute="class">
      <CustomCursor /> {/* Add custom cursor */}
      {loading ? (
        <LoadingScreen />
      ) : (
        <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen">
          <Component {...pageProps} />
        </main>
      )}
    </ThemeProvider>
  );
}
