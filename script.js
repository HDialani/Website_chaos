// JavaScript for handling project dropdown
function navigateToProject() {
    let dropdown = document.getElementById("project");
    let selectedProject = dropdown.options[dropdown.selectedIndex].value;

    if (selectedProject) {
        window.location.href = selectedProject;
    }
}

document.addEventListener("DOMContentLoaded", function() {
  const scrollToTopButton = document.getElementById("scrollToTopButton");

  // Show the button when the user scrolls down 20px from the top of the document
  window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollToTopButton.style.display = "block";
    } else {
      scrollToTopButton.style.display = "none";
    }
  };

  // Scroll to the top of the page when the button is clicked
  scrollToTopButton.addEventListener("click", function() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
  });
});
