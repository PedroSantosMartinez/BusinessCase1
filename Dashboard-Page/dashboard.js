// Retrieve user information from localStorage
const username = localStorage.getItem('username');

// Display the username on the dashboard if it exists
if (username) {
    document.getElementById('displayUsername').textContent = username;
}

// Add event listeners to alarm buttons
document.querySelector('.alarm-on').addEventListener('click', () => {
    alert('Alarm turned ON');
    setAlarmStatus('on');  // Set alarm status to "on"
});

document.querySelector('.alarm-off').addEventListener('click', () => {
    alert('Alarm turned OFF');
    setAlarmStatus('off');  // Set alarm status to "off"
});

// Function to set the alarm status and change the color of the status indicator
function setAlarmStatus(status) {
    const statusIndicator = document.getElementById('statusIndicator');
    if (status === 'on') {
        statusIndicator.style.backgroundColor = 'green';
    } else {
        statusIndicator.style.backgroundColor = 'red';
    }
}

// Event listener for the "Add" button to navigate to sensor page
const sensorPageBtn = document.getElementById('sensorPageBtn');
if (sensorPageBtn) {
    sensorPageBtn.addEventListener('click', () => {
        window.location.href = '../Manage-Sensor/man-sensor.html'; // Link to the sensor page
    });
}

// Event listener for the "Manage/Create New User" button to navigate to user page
const userPageBtn = document.getElementById('userPageBtn')
if (userPageBtn) {
    userPageBtn.addEventListener('click', () => {
        window.location.href = "../Create-User/createUser.html";
    });
}
