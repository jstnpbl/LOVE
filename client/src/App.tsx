import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/Header";
import AudioPlayer from "@/components/AudioPlayer";
import NavigationTabs from "@/components/NavigationTabs";
import Memories from "@/components/Memories";
import Reasons from "@/components/Reasons";
import Special from "@/components/Special";
import Confetti from "@/components/Confetti";

function App() {
  const [activeTab, setActiveTab] = useState<"memories" | "reasons" | "special">("memories");
  const [showAudioPlayer, setShowAudioPlayer] = useState(true);
  const [showConfetti, setShowConfetti] = useState(false);
  const [confettiConfig, setConfettiConfig] = useState({ count: 100 });

  // Create floating hearts background directly in the render method instead of useEffect
  useEffect(() => {
    const createFloatingHearts = () => {
      // Remove any existing container to avoid duplicates
      const existingContainer = document.querySelector('.animated-background');
      if (existingContainer) {
        document.body.removeChild(existingContainer);
      }
    
      const container = document.createElement('div');
      container.className = 'animated-background';
      container.style.position = "fixed";
      container.style.top = "0";
      container.style.left = "0";
      container.style.width = "100%";
      container.style.height = "100%";
      container.style.zIndex = "1"; // Make it visible above background
      container.style.pointerEvents = "none";
      document.body.appendChild(container);
      
      // Create LOTS of hearts
      for (let i = 0; i < 200; i++) {
        const heart = document.createElement('div');
        
        // Create actual heart shape instead of using CSS transforms
        heart.innerHTML = "❤️"; // Unicode heart
        heart.style.position = "absolute";
        heart.style.fontSize = `${Math.random() * 24 + 16}px`; // Bigger hearts
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.top = `${Math.random() * 100}%`; // Distribute across whole screen
        heart.style.opacity = "0.7"; // Very visible
        heart.style.color = ["#ff4d6d", "#ff758f", "#ff8fa3", "#ffb3c1", "#c5308b"][Math.floor(Math.random() * 5)];
        heart.style.animation = `floating-heart ${Math.random() * 15 + 10}s ease-in-out infinite`;
        heart.style.animationDelay = `${Math.random() * 10}s`;
        
        container.appendChild(heart);
      }
    };
    
    // Initial creation
    createFloatingHearts();
    
    // Recreate hearts every 20 seconds to ensure they're visible
    const heartInterval = setInterval(createFloatingHearts, 20000);
    
    return () => {
      clearInterval(heartInterval);
      const container = document.querySelector('.animated-background');
      if (container) {
        document.body.removeChild(container);
      }
    };
  }, []);
  
  // Add direct styling to the CSS
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes floating-heart {
        0% { transform: translateY(0) rotate(0deg); }
        50% { transform: translateY(-20px) rotate(10deg); }
        100% { transform: translateY(0) rotate(0deg); }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const triggerConfetti = (count: number = 100) => {
    setConfettiConfig({ count });
    setShowConfetti(true);

    // Hide confetti after animation completes
    setTimeout(() => {
      setShowConfetti(false);
    }, 5000);
  };

  return (
    <div className="bg-[#fdfaf5] font-poppins text-[#4a314d] overflow-x-hidden min-h-screen">
      <Header />
      
      {showAudioPlayer && (
        <AudioPlayer onMinimize={() => setShowAudioPlayer(false)} />
      )}

      <main className="container mx-auto px-4 pb-20">
        <NavigationTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        
        {activeTab === "memories" && <Memories />}
        {activeTab === "reasons" && <Reasons onTriggerConfetti={triggerConfetti} />}
        {activeTab === "special" && <Special onTriggerConfetti={triggerConfetti} />}
      </main>

      {showConfetti && <Confetti {...confettiConfig} />}

      <footer className="bg-[#4a314d] text-white py-6 text-center">
        <p className="font-dancing text-xl">
          Made with <i className="fas fa-heart text-[#f8b4c4] mx-1"></i> just for you
        </p>
        <p className="text-sm mt-2 text-[#ffd4df]">© Forever & Always</p>
      </footer>
      
      <Toaster />
    </div>
  );
}

export default App;
