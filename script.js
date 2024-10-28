document.getElementById('alarmForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting and refreshing the page

    // Get input values from the form fields
    const alarmType = document.getElementById('alarmType').value.trim();
    const alarmName = document.getElementById('alarmName').value.trim();
    const floor = document.getElementById('floor').value.trim();
    const delayTime = document.getElementById('delayTime').value.trim();

    const signupSuccess = document.getElementById('createSuccess');

    // Retrieve existing alarms from localStorage or initialize an empty array if none exist
    const alarms = JSON.parse(localStorage.getItem('alarms')) || [];

    // Save the new alarms to localStorage
    alarms.push({ alarmType, alarmName, floor, delayTime });
    localStorage.setItem('alarms', JSON.stringify(alarms));

    // Clear the form inputs after successful submission
    document.querySelectorAll('.create-alarm-form input').forEach(input => input.value = '');

    // Display success message
    signupSuccess.style.display = 'inline'; // or 'block' if preferred
});

// Modal functionality
const modal = document.getElementById("myModal");
const openModalBtn = document.getElementById("openModalBtn");
const closeBtn = document.querySelector(".close");
const alarmListModal = document.getElementById("alarmListModal");

// Function to display the alarm list in the modal
function displayAlarmList() {
    // Clear the existing list
    alarmListModal.innerHTML = '';

    // Get alarms from localStorage
    const alarms = JSON.parse(localStorage.getItem('alarms')) || [];

    if (alarms.length === 0) {
        const noAlarmsItem = document.createElement('li');
        noAlarmsItem.textContent = 'No registered alarms found.';
        alarmListModal.appendChild(noAlarmsItem);
    } else {
        alarms.forEach(alarm => {
            const listItem = document.createElement('li');
            listItem.textContent = `AlarmName: ${alarm.alarmName}, AlarmType: ${alarm.alarmType}, FloorName: ${alarm.floor}, DelayTime: ${alarm.delayTime}`;
            alarmListModal.appendChild(listItem);
        });
    }
}

// Open the modal and display the alarm list
openModalBtn.onclick = function() {
    displayAlarmList();
    modal.style.display = "flex";
}

// Close the modal
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Close the modal when clicking outside
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}