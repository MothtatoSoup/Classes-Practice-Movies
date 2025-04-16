// Define the Movie class
class Movie{
  #title;
  #cast;
  #desc;
  #rating
  constructor(title,cast,desc,rating){   // title, cast, description, rating
    this.#title = title
    this.#cast = cast
    this.#desc = desc
    this.#rating = rating
  }
  updateRating(rating){   // Method to update the rating of the movie
    this.#rating = rating
  }
  displayInfo(){   // Method to display the movie's information
    return `${this.#title} featuring ${this.#cast} is a movie about ${this.#desc} and has a rating of ${this.#rating}</br>`
  }
}
// Test your implementation
let nemona = new Movie("Nemona","Chloë Grace Moretz, Riz Ahmed, Eugene Lee Yang, Frances Conroy,RuPaul","a 'evil' knight getting an 'evil' sidekick to expose the true evil of the kingdom",8.5);
let movies = [nemona.title]
let userating = window.prompt("What would you rate Nemona?")
function updateMovRat(title, newRat){
  title.updateRating(newRat)
}
// Display the initial information of the movie
const text = document.getElementById("movie-info");
text.innerHTML = nemona.displayInfo();

// Update the rating of the movie
updateMovRat(nemona,userating);

// Display the updated information of the movie
text.innerHTML += '</br>------Updated Info------ </br></br>'
text.innerHTML += nemona.displayInfo();