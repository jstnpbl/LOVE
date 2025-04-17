import { useEffect, useRef } from "react";

export default function Header() {
  const heartsBackground = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!heartsBackground.current) return;
    
    const container = heartsBackground.current;
    const containerWidth = container.clientWidth;
    
    // Create background hearts
    for (let i = 0; i < 20; i++) {
      const heart = document.createElement("div");
      heart.className = "heart";
      
      const size = Math.random() * 15 + 10;
      const left = Math.random() * containerWidth;
      const duration = Math.random() * 10 + 10;
      const delay = Math.random() * 5;
      
      heart.style.width = `${size}px`;
      heart.style.height = `${size}px`;
      heart.style.left = `${left}px`;
      heart.style.bottom = "-20px";
      heart.style.animationDuration = `${duration}s`;
      heart.style.animationDelay = `${delay}s`;
      
      container.appendChild(heart);
    }
    
    // Cleanup function
    return () => {
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, []);
  
  return (
    <header className="relative overflow-hidden pt-10 pb-6 px-4 md:py-16 text-center">
      <div className="absolute inset-0 -z-10 opacity-10">
        <div ref={heartsBackground} id="hearts-background"></div>
      </div>
      
      <h1 className="font-dancing text-4xl md:text-6xl font-bold text-[#f8b4c4] mb-4 animate-heartbeat">
        For My Love
      </h1>
      
      <p className="font-satisfy text-xl md:text-2xl text-[#634265] max-w-md mx-auto">
        A collection of our memories and all the reasons why I love you
      </p>
      
      <div className="mt-6 inline-block animate-float">
        <i className="fa fa-heart text-[#f8b4c4] text-2xl"></i>
      </div>
    </header>
  );
}
