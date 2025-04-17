import { useState } from "react";

interface AudioPlayerProps {
  onMinimize: () => void;
}

export default function AudioPlayer({ onMinimize }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(30);
  
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };
  
  return (
    <div className="mx-auto mb-8 relative w-[300px] rounded-[20px] p-6 shadow-lg bg-gradient-to-r from-[#fdfaf5] to-[#f8b4c4]">
      <div className="flex items-center justify-between mb-4">
        <span className="font-dancing text-lg text-[#4a314d]">Our Song</span>
        <div className="text-sm text-[#634265]">3:45</div>
      </div>
      
      <div className="timeline mb-4 bg-white/50 w-full h-[5px] rounded-full cursor-pointer relative">
        <div 
          className="progress bg-[#4a314d] h-full rounded-full transition-all" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      
      <div className="flex justify-center space-x-8">
        <button className="text-[#4a314d] hover:text-[#f8b4c4] transition-colors">
          <i className="fas fa-step-backward"></i>
        </button>
        <button 
          onClick={togglePlay}
          className="text-2xl text-[#4a314d] hover:text-[#f8b4c4] transition-colors"
        >
          <i className={`fas ${isPlaying ? 'fa-pause' : 'fa-play'}`}></i>
        </button>
        <button className="text-[#4a314d] hover:text-[#f8b4c4] transition-colors">
          <i className="fas fa-step-forward"></i>
        </button>
      </div>
      
      <button 
        onClick={onMinimize}
        className="absolute -top-12 -right-4 text-2xl cursor-pointer text-[#f8b4c4]"
      >
        <i className="fas fa-times-circle"></i>
      </button>
    </div>
  );
}
