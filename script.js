(function () {
  "use strict";

  // Footer year
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });

  // Mobile menu
  var menuBtn = document.querySelector(".menu-btn");
  var nav = document.getElementById("site-nav");
  if (menuBtn && nav) {
    var setMenu = function (open) {
      menuBtn.setAttribute("aria-expanded", String(open));
      nav.classList.toggle("is-open", open);
    };
    menuBtn.addEventListener("click", function () {
      setMenu(menuBtn.getAttribute("aria-expanded") !== "true");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) setMenu(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setMenu(false);
    });
  }

  // Floating WhatsApp button: without JS it opens Maruti's chat;
  // with JS it opens a small chooser for Maruti or Ram.
  var fab = document.querySelector(".wa-fab");
  var panel = document.getElementById("wa-panel");
  if (fab && panel) {
    fab.setAttribute("role", "button");
    fab.setAttribute("aria-expanded", "false");
    var setPanel = function (open) {
      panel.hidden = !open;
      fab.setAttribute("aria-expanded", String(open));
    };
    fab.addEventListener("click", function (e) {
      e.preventDefault();
      setPanel(panel.hidden);
    });
    fab.addEventListener("keydown", function (e) {
      if (e.key === " ") { e.preventDefault(); setPanel(panel.hidden); }
    });
    document.addEventListener("click", function (e) {
      if (!panel.hidden && !e.target.closest(".wa-float")) setPanel(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !panel.hidden) { setPanel(false); fab.focus(); }
    });
  }

  // Enquiry form: builds a WhatsApp message and opens it
  var form = document.getElementById("enquiry");
  if (form) {
    var error = document.getElementById("form-error");
    var field = function (n) { return form.elements.namedItem(n); };
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = field("name").value.trim();
      var service = field("service").value;
      var place = field("place").value;
      var details = field("details").value.trim();
      var picked = form.querySelector('input[name="to"]:checked');
      var to = picked ? picked.value : "918217039257";

      var missing = [];
      if (!name) missing.push("your name");
      if (!service) missing.push("the service you need");
      if (missing.length) {
        error.textContent = "Please add " + missing.join(" and ") + ".";
        error.hidden = false;
        (name ? field("service") : field("name")).focus();
        return;
      }
      error.hidden = true;

      var lines = [
        "Hello Shriram Fabrications and Constructions,",
        "",
        "Name: " + name,
        "Service: " + service,
        "Site location: " + place
      ];
      if (details) lines.push("Details: " + details);

      var url = "https://wa.me/" + to + "?text=" + encodeURIComponent(lines.join("\n"));
      var win = window.open(url, "_blank");
      if (win) { win.opener = null; } else { window.location.href = url; }
    });
  }
})();
