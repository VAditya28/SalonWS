function sendEmail() {
	Email.send({
	   Host: "smtp.gmail.com",
	   Username : "varun300515@gmail.com",
	   Password : "Naruto28$",
	   To : 'varun28baindla@gmail.com',
	   From : document.getElementById("name").value,
	   Subject : "Query from the customer",
	   Body : "Name: "+ document.getElementById("name").value +"Email: "+ document.getElementById("email").value+"Message: "+document.getElementById("message").value,
	   }).then(
	    message => alert("mail sent successfully")
	);
}