import { useState, useEffect, useRef } from "react";
import { useAudio } from "@/lib/hooks";

interface AudioPlayerProps {
  onMinimize: () => void;
}

export default function AudioPlayer({ onMinimize }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  
  // Initialize audio element
  useEffect(() => {
    // Access the audio element from the HTML document
    const audio = document.getElementById("love-song") as HTMLAudioElement;
    audioRef.current = audio;
    
    if (audio) {
      audio.addEventListener("loadedmetadata", () => {
        setDuration(audio.duration);
      });
      
      audio.addEventListener("timeupdate", () => {
        setCurrentTime(audio.currentTime);
        setProgress((audio.currentTime / audio.duration) * 100);
      });
      
      audio.addEventListener("ended", () => {
        setIsPlaying(false);
      });
      
      // Trigger loadedmetadata if the audio is already loaded
      if (audio.readyState >= 2) {
        setDuration(audio.duration);
      }
    }
    
    return () => {
      if (audio) {
        audio.pause();
        // Remove event listeners
        audio.removeEventListener("loadedmetadata", () => {});
        audio.removeEventListener("timeupdate", () => {});
        audio.removeEventListener("ended", () => {});
      }
    };
  }, []);
  
  const togglePlay = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    
    setIsPlaying(!isPlaying);
  };
  
  // Format time in minutes:seconds
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };
  
  return (
    <div className="mx-auto mb-8 relative w-[300px] rounded-[20px] p-6 shadow-lg bg-gradient-to-r from-[#fdfaf5] to-[#f8b4c4]">
      <div className="flex items-center justify-between mb-4">
        <span className="font-dancing text-lg text-[#4a314d]">Can't Help Falling in Love</span>
        <div className="text-sm text-[#634265]">{formatTime(currentTime)} / {formatTime(duration)}</div>
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
      
      <div className="text-center mt-4 text-xs text-[#634265]">
        Elvis Presley
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
