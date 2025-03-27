document.getElementById("submitbutton").addEventListener("mouseover", function() {
    this.style.backgroundColor = "#0d304f";
    this.style.transform = "scale(1.1)";
});

document.getElementById("submitbutton").addEventListener("mouseout", function() {
    this.style.backgroundColor = "";
    this.style.transform = "scale(1)";
});

document.addEventListener("DOMContentLoaded", function() {
  var fields = document.querySelectorAll("input[type='text'], input[type='email']");

  fields.forEach(function(field) {
    field.addEventListener("focus", function() {
      field.style.backgroundColor = "#e0f7fa"; 
    });

    field.addEventListener("blur", function() {
      field.style.backgroundColor = "";
    });
  });
});