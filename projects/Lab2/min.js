
		function addUser(row){
			document.getElementById("tableBody").innerHTML += row;
			document.getElementById("firstName").value = "";
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
					<td class='inner'><img class='picture' src='imgs/pp_suit.png' alt='Profile 1'></td>\
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
					<td class='inner'><a href='mailto:man@wmail.com'>"+email+"</td>\
				</tr>\
				<tr class='inner'>\
					<td class='inner'><b>Phone:</b></td>\
					<td class='inner'><a href='tel:+1-888-443-8906'>+1-"+phone+"</td>\
				</tr>\
				</table>\
			</td>\
			<td id='salary'>\
				$"+salary+"\
			</td>\
		</tr>";
			if (firstName != "") {
			addUser(row);
		}
				
		}
