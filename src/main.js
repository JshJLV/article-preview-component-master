const socials = document.getElementById("socials");
const shareBtn = document.getElementById("share-button");

shareBtn.addEventListener("click", () => {
  socials.classList.toggle("active");
  shareBtn.classList.toggle("active");
});
