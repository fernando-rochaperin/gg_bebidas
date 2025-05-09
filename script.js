const googleMapsBtn = document.getElementById('googleMapsBtn');
const wazeBtn = document.getElementById('wazeBtn');
const uberBtn = document.getElementById('uberBtn'); // Assuming you added an Uber button with this ID

const destinationLatitude = -12.9807068;
const destinationLongitude = -38.4313148;


googleMapsBtn.addEventListener('click', () => {
  window.location.href = 'https://www.google.com/maps/search/?api=1&query=-12.9807068,-38.4313148';
});

wazeBtn.addEventListener('click', () => {
  window.location.href = 'https://www.waze.com/ul?ll=-12.9807068%2C-38.4313148&navigate=yes';
});

// Assuming you want to open the Uber app or website. You might need a specific URL scheme for Uber.
// This is a placeholder for Uber functionality.
uberBtn.addEventListener('click', () => {
  // Replace with actual Uber link or app invocation
  window.location.href = 'https://m.uber.com/looking?action=setPickup&dropoff[latitude]=${destinationLatitude}&dropoff[longitude]=${destinationLongitude}'; 
});
