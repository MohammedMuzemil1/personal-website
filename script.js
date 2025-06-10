function toggleCV() {
  const details = document.getElementById('cv-details');
  if (details.style.display === 'none' || details.style.display === '') {
    details.style.display = 'block';
  } else {
    details.style.display = 'none';
  }
}
// Hide CV details by default
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('cv-details').style.display = 'none';
  document.getElementById('year').textContent = new Date().getFullYear();
}); 