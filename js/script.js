document.addEventListener("DOMContentLoaded", function() {
  const submitButton = document.getElementById("submitbutton");
  if (submitButton) {
    submitButton.addEventListener("mouseover", function() {
      this.style.transform = "scale(1.1)";
    });

    submitButton.addEventListener("mouseout", function() {
      this.style.transform = "scale(1)";
    });
  }

  const fields = document.querySelectorAll("input[type='text'], input[type='email']");
  fields.forEach(function(field) {
    field.addEventListener("mouseover", function() {
      field.style.transform = "scale(1.05)"; 
    });

    field.addEventListener("mouseout", function() {
      field.style.transform = "scale(1)"; 
    });
  });
});
