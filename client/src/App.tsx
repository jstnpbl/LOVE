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

  // Create floating hearts background
  useEffect(() => {
    const createFloatingHearts = () => {
      const container = document.createElement('div');
      container.className = 'animated-background';
      document.body.appendChild(container);
      
      // Create many more hearts
      for (let i = 0; i < 100; i++) {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        
        // Randomize heart properties
        const size = Math.random() * 20 + 10; // Bigger hearts
        const left = Math.random() * 100;
        const duration = Math.random() * 15 + 10; // Varied speed
        const delay = Math.random() * 15; // Staggered starts
        const drift = Math.random() * 150 - 75; // More sideways movement
        
        heart.style.width = `${size}px`;
        heart.style.height = `${size}px`;
        heart.style.left = `${left}%`;
        heart.style.bottom = '-50px';
        heart.style.opacity = `${Math.random() * 0.5 + 0.3}`; // More visible
        heart.style.setProperty('--float-duration', `${duration}s`);
        heart.style.setProperty('--heart-drift', `${drift}px`);
        heart.style.animationDelay = `${delay}s`;
        
        // Randomize color
        const colors = ['#f8b4c4', '#b3a6d4', '#ffd4df', '#ff94a4', '#ffbdbd'];
        heart.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        container.appendChild(heart);
      }
    };
    
    createFloatingHearts();
    
    // Recreate hearts periodically to ensure constant animation
    const heartInterval = setInterval(createFloatingHearts, 30000);
    
    return () => {
      clearInterval(heartInterval);
      const container = document.querySelector('.animated-background');
      if (container) {
        document.body.removeChild(container);
      }
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
