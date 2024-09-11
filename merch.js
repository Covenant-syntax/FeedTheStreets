// MERCH.HTML
 // Set the date we're counting down to
 const launchDate = new Date("December 31, 2024 23:59:59").getTime();

 // Update the countdown every 1 second
 const interval = setInterval(function() {
     // Get current date and time
     const now = new Date().getTime();

     // Calculate the distance between now and the launch date
     const distance = launchDate - now;

     // Time calculations for days, hours, minutes, and seconds
     const days = Math.floor(distance / (1000 * 60 * 60 * 24));
     const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
     const seconds = Math.floor((distance % (1000 * 60)) / 1000);

     // Display the result in the respective elements
     document.getElementById("days").textContent = days;
     document.getElementById("hours").textContent = hours;
     document.getElementById("minutes").textContent = minutes;
     document.getElementById("seconds").textContent = seconds;

     // If the countdown is over, display a message
     if (distance < 0) {
         clearInterval(interval);
         document.getElementById("countdown").innerHTML = "The event has started!";
     }
 }, 1000);