
const executionState = document.readyState;
const analyticsStatus = document.createElement("p");

analyticsStatus.className = "result";

if (executionState === "loading") {
  analyticsStatus.textContent =
    "The async script executed while HTML was still being parsed.";
} else {
  analyticsStatus.textContent =
    "The async script executed after HTML parsing had finished. Document state: " +
    executionState;
}

function showAnalyticsResult() {
  document.getElementById("analytics-status").replaceWith(analyticsStatus);
}

if (document.getElementById("analytics-status")) {
  showAnalyticsResult();
} else {
  document.addEventListener("DOMContentLoaded", showAnalyticsResult, {
    once: true
  });
}
