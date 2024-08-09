import { useState, useEffect } from 'react';

const quotes = [
  "The best way to predict the future is to invent it.",
  "Technology should fade into the background of our lives.",
  "We're building the future we want to live in.",
  "Innovation isn't just about new products. It's about new ways of thinking.",
  "Simplicity is the ultimate sophistication."
];

const Index = () => {
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-4">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;700&display=swap');
          body {
            font-family: 'Space Grotesk', sans-serif;
          }
        `}
      </style>
      <h1 className="text-4xl font-bold mb-8">Carl Pei</h1>
      <p className="text-xl mb-12">Entrepreneur. Innovator. Visionary.</p>
      <div className="text-2xl font-bold text-center max-w-2xl">
        "{quotes[currentQuote]}"
      </div>
    </div>
  );
};

export default Index;
