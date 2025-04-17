import { useState } from "react";
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
