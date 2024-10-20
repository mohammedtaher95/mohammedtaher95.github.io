const headerItems = document.querySelectorAll('.menu-item');

headerItems.forEach(item => {
    // Mouseover event to change color when hovering
    try {
        item.addEventListener('mouseover', function() {
          this.classList.add('text-wrapper-2');
        });
  
        item.addEventListener('mouseout', function() {
          this.classList.remove('text-wrapper-2');
        });
      } catch (error) {
        console.error('Error adding event listener for:', item, error);
      }
  });