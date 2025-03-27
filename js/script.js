document.addEventListener("DOMContentLoaded", function() {
  const submitButton = document.getElementById("submitbutton");
  if (submitButton) {
    submitButton.addEventListener("mouseover", function() {
      this.style.backgroundColor = "#0d304f";
      this.style.transform = "scale(1.1)";
    });

    submitButton.addEventListener("mouseout", function() {
      this.style.backgroundColor = "";
      this.style.transform = "scale(1)";
    });
  }

  // Fields hover effect
  const fields = document.querySelectorAll("input[type='text'], input[type='email']");
  fields.forEach(function(field) {
    field.addEventListener("mouseover", function() {
      field.style.backgroundColor = "#b3e5fc"; 
    });

    field.addEventListener("mouseout", function() {
      field.style.backgroundColor = "";
    });
	
	 field.addEventListener("focus", function() {
      field.style.backgroundColor = "#b3e5fc"; 
    });

    field.addEventListener("blur", function() {
      field.style.backgroundColor = "";
    });	
  });
});
