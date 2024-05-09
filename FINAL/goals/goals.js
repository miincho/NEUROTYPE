
document.addEventListener("DOMContentLoaded", function() {
    var title = document.querySelector('.title');
    var container = document.querySelector('.text-container');
    var topRow = document.querySelector('.topRow');
  
    // Verify elements are selected correctly
    console.log(title, container, topRow);

    // Listen for the end of the animation on the title
    title.addEventListener('animationend', function() {
        container.classList.add('visible');
        topRow.classList.add('visible');
    });
});