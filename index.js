// // Your code goes here

// document.addEventListener("DOMContentLoaded", function() {
//     console.log("The DOM has loaded");
    
//   });

document.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');
  theDomHasLoaded();
});

  function theDomHasLoaded() {
      let str = document.getElementById('text')
      str.innerHTML = "This is really cool!";
  }

// 1. set up DOMContentLoaded event listener 
// 2. User event's callback function to target the p element with id = "text"
// - replace text with "This is really cool!"
