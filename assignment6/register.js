window.onload = pageLoad;

function pageLoad(){
	var form = document.getElementById("myForm");
	form.onsubmit = validateForm;
}

function validateForm() {
    var password = document.forms["myForm"]["password"];
    var password1 = document.forms["myForm"]["password1"];

    if (password.value != password1.value){
        alert("Password not same");
        document.getElementById("errormsg").innerHTML = "Password not same";
        return false;
    }
}