document.getElementById("cilentdata.html").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var age = document.getElementById("age").value;
    
    document.getElementById("demo").innerHTML = name;
    document.getElementById("demo").innerHTML = email;
    document.getElementById("demo").innerHTML = age;
    
    // Optional: Clear the form after submission
    document.getElementById("myForm").reset();
  });