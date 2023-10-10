function postFunction() {

    var text = document.getElementById("text1").value;
    var topic = document.getElementById("topic1");
    var com1 = document.getElementById("comment1");
    var com2 = document.getElementById("comment2");

    if (topic.innerHTML != '') {

        if (com1.innerHTML != '') {
            com2.innerHTML = text;
            return 
        }
        else {
            com1.innerHTML = text;
            return 
        }
    }
    else {
        topic.innerHTML = text;
        return 
    }
}

function clearFunction() {

    document.getElementById("topic1").innerHTML = '';
    document.getElementById("comment1").innerHTML = '';
    document.getElementById("comment2").innerHTML = '';

}