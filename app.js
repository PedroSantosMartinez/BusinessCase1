// Sign Up Validation
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('signupUsername').value.trim();
    const email = document.getElementById('signupEmail').value.trim();
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('signupConfirmPassword').value;

    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    const signupSuccess = document.getElementById('signupSuccess');

    // Clear previous error messages
    passwordError.style.display = 'none';
    confirmPasswordError.style.display = 'none';
    signupSuccess.style.display = 'none';

    // Check password requirements
    if (password.length < 16 || !/[A-Z]/.test(password) || !/[!@#$%^&*]/.test(password)) {
        passwordError.textContent = 'Password must be at least 16 characters, include a capital letter, and a special character.';
        passwordError.style.display = 'block';
        return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        confirmPasswordError.textContent = 'Passwords do not match.';
        confirmPasswordError.style.display = 'block';
        return;
    }

    // Check if username or email already exists
    const users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.some(user => user.username === username || user.email === email)) {
        passwordError.textContent = 'Username or email already exists.';
        passwordError.style.display = 'block';
        return;
    }

    // Save the new user to localStorage
    users.push({ username, email, password });
    localStorage.setItem('users', JSON.stringify(users));

    // Clear form fields
    document.getElementById('signupUsername').value = '';
    document.getElementById('signupEmail').value = '';
    document.getElementById('signupPassword').value = '';
    document.getElementById('signupConfirmPassword').value = '';
    
    // Show success message
    signupSuccess.style.display = 'block';

    
    
    
    
    // Show modal with all users
    seeMoreBtn.addEventListener('click', function() {
        modalUserList.innerHTML = ''; // Clear previous list
        users.forEach(user => {
            const userItem = document.createElement('li');
            userItem.textContent = `${user.name} - ${user.username} - ${user.email} - ${user.password} - ${user.authority}`;
            modalUserList.appendChild(userItem);
        });
        userModal.style.display = 'flex'; // Show modal
    });

    // Close modal when 'X' is clicked
    closeModal.addEventListener('click', function() {
        userModal.style.display = 'none';
    });

    // Close modal when clicking outside of modal content
    window.addEventListener('click', function(event) {
        if (event.target == userModal) {
            userModal.style.display = 'none';
        }
    });
});
