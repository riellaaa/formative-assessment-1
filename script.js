var nickname = "Bri";
var heightIn = "65";
var weightKg = "55";

var heightFt = parseInt(heightIn)/12;
var weightLbs = parseInt(weightKg)*2.20462;

alert("Name: " + nickname);
alert("Height: " + heightFt + " ft");
alert("Weight: " + weightLbs + " kg");

var fName = prompt("Enter your first name: ");
var lName = prompt("Enter your last name: ");
var birthyear = prompt("Enter your year of birth: ");

var age = 2023 - parseInt(birthyear);

if (confirm("Do you want to share your personal information with us?")){
	var response = "Hello " + fName + " " + lName + "! How does it feel to be " + age + " years old?";
}
else {
	response = "User does not wish to share their information."
}