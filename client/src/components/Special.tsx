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
  
  const handleCelebrateClick = () => {
    onTriggerConfetti(150);
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
        
        <h3 className="font-dancing text-2xl text-[#4a314d] mb-4 text-center">My Love Notes to You</h3>
        
        <p className="mb-4 leading-relaxed">
          Just wanted to say you popped into my head, and it made me smile. Hope you're having a great day! 😊
        </p>
        
        <p className="mb-4 leading-relaxed">
          Thinking of all the reasons I'm lucky to have you. You're pretty amazing, you know? ❤️
        </p>
        
        <p className="mb-4 leading-relaxed">
          Hey beautiful! Sending a little bit of love your way to brighten your day. ✨
        </p>
        
        <p className="mb-4 leading-relaxed">
          Just a little note to remind you how much you mean to me. You make my world a better place. 🥰
        </p>
        
        <p className="mb-4 leading-relaxed">
          Hope this note finds you happy and smiling. Can't wait to see you! 🤗
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
