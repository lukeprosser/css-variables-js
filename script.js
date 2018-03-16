// Select all inputs on page
const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
  // Add px suffix to data-sizing attribute for spacing and blur, and allow nothing for base color (to avoid undefined)
  const suffix = this.dataset.sizing || '';
  // Update variables by selecting entire document (root) and set property of base, spacing or blur via name attribute
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

// Listen for change event on each input
inputs.forEach(input => input.addEventListener('change', handleUpdate));
// Listen for mousemove event on each input
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
