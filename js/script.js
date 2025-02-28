document.getElementById("submitbutton").addEventListener("mouseover", function() {
    this.style.backgroundColor = "#FFFFFF";
    this.style.transform = "scale(1.1)";
});

document.getElementById("submitbutton").addEventListener("mouseout", function() {
    this.style.backgroundColor = "";
    this.style.transform = "scale(1)";
});