import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import "@/lib/utils";

// Add custom styles for the app
const style = document.createElement("style");
style.textContent = `
  @keyframes heartbeat {
    0% { transform: scale(1); }
    25% { transform: scale(1.1); }
    40% { transform: scale(1); }
    60% { transform: scale(1.1); }
    100% { transform: scale(1); }
  }
  
  .animate-heartbeat {
    animation: heartbeat 1.5s infinite;
  }
  
  .polaroid {
    background: white;
    padding: 1rem;
    padding-bottom: 2.5rem;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    transform: rotate(var(--rotation));
    transition: all 0.3s ease;
  }
  
  .polaroid:hover {
    transform: rotate(0deg) scale(1.05);
    box-shadow: 0 10px 20px rgba(0,0,0,0.15);
    z-index: 10;
  }
  
  .message-card {
    transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  
  .message-card:hover {
    transform: translateY(-10px);
  }
  
  .heart {
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: hsl(345, 83%, 84%);
    transform: rotate(-45deg);
    animation-name: float-heart;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    opacity: 0;
  }
  
  .heart:before, .heart:after {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: hsl(345, 83%, 84%);
    border-radius: 50%;
  }
  
  .heart:before {
    top: -10px;
    left: 0;
  }
  
  .heart:after {
    top: 0;
    left: 10px;
  }
  
  @keyframes float-heart {
    0% {
      opacity: 0;
      transform: rotate(-45deg) translateY(0);
    }
    20% {
      opacity: 0.8;
    }
    100% {
      opacity: 0;
      transform: rotate(-45deg) translateY(-100px);
    }
  }
  
  .photo-peek {
    transform-origin: center;
    transition: transform 0.5s, z-index 0s;
  }
  
  .photo-peek:hover {
    transform: scale(1.1) translateY(-10px);
    z-index: 50;
  }
  
  .reveal-container {
    perspective: 1000px;
  }
  
  .reveal-card {
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }
  
  .reveal-container:hover .reveal-card {
    transform: rotateY(180deg);
  }
  
  .reveal-front, .reveal-back {
    backface-visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  
  .reveal-back {
    transform: rotateY(180deg);
  }

  @keyframes confetti-fall {
    to {
      transform: translateY(100vh);
    }
  }
  
  @keyframes confetti-shake {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(var(--shake-distance));
    }
  }

  .font-dancing {
    font-family: 'Dancing Script', cursive;
  }
  
  .font-poppins {
    font-family: 'Poppins', sans-serif;
  }
  
  .font-satisfy {
    font-family: 'Satisfy', cursive;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
  
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
  
  .animate-pulse-slow {
    animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
`;

document.head.appendChild(style);

createRoot(document.getElementById("root")!).render(<App />);
