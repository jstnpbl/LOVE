import { photos, timelineEvents } from "@/data/appData";

export default function Memories() {
  return (
    <section>
      <h2 className="font-dancing text-3xl text-center mb-6">Our Beautiful Memories</h2>
      
      {/* Photo gallery container */}
      <div className="relative h-[500px] md:h-[600px] w-full overflow-hidden mb-12">
        {photos.map((photo, index) => (
          <div 
            key={index}
            className="polaroid absolute" 
            style={{ 
              "--rotation": `${photo.rotation}deg`,
              left: photo.position.left,
              top: photo.position.top,
            } as React.CSSProperties}
          >
            <img 
              src={photo.url} 
              alt={photo.caption} 
              className="w-56 h-40 object-cover"
            />
            <p className="font-satisfy text-center mt-2 text-[#4a314d]">{photo.caption}</p>
          </div>
        ))}
      </div>
      
      {/* Memories timeline */}
      <div className="relative max-w-4xl mx-auto pt-10 pb-20">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-[#ffd4df]"></div>
        
        {timelineEvents.map((event, index) => (
          <div key={index} className="relative z-10 mb-16">
            <div className="flex items-center">
              <div 
                className={`${event.iconBgColor} text-white rounded-full w-12 h-12 flex justify-center items-center shadow-md relative left-1/2 transform -translate-x-1/2 z-10`}
              >
                <i className={event.icon}></i>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 mt-4 max-w-lg mx-auto">
              <h3 className={`font-dancing text-2xl ${event.titleColor} mb-2`}>{event.title}</h3>
              <p className="text-[#4a314d]">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
