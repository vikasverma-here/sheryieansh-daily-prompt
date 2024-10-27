// // Set the date for the launch
const launchDate = new Date("Dec 31, 2024 12:00:00").getTime();
console.log(launchDate)

const countdown = () => {
  const now = new Date().getTime();
  const distance = launchDate - now;
  console.log(distance)

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById('days').textContent = days;
  document.getElementById('hours').textContent = hours;
  document.getElementById('minutes').textContent = minutes;
  document.getElementById('seconds').textContent = seconds;

  // If the countdown is over, display text
  if (distance < 0) {
    clearInterval(interval);
    document.getElementById("countdown").innerHTML = "<h2>Launched!</h2>";
  }
};

// Update countdown every second
const interval = setInterval(countdown, 1000);




  