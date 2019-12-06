function addUser(row){
	document.getElementById("tableBody").innerHTML += row;
	clearInputs();
	
}

function prepareRow(){
	var firstName = document.getElementById("firstName").value;
	var mName = document.getElementById("middleName").value;
	var lName = document.getElementById("lastName").value;
	var pCode = document.getElementById("postalCode").value;
	var email = document.getElementById("email").value;
	var phone = document.getElementById("phone").value;
	var salary = document.getElementById("salaryAmount").value;
	var row = "<tr>\
					<td>\
						<table class='inner' width='100%'>\
						<tr class='inner'>\
							<td class='inner'><img class='picture' src='imgs/pp_teddy_bear.png' alt='Profile 1'></td>\
						</tr>\
						<tr class='inner'>\
							<td class='inner'>"+firstName+"</td>\
						</tr>\
						</table>\
					</td>\
					<td>\
						<table class='inner'>\
						<tr class='inner'>\
							<td class='inner'><b>First Name:</b></td>\
							<td class='inner'>"+firstName+"</b></td>\
						</tr>\
						<tr class='inner'>\
							<td class='inner'><b>Middle Name:</b></td>\
							<td class='inner'>"+mName+"</b></td>\
						</tr>\
						<tr class='inner'>\
							<td class='inner'><b>Last Name:</b></td>\
							<td class='inner'>"+lName+"</b></td>\
						</tr>\
						</table>\
					</td>\
					<td>\
						<table class='inner'>\
						<tr class='inner'>\
							<td class='inner'><b>Postal Code:</b></td>\
							<td class='inner'><a href='https://www.google.com/maps?q="+pCode+"'>"+pCode+"</b></td>\
						</tr>\
						<tr class='inner'>\
							<td class='inner'><b>Email:</b></td>\
							<td class='inner'><a href='mailto:"+email+"'>"+email+"</td>\
						</tr>\
						<tr class='inner'>\
							<td class='inner'><b>Phone:</b></td>\
							<td class='inner'><a href='tel:+1-"+phone+"'>+1-"+phone+"</td>\
						</tr>\
						</table>\
					</td>\
					<td id='salary'>\
						$"+salary+" CAD/hr\
					</td>\
				</tr>";
				// if (firstName != "") {
				// 	addUser(row);
				// }else{
				// 	alert("Please enter a first name");
				// }
				var emptyInputs = 0;
				var inputs = document.getElementsByTagName("input");
				for (var i = 0; i < inputs.length; i++) {
					console.log("inputs: ", inputs[i].value.length)
					if (inputs[i].value.length == 0) {
						emptyInputs += 1;
						inputs[i].style.borderColor = "red";
					}else{
						inputs[i].style.removeProperty('border');
					}
				}
				if (emptyInputs == 0) {
					addUser(row);
				}else{
					alert("Please enter all informations.");
				}
				
}

function clearInputs(){
	// document.getElementById("firstName").value = "";
	// document.getElementById("middleName").value = "";
	// document.getElementById("lastName").value = "";
	// document.getElementById("postalCode").value = "";
	// document.getElementById("email").value = "";
	// document.getElementById("phone").value = "";
	// document.getElementById("salaryAmount").value = "";
	var inputs = document.getElementsByTagName("input");
	for (var i = 0; i < inputs.length; i++) {
		inputs[i].value = "";
	}
}