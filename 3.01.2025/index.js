document.querySelector('.email-section button').addEventListener('click', () => {
  alert('You have subscribed successfully!');
});
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".signin-form");
  const successMessage = document.createElement("p");

  successMessage.textContent = "Form submitted successfully!";
  successMessage.style.color = "green";
  successMessage.style.fontSize = "1.2em";
  successMessage.style.marginTop = "10px";
  successMessage.style.display = "none"; // Initially hidden

  form.appendChild(successMessage);

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the form from refreshing the page

    // Perform any validation or additional processing here

    successMessage.style.display = "block"; // Show success message
    form.reset(); // Reset the form fields
  });
});