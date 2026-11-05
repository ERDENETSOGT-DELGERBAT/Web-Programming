
const appStatus = document.getElementById("app-status");

appStatus.textContent =
  "The deferred script executed after HTML parsing. Document state: " +
  document.readyState;
