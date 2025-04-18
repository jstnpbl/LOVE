import { specialPhotos } from "@/data/appData";

interface SpecialProps {
  onTriggerConfetti: (count: number) => void;
}

export default function Special({ onTriggerConfetti }: SpecialProps) {
  const handleMessageReveal = () => {
    setTimeout(() => {
      onTriggerConfetti(30);
    }, 400);
  };
  
  // Enhanced confetti function that shows LOTS of confetti
  const handleCelebrateClick = () => {
    onTriggerConfetti(300); // Way more confetti!
    
    // Create additional confetti directly for better visibility
    setTimeout(() => {
      const container = document.body;
      const colors = ['#f8b4c4', '#b3a6d4', '#f9d77e', '#ffb3c1', '#ff758f'];
      
      for (let i = 0; i < 150; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.zIndex = '9999';
        confetti.style.width = `${Math.random() * 15 + 5}px`;
        confetti.style.height = `${Math.random() * 15 + 5}px`;
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.top = '0';
        confetti.style.opacity = '0.9';
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
        
        const fallDuration = Math.random() * 4 + 3;
        const rotation = Math.random() * 360;
        
        confetti.style.animation = `direct-fall ${fallDuration}s forwards`;
        confetti.style.transform = `rotate(${rotation}deg)`;
        
        // Add the confetti to the document body
        container.appendChild(confetti);
        
        // Remove after animation completes
        setTimeout(() => {
          confetti.remove();
        }, fallDuration * 1000);
      }
    }, 100);
    
    // Add the animation style
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes direct-fall {
        0% { top: -5%; transform: translateX(0) rotate(0deg); }
        25% { transform: translateX(${Math.random() * 100 - 50}px) rotate(90deg); }
        50% { transform: translateX(${Math.random() * 200 - 100}px) rotate(180deg); }
        75% { transform: translateX(${Math.random() * 100 - 50}px) rotate(270deg); }
        100% { top: 105%; transform: translateX(${Math.random() * 200 - 100}px) rotate(360deg); }
      }
    `;
    document.head.appendChild(style);
    
    // Remove the style after animation completes
    setTimeout(() => {
      document.head.removeChild(style);
    }, 7000);
  };
  
  return (
    <section>
      <h2 className="font-dancing text-3xl text-center mb-8">Special Moments</h2>
      
      {/* Surprise Message */}
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 mb-12 text-center border-4 border-dashed border-[#f8b4c4]">
        <h3 className="font-dancing text-2xl text-[#f8b4c4] mb-4">A Message For You</h3>
        <p className="text-[#4a314d] mb-6">Click the heart to reveal a special message</p>
        
        <div 
          onClick={handleMessageReveal}
          className="reveal-container cursor-pointer mx-auto w-64 h-64 relative"
        >
          <div className="reveal-card w-full h-full">
            <div className="reveal-front flex items-center justify-center bg-[#f8b4c4] bg-opacity-20 rounded-full">
              <i className="fas fa-heart text-8xl text-[#f8b4c4] animate-pulse-slow"></i>
            </div>
            <div className="reveal-back bg-[#b3a6d4] rounded-full flex items-center justify-center p-4">
              <p className="font-satisfy text-xl text-white">
                You make every day of my life special just by being you. I love you more than words can express.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Interactive Timeline */}
      <div className="max-w-4xl mx-auto">
        <h3 className="font-dancing text-2xl text-center mb-6">Our Journey Together</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {specialPhotos.map((photo, index) => (
            <div key={index} className="photo-peek rounded-lg overflow-hidden shadow-md">
              <img 
                src={photo.url} 
                alt={photo.title} 
                className="w-full h-48 object-cover" 
              />
              <div className="p-4 bg-white">
                <h4 className="font-dancing text-lg text-[#f8b4c4]">{photo.title}</h4>
                <p className="text-sm text-[#4a314d]">{photo.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Love Letter */}
      <div className="max-w-2xl mx-auto mt-16 bg-[#f5f0e5] bg-opacity-70 p-8 rounded-lg shadow-md relative font-satisfy">
        <div className="absolute -top-3 -right-3">
          <i className="fas fa-heart text-2xl text-[#f8b4c4] animate-heartbeat"></i>
        </div>
        
        <h3 className="font-dancing text-2xl text-[#4a314d] mb-4 text-center">My Love Letter to You</h3>
        
        <p className="mb-4 leading-relaxed">
          My dearest,
        </p>
        
        <p className="mb-4 leading-relaxed">
          From the moment you came into my life, everything changed. Your love has been my greatest adventure, my deepest comfort, and my truest joy.
        </p>
        
        <p className="mb-4 leading-relaxed">
          Every day with you is a gift. I cherish the way you laugh, how your eyes crinkle when you smile, and how your hand feels in mine. The little things you do - the texts when we're apart, the coffee you make just how I like it, the way you listen when I need to talk - they all mean the world to me.
        </p>
        
        <p className="mb-4 leading-relaxed">
          I promise to love you, support you, and stand by your side through all of life's adventures. You're my best friend, my confidant, my partner in everything.
        </p>
        
        <p className="mb-4 leading-relaxed">
          Thank you for being you, and for choosing to share your life with me.
        </p>
        
        <p className="text-right">
          With all my love,<br />
          Me
        </p>
        
        <div className="text-center mt-6">
          <button 
            onClick={handleCelebrateClick}
            className="bg-[#f8b4c4] hover:bg-[#e5a1b1] text-white font-medium py-2 px-4 rounded-full shadow-md transition-colors"
          >
            <i className="fas fa-heart mr-2"></i>Celebrate Our Love
          </button>
        </div>
      </div>
    </section>
  );
}
