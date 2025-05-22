// script.js

// Countdown Timer
const countdownElement = document.getElementById('countdown');

// Set the anniversary date (adjust year if necessary)
const anniversaryDate = new Date("2025-06-01T00:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = anniversaryDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  if (distance < 0) {
    clearInterval(interval);
    countdownElement.innerHTML = "Happy Anniversary!";
  }
}

// Update countdown every second
const interval = setInterval(updateCountdown, 1000);

// Function to open a tab
function openTab(tabName) {
  // Hide all tabs
  const tabs = document.querySelectorAll('.tab-content');
  tabs.forEach(tab => tab.classList.remove('active'));

  // Remove active class from all tab buttons
  const tabButtons = document.querySelectorAll('.tab');
  tabButtons.forEach(button => button.classList.remove('active'));

  // Show the selected tab and mark it as active
  document.getElementById(tabName).classList.add('active');
  const activeTab = Array.from(tabButtons).find(tab => tab.textContent.toLowerCase() === tabName);
  if (activeTab) activeTab.classList.add('active');
}
