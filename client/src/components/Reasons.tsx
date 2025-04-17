import { useState } from "react";
import { reasons } from "@/data/appData";

interface ReasonsProps {
  onTriggerConfetti: (count: number) => void;
}

export default function Reasons({ onTriggerConfetti }: ReasonsProps) {
  const [showAllReasons, setShowAllReasons] = useState(false);
  const [buttonText, setButtonText] = useState("Show More Reasons");
  const [buttonStyle, setButtonStyle] = useState("bg-[#f8b4c4] hover:bg-[#e5a1b1]");
  
  const handleShowMoreReasons = () => {
    setShowAllReasons(true);
    setButtonText("I Love Everything About You");
    setButtonStyle("bg-[#b3a6d4]");
    onTriggerConfetti(50);
  };
  
  const displayedReasons = showAllReasons ? reasons : reasons.slice(0, 6);
  
  return (
    <section>
      <h2 className="font-dancing text-3xl text-center mb-8">Why I Love You</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedReasons.map((reason, index) => (
          <div 
            key={index} 
            className={`message-card bg-white rounded-lg shadow-md p-6 border-t-4 ${reason.borderColor}`}
          >
            <div className={`${reason.iconColor} text-4xl mb-3`}>
              <i className={reason.icon}></i>
            </div>
            <h3 className="font-dancing text-xl mb-2">{reason.title}</h3>
            <p className="text-[#4a314d]">{reason.description}</p>
          </div>
        ))}
      </div>
      
      {!showAllReasons && (
        <div className="text-center mt-12">
          <button 
            onClick={handleShowMoreReasons}
            className={`${buttonStyle} text-white font-medium py-3 px-6 rounded-full shadow-md transition-colors`}
          >
            <i className="fas fa-plus mr-2"></i>{buttonText}
          </button>
        </div>
      )}
    </section>
  );
}
