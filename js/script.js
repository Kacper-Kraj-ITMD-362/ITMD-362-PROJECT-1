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
    field.addEventListener("mouseover", function() {
      field.style.backgroundColor = "#b3e5fc"; 
    });

    field.addEventListener("mouseout", function() {
      field.style.backgroundColor = ""; 
    });
  });
});
