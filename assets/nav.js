(async function loadNav(){
  const mount = document.getElementById("nav");
  if(!mount) return;

  // For the main site repo, nav lives at ./assets/nav.html
  const res = await fetch("./assets/nav.html", { cache: "no-store" });
  mount.innerHTML = await res.text();
})();
