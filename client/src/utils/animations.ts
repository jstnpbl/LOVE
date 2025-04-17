export function createHearts(container: HTMLElement, count: number = 20) {
  for (let i = 0; i < count; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    
    const size = Math.random() * 15 + 10;
    const left = Math.random() * container.clientWidth;
    const duration = Math.random() * 10 + 10;
    const delay = Math.random() * 5;
    
    heart.style.width = `${size}px`;
    heart.style.height = `${size}px`;
    heart.style.left = `${left}px`;
    heart.style.bottom = "-20px";
    heart.style.animationDuration = `${duration}s`;
    heart.style.animationDelay = `${delay}s`;
    
    container.appendChild(heart);
  }
}

export function createConfetti(container: HTMLElement, count: number = 100) {
  container.innerHTML = "";
  
  const colors = ['#f8b4c4', '#b3a6d4', '#f9d77e', '#fdfaf5', '#4a314d'];
  
  for (let i = 0; i < count; i++) {
    const confetti = document.createElement("div");
    
    const color = colors[Math.floor(Math.random() * colors.length)];
    const size = Math.random() * 10 + 5;
    const left = Math.random() * 100;
    const fallDuration = (Math.random() * 3) + 2;
    const shakeDuration = (Math.random() * 2) + 1;
    const shakeDistance = (Math.random() * 60 - 30);
    
    confetti.style.position = "absolute";
    confetti.style.width = `${size}px`;
    confetti.style.height = `${size}px`;
    confetti.style.backgroundColor = color;
    confetti.style.opacity = "0.7";
    confetti.style.top = "-10px";
    confetti.style.left = `${left}vw`;
    
    confetti.style.animation = `confetti-fall ${fallDuration}s ease-in forwards, confetti-shake ${shakeDuration}s ease-in-out alternate infinite`;
    
    // Using custom properties for animations
    confetti.style.setProperty('--fall-duration', `${fallDuration}s`);
    confetti.style.setProperty('--shake-duration', `${shakeDuration}s`);
    confetti.style.setProperty('--shake-distance', `${shakeDistance}px`);
    
    container.appendChild(confetti);
    
    // Remove confetti after animation
    setTimeout(() => {
      confetti.remove();
    }, fallDuration * 1000);
  }
}
