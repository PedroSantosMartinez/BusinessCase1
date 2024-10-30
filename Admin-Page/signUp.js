document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    // Get the values entered in the form
    const name = document.getElementById('name').value.trim();
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('phone').value;
    const authority = document.getElementById('authority').value;

    // You can now process these values, like sending them to a server or displaying a message
    alert(`User created: \nName: ${name} \nUsername: ${username} \nEmail: ${email} \nPhone: ${phone} \nAuthority Level: ${authority} \nNow entering Dashboard`);


   // Store data in localStorage
   localStorage.setItem('name', name);
   localStorage.setItem('username', username);
   localStorage.setItem('email', email);
   localStorage.setItem('phone', phone);

   // Redirect to dashboard after sign-up
   window.location.href = '../Dashboard-Page/dashboard.html';
});