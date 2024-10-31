// Sign Up Validation
document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    // Get the values entered in the form
    const name = document.getElementById('name').value.trim();
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm').value;

    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    

    // displaying a message
    alert(` Sign Up Successful
        User created
        Now entering Dashboard`);


   // Store data in localStorage
   localStorage.setItem('name', name);
   localStorage.setItem('username', username);
   localStorage.setItem('email', email);
   localStorage.setItem('password', password);

   // Redirect to dashboard after sign-up
   window.location.href = '../Dashboard-Page/dashboard.html';
});