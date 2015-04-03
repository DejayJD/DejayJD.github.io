
function setbground()//Set the background
{
	document.body.style.background = "#111110 url('../img/6.jpg')";
}

//Alert the title
//window.alert("Title is -- " + document.title);

//Function to validate email
function validateEmail()
{
	var regex = /\S+@\S+\.\S+/;
	var x = document.forms["emailValidate"]["emailname"].value;
	if (x == null || x == "") 
	{
        alert("Please put in something before submitting");
        return false;
    }
    if (regex.test(x)==true)
    	window.alert("Valid email! :)");
    else
    	window.alert("Invalid email :(");
	
}