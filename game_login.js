
// Create function addUser()
function addUser{

  // Get value of user by id player1_name_input and player2_name_input
  document.getElementById("player1_name").innerHTML = player1_name + " : ";
  document.getElementById("player2_name").innerHTML = player2_name + " : ";
  
  // Store these values locally
	player1_name = localStorage.getItem("player1_name");
	player2_name = localStorage.getItem("player2_name");
  //Assign "game_page.html" to window.location
  window.location = game_login.html
}

