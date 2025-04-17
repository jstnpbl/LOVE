import { useEffect, useRef } from "react";

interface ConfettiProps {
  count?: number;
}

export default function Confetti({ count = 100 }: ConfettiProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    container.innerHTML = "";
    
    const colors = ['#f8b4c4', '#b3a6d4', '#f9d77e', '#fdfaf5', '#4a314d'];
    
    for (let i = 0; i < count; i++) {
      const confetti = document.createElement("div");
      
      const color = colors[Math.floor(Math.random() * colors.length)];
      const size = Math.random() * 10 + 5;
      const left = Math.random() * 100;
      const fallDuration = (Math.random() * 3) + 2;
      const shakeDuration = (Math.random() * 2) + 1;
      const shakeDistance = (Math.random() * 60 - 30);
      
      confetti.style.position = "absolute";
      confetti.style.width = `${size}px`;
      confetti.style.height = `${size}px`;
      confetti.style.backgroundColor = color;
      confetti.style.opacity = "0.7";
      confetti.style.top = "-10px";
      confetti.style.left = `${left}vw`;
      
      confetti.style.animation = `confetti-fall ${fallDuration}s ease-in forwards, confetti-shake ${shakeDuration}s ease-in-out alternate infinite`;
      
      // Using custom properties for animations
      confetti.style.setProperty('--fall-duration', `${fallDuration}s`);
      confetti.style.setProperty('--shake-duration', `${shakeDuration}s`);
      confetti.style.setProperty('--shake-distance', `${shakeDistance}px`);
      
      container.appendChild(confetti);
      
      // Remove confetti after animation
      setTimeout(() => {
        confetti.remove();
      }, fallDuration * 1000);
    }
  }, [count]);
  
  return (
    <div 
      ref={containerRef}
      className="fixed w-full h-full top-0 left-0 pointer-events-none z-50"
    ></div>
  );
}
