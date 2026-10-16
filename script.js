// Personalize este arquivo com seus dados.
const EMAIL_DESTINO = "seuemail@exemplo.com"; // Troque pelo seu e-mail.

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  const aberto = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(aberto));
  menuToggle.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
  menuToggle.textContent = aberto ? "×" : "☰";
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("contactForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const nome = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("message").value.trim();

  if (EMAIL_DESTINO === "seuemail@exemplo.com") {
    document.getElementById("formNote").textContent =
      "Antes de usar o formulário, abra script.js e substitua seuemail@exemplo.com pelo seu e-mail.";
    return;
  }

  const assunto = encodeURIComponent("Contato pelo portfólio — " + nome);
  const corpo = encodeURIComponent("Nome: " + nome + "\nE-mail: " + email + "\n\nMensagem:\n" + mensagem);
  window.location.href = `mailto:${EMAIL_DESTINO}?subject=${assunto}&body=${corpo}`;
});
