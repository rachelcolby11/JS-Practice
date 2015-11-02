var createName = function (first, last) {
  return first + " " + last;
}

var askName = function () { 
  var fullName;
  //while (fullName !== "Marilyn Monroe") {
    var first = prompt("What is your first name?");
    var last = prompt("What is your last name?");
    fullName = createName(first, last);
    alert("Your name is " + fullName + "!");
  //}
}

