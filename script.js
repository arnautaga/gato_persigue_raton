const gato = document.getElementById("gato");

let mouseX = 0;
let mouseY = 0;
let currentX = window.innerWidth / 2;
let currentY = window.innerHeight / 2;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animate() {
  // Interpolación lineal para suavizar
  currentX += (mouseX - currentX) * 0.1;
  currentY += (mouseY - currentY) * 0.1;

  // Movimiento
  gato.style.transform = `translate(${currentX - 50}px, ${currentY - 50}px)`;

  // Mirar hacia el puntero
  if (mouseX < currentX) {
    gato.style.transform += " scaleX(1)";
  } else {
    gato.style.transform += " scaleX(-1)";
  }

  requestAnimationFrame(animate);
}

animate();
