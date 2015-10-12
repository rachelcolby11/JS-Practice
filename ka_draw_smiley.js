//SmileyFace constructor function
var SmileyFace = function(x, y) {
    this.centerX = x;
    this.centerY = y;
};

//Define draw method on SmileyFace object
SmileyFace.prototype.draw = function() {
    fill(255, 234, 0);
    ellipse(this.centerX, this.centerY, 150, 150);
    fill(0, 0, 0);
    ellipse(this.centerX-30, this.centerY-30, 20, 20); 
    ellipse(this.centerX+30, this.centerY-30, 20, 20); 
    noFill(); 
    strokeWeight(3);
    arc(this.centerX, this.centerY+10, 64, 40, 0, 180);
};

//Define speak method on SmileyFace object
SmileyFace.prototype.speak = function(message) {
    text(message, this.centerX+85, this.centerY);
};

//Create new instances of SmileyFace object; Call draw and speak for each
var Smiley1 = new SmileyFace(124, 200);
Smiley1.draw();
Smiley1.speak("Have a great day!");

var Smiley2 = new SmileyFace(50, 100);
Smiley2.draw();
Smiley2.speak("Happy day!");

var Smiley3 = new SmileyFace(204, 314);
Smiley3.draw();
Smiley3.speak("Happy day!");
    