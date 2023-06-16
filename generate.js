// first we declaretwo arrays one for the generated quote and one for the favorite quotes
const genQuotes = [];
const favQuotes = [];
// we made a copy of the array quotes containing the quotes 
// we then go through the lengh of our array and get a random quote
// finnaly we push the quote into the quotes array and return our random quote
function generator(){
    let quote = [...quotes];
    const randomIndex = Math.floor(Math.random() * quote.length);
    randomQuote =quote[randomIndex]; 
    genQuotes.push(randomQuote); 
    return randomQuote;       
    }
//we call the previous function amd affect the result to rquote
//we then display the content of the quote and the author using inner html in our desired div using its id
function displayQuote(){
   let rquote = generator();
   let qdiv = document.getElementById("gq");
   qdiv.innerHTML=rquote.quote;
   let adiv = document.getElementById("gqa");
   adiv.innerHTML=rquote.author;
}
//we take the generated quotes and add them to the favorites array after making sure it doesn'yt alredy exist to avoid repition
let i=0;
function addFav(){
    const gquote =genQuotes[i];
    if (!favQuotes.includes(gquote)) {
        favQuotes.push(gquote);
        i++;
    }
}

//we display the favprite quotes into a list in the div fq
// for that we make sure the array isn't empty or else we say there are no quotes
// then we go through the favorites array and display them one by one in the form of a list including the authors of course

function displayFav() {
    let fquoteDiv = document.getElementById("fq");
    fquoteDiv.innerHTML = "";
    if (favQuotes.length > 0) {
      for (let i = 0; i < favQuotes.length; i++) {
        let fquote = favQuotes[i];
        let quote= document.createElement("li");
        quote.textContent = fquote.quote+fquote.author;
        quote.classList.add("favoritequote"); 
        fquoteDiv.appendChild(quote);
      }
    } else {
      fquoteDiv.textContent = "No favorite quotes found.";
    }
  }
// this function is an additionnal one it basically gets a random image from the images array then puts teh random image
// in the spot of the image, it basically gets the source of the image then diplays it  (they're in folder/images)
// the event listener is in order to run the function each time you refresh
  function randomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];
    const imgs = document.getElementById("randomImage");
    imgs.src = "/images/"+randomImage;
  }
  window.addEventListener("load", randomImage);
