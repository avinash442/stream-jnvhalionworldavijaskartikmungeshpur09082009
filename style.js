// Handle form submission
document.getElementById('streamForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting to the server

    // Collect form data
    const name = document.getElementById('name').value;
    const stream = document.getElementById('stream').value;
    const takingTC = document.querySelector('input[name="takingTC"]:checked').value;
    const guidance = document.getElementById('guidance').value;

    // Display the form response
    document.getElementById('streamForm').reset(); // Reset the form after submission
    document.getElementById('formResponse').style.display = 'block'; // Show response message

    // Optionally, log the form data (you can remove this or send it to a server later)
    console.log('Name: ' + name);
    console.log('Stream Selected: ' + stream);
    console.log('Taking TC: ' + takingTC);
    console.log('Guidance: ' + guidance);
});
