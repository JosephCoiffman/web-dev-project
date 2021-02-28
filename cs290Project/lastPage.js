function checkCorrectness(event){
	event.preventDefault();
  var playerValue = document.getElementById("best-player").value
 if(playerValue == "Joel Anthony"){
 document.getElementById("Joel-Anthony").textContent = "But you are correct!! Joel Anthony is the real MVP!!"
 } 
 console.log(playerValue);
}
document.getElementById("Submit").addEventListener("click", checkCorrectness);