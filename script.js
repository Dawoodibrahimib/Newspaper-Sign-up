const Emailinput=document.getElementById("Input1");
const btnaction=document.getElementById("btn1");
const divdisplay=document.getElementById("span1");
const divdisplay2=document.getElementById("second-div");
const emailvalue=document.getElementById("Emailvalue");
const dismissButton=document.getElementById("btn2")



btnaction.addEventListener("click",function()
{
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (Emailinput.value === ""  || !emailPattern.test(Emailinput.value)) {
        Emailinput.style.border = "1px solid red";
    
        // Add shake animation class
        Emailinput.classList.add("shake");
    
        // Remove the shake animation class after a timeout
        setTimeout(function() {
          Emailinput.classList.remove("shake");
        }, 1000); // Adjust the duration as needed
      } else {
        Emailinput.style.border = "1px solid blue";
        divdisplay.style.display="none";
        divdisplay2.style.opacity = 1;
        divdisplay2.style.display="flex";
        emailvalue.textContent=Emailinput.value;
         // Reset border style
      }
});
dismissButton.addEventListener("click", function() {
    Emailinput.value = ""; // Clear the input value
    Emailinput.style.border = "1px solid initial"; // Reset the border style
    divdisplay.style.display = "block"; // Show the original content
    divdisplay2.style.display = "none"; // Hide the success message
  });