interface NavigationTabsProps {
  activeTab: "memories" | "reasons" | "special";
  setActiveTab: (tab: "memories" | "reasons" | "special") => void;
}

export default function NavigationTabs({ activeTab, setActiveTab }: NavigationTabsProps) {
  return (
    <nav className="bg-white bg-opacity-70 backdrop-blur-sm rounded-full shadow-md py-2 px-1 mx-auto mb-10 max-w-md flex justify-around">
      <button 
        onClick={() => setActiveTab("memories")}
        className={`px-4 py-2 rounded-full font-medium transition-colors ${
          activeTab === "memories" 
            ? "bg-[#f8b4c4] text-white" 
            : "text-[#4a314d] hover:text-[#f8b4c4]"
        }`}
      >
        <i className="fas fa-camera mr-2"></i>Memories
      </button>
      
      <button 
        onClick={() => setActiveTab("reasons")}
        className={`px-4 py-2 rounded-full font-medium transition-colors ${
          activeTab === "reasons" 
            ? "bg-[#f8b4c4] text-white" 
            : "text-[#4a314d] hover:text-[#f8b4c4]"
        }`}
      >
        <i className="fas fa-heart mr-2"></i>Reasons
      </button>
      
      <button 
        onClick={() => setActiveTab("special")}
        className={`px-4 py-2 rounded-full font-medium transition-colors ${
          activeTab === "special" 
            ? "bg-[#f8b4c4] text-white" 
            : "text-[#4a314d] hover:text-[#f8b4c4]"
        }`}
      >
        <i className="fas fa-gift mr-2"></i>Special
      </button>
    </nav>
  );
}
