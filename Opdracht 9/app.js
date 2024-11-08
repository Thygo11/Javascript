let counter = 0;

    function incrementCounter() {
      counter += 1;  
      if (counter >= 10) {
        counter = 0; 
      }
      document.getElementById("counter").innerText = counter;  
    }

        