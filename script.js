// Retrieve user information from localStorage
const username = localStorage.getItem('username');

// Display the username on the dashboard if it exists
if (username) {
    document.getElementById('displayUsername').textContent = username;
}

// Add event listeners to alarm buttons
document.querySelector('.alarm-on').addEventListener('click', () => {
    alert('Alarm turned ON');
});

document.querySelector('.alarm-off').addEventListener('click', () => {
    alert('Alarm turned OFF');
});

// Get the button element for sensor page and add event listener
const sensorPageBtn = document.getElementById('sensorPageBtn');
if (sensorPageBtn) {
    sensorPageBtn.addEventListener('click', () => {
        window.location.href = 'sensor-page.html';
    });
}
