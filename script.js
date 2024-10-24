document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting and refreshing the page

    // Get input values from the form fields
    const username = document.getElementById('signupUsername').value.trim();
    const email = document.getElementById('signupEmail').value.trim();
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('signupConfirmPassword').value;

    // Error and success message elements
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    const signupSuccess = document.getElementById('signupSuccess');

    // Helper function to display an error message
    const displayError = (element, message) => {
        element.textContent = message;
        element.style.display = 'block'; // Show error message
    };

    // Clear all error and success messages before validation
    passwordError.style.display = confirmPasswordError.style.display = signupSuccess.style.display = 'none';

    // Validate password strength
    if (password.length < 16 || !/[A-Z]/.test(password) || !/[!@#$%^&*]/.test(password)) {
        return displayError(passwordError, 'Password must be at least 16 characters, include a capital letter, and a special character.');
    }

    // Check if the two passwords match
    if (password !== confirmPassword) {
        return displayError(confirmPasswordError, 'Passwords do not match.');
    }

    // Retrieve existing users from localStorage or initialize an empty array if none exist
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Check if the username or email already exists in the list of users
    if (users.some(user => user.username === username || user.email === email)) {
        return displayError(passwordError, 'Username or email already exists.');
    }

    // Save the new user to localStorage (encryption of password is recommended in real applications)
    users.push({ username, email, password });
    localStorage.setItem('users', JSON.stringify(users)); // Store updated user list

    // Clear the form inputs after successful submission
    document.querySelectorAll('.create-user-form input').forEach(input => input.value = '');

    // Display success message to inform the user of a successful sign-up
    signupSuccess.style.display = 'block';
});

// Modal functionality
const modal = document.getElementById("myModal");
const openModalBtn = document.getElementById("openModalBtn");
const closeBtn = document.querySelector(".close");
const userListModal = document.getElementById("userListModal");

// Function to display the user list in the modal
function displayUserList() {
    // Clear the existing list
    userListModal.innerHTML = '';

    // Get users from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    if (users.length === 0) {
        const noUserItem = document.createElement('li');
        noUserItem.textContent = 'No registered users found.';
        userListModal.appendChild(noUserItem);
    } else {
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = `Username: ${user.username}, Email: ${user.email}`;
            userListModal.appendChild(listItem);
        });
    }
}

// When the user clicks the button, open the modal and display the users
openModalBtn.onclick = function() {
    displayUserList();
    modal.style.display = "flex";
}

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}