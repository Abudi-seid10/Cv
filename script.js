document.addEventListener('DOMContentLoaded', (event) => {
  console.log('CV website loaded successfully!');

  // Add click event listeners to social media buttons
  const socialButtons = document.querySelectorAll('.btn-icon');
  socialButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const socialNetwork = e.currentTarget.getAttribute('aria-label');
      console.log(`Clicked on ${socialNetwork} button`);
      // Here you can add functionality to open the respective social media profiles
    });
  });
});