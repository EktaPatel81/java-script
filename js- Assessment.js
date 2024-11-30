document.getElementById("registrationForm").addEventListener("submit", function (e) 
{
    e.preventDefault(); // Prevent form submission
    const form = e.target;
    const inputs = form.querySelectorAll("input, select");
    let valid = true;
  
    // Clear previous error messages
    form.querySelectorAll(".error").forEach(error => error.remove());
  
    inputs.forEach(input => {
      if (!input.checkValidity()) {
        valid = false;
        const error = document.createElement("div");
        error.className = "error";
        error.textContent = `${input.name} is required or invalid.`;
        input.after(error);
      }
});
  
    const password = form.querySelector("#password").value;
    const confirmPassword = form.querySelector("#confirmPassword").value;
  
    if (password !== confirmPassword) {
      valid = false;
      const error = document.createElement("div");
      error.className = "error";
      error.textContent = "Passwords do not match.";
      form.querySelector("#confirmPassword").after(error);
    }
  
    if (valid) {
      alert("Form submitted successfully!");
      form.reset(); // Reset form after submission
    }
  });
  
  // Allow only numeric input for mobile number
  document.getElementById("mobile").addEventListener("keypress", function (e) 
  {
    if (!/[0-9]/.test(e.key)) {
      e.preventDefault();
    }
  });
  