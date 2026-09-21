// Animações de entrada conforme a página é rolada
const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, {
  threshold: 0.12
});

revealElements.forEach((element) => observer.observe(element));

// Rolagem suave
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}

// Surpresa final
function surprise() {
  const message = document.getElementById("surprise-message");
  message.classList.toggle("show");

  if (message.classList.contains("show")) {
    createHearts(18);
  }
}

// Corações flutuando
function createHeart() {
  const container = document.querySelector(".hearts");
  const heart = document.createElement("span");

  heart.className = "floating-heart";
  heart.textContent = Math.random() > 0.5 ? "♥" : "♡";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (12 + Math.random() * 20) + "px";
  heart.style.animationDuration = (5 + Math.random() * 6) + "s";

  container.appendChild(heart);

  setTimeout(() => heart.remove(), 12000);
}

function createHearts(amount) {
  for (let i = 0; i < amount; i++) {
    setTimeout(createHeart, i * 100);
  }
}

// Pequena quantidade de corações durante a navegação
setInterval(() => {
  if (Math.random() > 0.45) createHeart();
}, 3500);
