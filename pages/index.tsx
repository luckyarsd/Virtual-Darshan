import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';

export default function Home() {
  const initialCount = 10987;
  const [visitorCount, setVisitorCount] = useState(initialCount);

  // useRef to keep track of count without causing re-renders every second
  const countRef = useRef(visitorCount);

  useEffect(() => {
    // Update ref whenever visitorCount changes
    countRef.current = visitorCount;
  }, [visitorCount]);

  useEffect(() => {
    // Increase visitor count by 1 every 60 seconds
    const interval = setInterval(() => {
      // Update state using latest ref value
      setVisitorCount(countRef.current + 1);
    }, 2000); // 60000 ms = 1 minute

    // Cleanup on unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col bg-gradient-to-br from-yellow-100 to-orange-200 overflow-hidden">

      {/* Background Image */}
      <img
        src="home.jpg"	
        alt="Temple Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-white bg-opacity-10 backdrop-blur-sm z-0" />

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center flex-grow max-w-3xl mx-auto px-6 py-16 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-yellow-900 drop-shadow-md mb-6">
          Virtual Darshan
        </h1>
        <p className="text-xl md:text-2xl text-gray-900 mb-10 max-w-xl">
          Step into the sacred — Experience India’s divine temples from anywhere, anytime.
        </p>
        <Link
          href="/temples"
          className="inline-block bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition"
        >
          Explore Temples
        </Link>

        {/* Modern Visitor Count Display */}
        <div className="mt-12 text-center select-none">
          <span className="inline-block px-5 py-3 rounded-full bg-yellow-100 bg-opacity-50 shadow-lg backdrop-blur-md text-yellow-900 font-semibold tracking-wider text-xl md:text-2xl animate-pulseGlow">
            🌐 <span className="mr-2">Devotees so far:</span>
            <span className="ml-2 text-yellow-700 font-extrabold text-3xl md:text-4xl">
              {visitorCount.toLocaleString()}
            </span>
          </span>
        </div>

      </main>

      {/* Styled JSX for glowing animation */}
      <style jsx>{`
        @keyframes pulseGlow {
          0%, 100% {
            text-shadow: 0 0 6px rgba(234,179,8,0.9), 0 0 20px rgba(234,179,8,0.7);
            transform: scale(1);
          }
          50% {
            text-shadow: 0 0 12px rgba(234,179,8,1), 0 0 30px rgba(234,179,8,0.9);
            transform: scale(1.05);
          }
        }

        .animate-pulseGlow {
          animation: pulseGlow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

