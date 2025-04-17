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
    
    // Create confetti pieces across the entire viewport
    for (let i = 0; i < count; i++) {
      const confetti = document.createElement("div");
      
      const color = colors[Math.floor(Math.random() * colors.length)];
      const size = Math.random() * 10 + 5;
      
      // Distribute the confetti across the entire screen width
      const left = Math.random() * 100;
      
      // Varying starting positions - not just at the top
      const startingTop = Math.random() * -50; // Start above the viewport
      
      // Longer and more varied animation duration
      const fallDuration = Math.random() * 4 + 3; // 3-7 seconds
      const shakeDuration = Math.random() * 2 + 1;
      const shakeDistance = Math.random() * 100 - 50; // More lateral movement
      
      confetti.style.position = "absolute";
      confetti.style.width = `${size}px`;
      confetti.style.height = `${size}px`;
      confetti.style.backgroundColor = color;
      confetti.style.opacity = "0.9"; // More visible
      confetti.style.top = `${startingTop}%`;
      confetti.style.left = `${left}%`;
      confetti.style.borderRadius = Math.random() > 0.5 ? "50%" : "0"; // Mix of circles and squares
      confetti.style.zIndex = "100"; // Make sure it's on top
      
      // Apply rotation and scaling for more fun effects
      const rotation = Math.random() * 360;
      confetti.style.transform = `rotate(${rotation}deg)`;
      
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
