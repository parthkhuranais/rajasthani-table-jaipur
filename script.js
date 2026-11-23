// ===== EDIT HERE: single place for the site name and contact details =====
const SITE = {
  name: "The Rajasthani Table by Neetu",
  phoneDisplay: "+91 99283 29781",
  phoneIntl: "919928329781",
  message: "Hello, I'd like to reserve an evening at The Rajasthani Table."
};
// =========================================================================

const wa = "https://wa.me/" + SITE.phoneIntl + "?text=" + encodeURIComponent(SITE.message);
document.querySelectorAll("[data-site-name]").forEach(e => e.textContent = SITE.name);
document.querySelectorAll("[data-wa]").forEach(e => e.href = wa);
document.querySelectorAll("[data-tel]").forEach(e => e.href = "tel:+" + SITE.phoneIntl);
document.querySelectorAll("[data-phone]").forEach(e => e.textContent = SITE.phoneDisplay);
document.title = document.title.replace(/The Rajasthani Table by Neetu/g, SITE.name);

const btn = document.querySelector(".nav-toggle"), nav = document.getElementById("nav");
if (btn && nav) {
  btn.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    btn.setAttribute("aria-expanded", open);
  });
}
