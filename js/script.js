/* Countdown Timer */
var countDownDate = new Date("Sep 26, 2025 15:00:00").getTime();
// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  // Display the result in the element with id="demo"
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

window.addEventListener('scroll', function() {
  var navbar = document.getElementById('navbar');
  if (window.scrollY > 50) { // Adjust the scroll value as needed
      navbar.classList.add('nav-scrolled');
  } else {
      navbar.classList.remove('nav-scrolled');
  }
});

window.onload = function() {
  var isAuth = localStorage.getItem('isAuth');
  if (isAuth) {
    document.getElementById('under-construction').style.display = 'none';
    document.getElementById('main').style.display = 'flex';
  } else {
    document.getElementById('under-construction').style.display = 'flex';
    document.getElementById('main').style.display = 'none';
  }
}

document.getElementById('login').addEventListener('click', function() {
  if(document.getElementById('password').value === 'FinleyNoahCaitlin1999') {
    localStorage.setItem('isAuth', true);
    window.location.reload();
  }
});