document.addEventListener("DOMContentLoaded", () => {
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  
  const links = [
    { href: "index.html", text: "🏠 Home" },
    { href: "obs-settings.html", text: "⚙️ OBS Settings" },
    { href: "problematic-greenscreen.html", text: "🔦 Fix Hotspots" },
    { href: "bottom-light-issue.html", text: "💡 Fix Bottom Light" },
    { href: "captions.html", text: "💬 Captions" },
    { href: "vdo-ninja-captions.html", text: "🎨 VDO.Ninja CSS" }
  ];

  // For index.html, we also have hash links
  const hashLinks = currentPath === "index.html" || currentPath === "" ? [
    { href: "#bad", text: "❌ Bad example" },
    { href: "#good", text: "✅ Good example" },
    { href: "#video", text: "🎬 Video" }
  ] : [];

  const allLinks = [...links, ...hashLinks];

  const html = `
    <nav class="top">
      <div class="inner" style="align-items: center;">
        ${allLinks.map(l => `<a href="${l.href}" class="${currentPath === l.href ? 'active' : ''}">${l.text}</a>`).join('')}
        <input type="text" id="nav-search" placeholder="🔍 Search menu..." style="border-radius: 999px; padding: 6px 14px; border: 1px solid var(--line); background: var(--panel-2); color: var(--text); outline: none; margin-left: auto; font-family: inherit; font-size: 13px;">
      </div>
    </nav>
  `;

  document.body.insertAdjacentHTML('afterbegin', html);

  const search = document.getElementById("nav-search");
  search.addEventListener("input", (e) => {
    const term = e.target.value.toLowerCase();
    const navLinks = document.querySelectorAll("nav.top a");
    navLinks.forEach(link => {
      if (link.textContent.toLowerCase().includes(term)) {
        link.style.display = "";
      } else {
        link.style.display = "none";
      }
    });
  });
});
