//Variables
//set an array made of objects with 2 values: (info y author)
let quotes = [{
    info: '\"It’s not about ideas. It’s about making ideas happen\"',
    author: '-Scott Belsky'
},
{
    info: '\"What would you do if you were not afraid?\"',
    author: '-Sheryl Sandberg',
},
{
    info: '\"Always deliver more than expected\"',
    author: '-Larry Page'
},
{
    info: '\"Nothing will work unless you do\"',
    author: '-Maya Angelou'
},
{
    info: '\"Surround yourself with only people who are going to lift you higher\"',
    author: '-Oprah Winfrey'
},
{
    info: '\"Your time is limited, so don’t waste it living someone else’s life\"',
    author: '-Steve Jobs'
},
{
    info: '\"There is nothing permanent except change\"',
    author: '-Heraclitus'
},
{
    info: '\"Learning never exhausts the mind.\"',
    author: '-Leonardo da Vinci'
},
{
    info: '\"If you cannot do great things, do small things in a great way\"',
    author: '-Napoleon Hill'
},
{
    info: '\"Independence is happiness\"',
    author: '-Susan B. Anthony'
},
]

// all variables go here 
const btn = document.getElementById('new-quote');
const phrase = document.getElementById('text');
const author = document.getElementById('author'); 
const tweet = document.getElementById('tweet-quote');
const btnQuote = document.getElementById('new-quote');


// Events
btn.addEventListener('click', oneQuote);
btn.addEventListener('click', myColor);



// Functions

//To find random data
function aleatorio(minimo,maximo){
    return Math.floor(Math.random() * ((maximo+1)-minimo)+minimo);
  }


//When clic, shows a randome quote
function oneQuote(e){
    e.preventDefault;
    //Take a quote from the array and save it in the variable
    let random = aleatorio(0, quotes.length - 1);
    phrase.innerHTML = quotes[random].info;
    author.innerHTML = quotes[random].author;
}

//To pick a random RGB color and use it to color background, texts and buttons
function myColor() {
    //pick up 3 random RGB colors
    let color1 = aleatorio(0, 255);
    let color2 = aleatorio(0, 255);
    let color3 = aleatorio(0, 255);
    //put the colors together
    let colorMatch = "rgb(" +color1 + "," + color2 + "," + color3 + ")";
    //to color all the elements using javascrip
    document.body.style.background = colorMatch;
    phrase.style.color = colorMatch;
    author.style.color = colorMatch;
    tweet.style.color = colorMatch;
    btnQuote.style.background = colorMatch;
}

/*
function myColor() {
    var R = Math.floor(Math.random() * 256);
    var G = Math.floor(Math.random() * 256);
    var B = Math.floor(Math.random() * 256);
    var colorMatch = "rgb(" +R + "," + G + "," + B + ")";
    //darle color a los elementos desde javascript
    document.body.style.background = colorMatch;
    phrase.style.color = colorMatch;
    author.style.color = colorMatch;
    tweet.style.color = colorMatch;
    btnQuote.style.background = colorMatch;
}
*/
      