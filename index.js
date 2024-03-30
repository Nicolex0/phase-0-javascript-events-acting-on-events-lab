document.addEventListener('keydown', function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    } else if (e.key === "ArrowRight") { // Add condition for ArrowRight key
      moveDodgerRight();
    }
  });
  
  function moveDodgerLeft() {
    var dodger = document.getElementById('dodger');
    var leftNumbers = dodger.style.left.replace('px', '');
    var left = parseInt(leftNumbers, 10);
  
    if (left > 0) { // Check if dodger is already at the left edge
      dodger.style.left = `${left - 1}px`; // Move the dodger left
    }
  }
  
  function moveDodgerRight() {
    var dodger = document.getElementById('dodger');
    var leftNumbers = dodger.style.left.replace('px', '');
    var left = parseInt(leftNumbers, 10);
  
    if (left < 360) { // Check if dodger is not at the right edge
      dodger.style.left = `${left + 1}px`; // Move the dodger right
    }
  }
  
  // Added a function to prevent the dodger from escaping off the right-hand side
  function preventDodgerEscapingRight() {
    var dodger = document.getElementById('dodger');
    var leftNumbers = dodger.style.left.replace('px', '');
    var left = parseInt(leftNumbers, 10);
  
    if (left >= 360) { // Check if dodger has reached or exceeded the right edge
      dodger.style.left = `${360}px`; // Set dodger's position to the right edge
    }
  }
  