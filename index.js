document.addEventListener('keydown', function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    } else if (e.key === "ArrowRight") { 
      moveDodgerRight();
    }
  });
  
  function moveDodgerLeft() {
    var dodger = document.getElementById('dodger');
    var leftNumbers = dodger.style.left.replace('px', '');
    var left = parseInt(leftNumbers, 10);
  
    if (left > 0) { 
      dodger.style.left = `${left - 1}px`; 
    }
  }
  
  function moveDodgerRight() {
    var dodger = document.getElementById('dodger');
    var leftNumbers = dodger.style.left.replace('px', '');
    var left = parseInt(leftNumbers, 10);
  
    if (left < 360) { 
      dodger.style.left = `${left + 1}px`; 
    }
  }
  
  
  function preventDodgerEscapingRight() {
    var dodger = document.getElementById('dodger');
    var leftNumbers = dodger.style.left.replace('px', '');
    var left = parseInt(leftNumbers, 10);
  
    if (left >= 360) { 
      dodger.style.left = `${360}px`; 
    }
  }
  