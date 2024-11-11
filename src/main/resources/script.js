document.getElementById("registrationForm").addEventListener("submit", function(event) {
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const terms = document.getElementById("terms").checked;
    const errorMsg = document.getElementById("errorMsg");

    errorMsg.textContent = "";

    if (!fullName || !email || !password || !confirmPassword || !terms) {
        errorMsg.textContent = "All fields are required and terms must be accepted.";
        event.preventDefault();
    } else if (password !== confirmPassword) {
        errorMsg.textContent = "Passwords do not match.";
        event.preventDefault();
    }
});
