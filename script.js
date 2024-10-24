// Retrieve user information from localStorage
const username = localStorage.getItem('username');

// Display the username on the dashboard
document.getElementById('displayUsername').textContent = username;

document.querySelector('.alarm-on').addEventListener('click', () => {
    alert('Alarm turned ON');
});

document.querySelector('.alarm-off').addEventListener('click', () => {
    alert('Alarm turned OFF');
});

// Get the button element
const sensorPageBtn = document.getElementById('sensorPageBtn');

// Add an event listener to handle button click
sensorPageBtn.addEventListener('click', function() {
    // Redirect the user to the sensor page (sensor-page.html)
    window.location.href = 'sensor-page.html';
});

