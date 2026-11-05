
const status = document.getElementById("app-status");

status.textContent =
  "The deferred script executed after HTML parsing. Document state: " +
  document.readyState + ".";
