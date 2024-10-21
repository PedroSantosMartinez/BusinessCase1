document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    // Get the values entered in the form
    const name = document.getElementById('name').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const authority = document.getElementById('authority').value;

    // You can now process these values, like sending them to a server or displaying a message
    alert(`User created: \nName: ${name} \nUsername: ${username} \nEmail: ${email} \nPhone: ${phone} \nAuthority Level: ${authority}`);
});
