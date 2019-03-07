function openMobileMenu() {
  let menu = document.getElementById('mobile-menu').style.width = '250px';
  document.getElementsByClassName('mobile-menu-button')[0].style.display = 'none';
}
function closeMobileMenu() {
  document.getElementById('mobile-menu').style.width = '0';
  document.getElementsByClassName('mobile-menu-button')[0].style.display = 'block';
}