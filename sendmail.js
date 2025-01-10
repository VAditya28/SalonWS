function sendEmail() {
	Email.send({
	   Host: "smtp.gmail.com",
	   Username : "bvaditya28@gmail.com",
	   Password : "Itachi28$",
	   To : 'varun300515@gmail.com',
	   From : document.getElementById("email").value,
	   Subject : "Query from the customer",
	   Body : "Name: "+ document.getElementById("name").value +"Email: "+ document.getElementById("email").value+"Message: "+document.getElementById("message").value,
	   }).then(
	    message => alert("mail sent successfully")
	);
}