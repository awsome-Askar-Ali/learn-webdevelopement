// Countdown function using callback
const countdown = (num, callback) => {
     if (num > 0) {
          setTimeout(() => {
               console.log(num);
               document.getElementById('countdown').textContent = num;
               countdown(num - 1, callback);
          }, 1000);
     } else {
          callback();
     }
};

// Callback function
const displayMessage = () => {
     setTimeout(() => {
          console.log('Happy Independence Day');
          document.getElementById('countdown').textContent = 'Happy Independence Day';
     }, 1000);
};

// Start the countdown
countdown(10, displayMessage);
