/* v5 — small progressive enhancement (no frameworks) */

(function () {
  "use strict";

  // Tabs (program)
  document.querySelectorAll("[data-tabs]").forEach((tabsRoot) => {
    const buttons = tabsRoot.querySelectorAll("[role='tab']");
    const panels = tabsRoot.querySelectorAll("[role='tabpanel']");

    function activate(id) {
      buttons.forEach((b) => {
        const isActive = b.getAttribute("data-tab") === id;
        b.setAttribute("aria-selected", isActive ? "true" : "false");
      });
      panels.forEach((p) => {
        const isActive = p.getAttribute("data-panel") === id;
        p.hidden = !isActive;
      });
    }

    buttons.forEach((btn) => {
      btn.addEventListener("click", () => activate(btn.getAttribute("data-tab")));
    });

    // default
    if (buttons.length) activate(buttons[0].getAttribute("data-tab"));
  });

  // Copy address button
  document.querySelectorAll("[data-copy]").forEach((btn) => {
    const text = btn.getAttribute("data-copy");
    btn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(text);
        const old = btn.textContent;
        btn.textContent = "Copied";
        setTimeout(() => (btn.textContent = old), 1200);
      } catch (e) {
        window.prompt("Copy this:", text);
      }
    });
  });
})();
