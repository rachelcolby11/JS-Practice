//Array of Movies
var movies = [
    {
        title: "Puff the Magic Dragon",
        review: "Best movie ever!!"
    },
    {
        title: "Ever After",
        review: "Eh, ok.."
    }
]; 

//Loop through array and print title and review of each movie
for (var i=0; i < movies.length; i++) {
    fill(84, 140, 209);
    textAlign(CENTER, CENTER);
    textSize(20);
    text(movies[i].title, 200, 50 + 50 * i);
    textSize(15);
    text(movies[i].review, 200, 70 + 50 * i);
}

    