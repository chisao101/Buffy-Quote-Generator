window.onload = generateQuote;
//Array of quotes
let allQuotes = [
    {
        quotedText: "I might be love\'s bitch, but at least I\'m man enough to admit it.", 
        quoteSpeaker: "~ Willam \"Spike\" Pratt",
        image: "url('./images/buffy-blue-bg.jpg')",        
    },
    {
        quotedText: "And If Giles Wants To Go After The, Uh, Fiend That Murdered His Girlfriend, I Say, \"Faster, Pussycat, Kill, Kill.\"", 
        quoteSpeaker: "~ Xander Harris",
        image: "url('./images/buffy-fan-art.jpg')",
    },
    {
        quotedText: "That\'s me as a vampire? I\'m so skanky. And I think I\'m kind of gay.", 
        quoteSpeaker: "~ Willow Rosenberg",
        image: "url('./images/buffy-the-vampire-slayer-feature-1280x720.png')",
    },
    {
        quotedText: "You Think You Know What\'s To Come, What You Are. You Haven\'t Even Begun.", 
        quoteSpeaker: "~ Buffy Summers",
        image: "url('./images/263598-buffy-finale.jpg')",
    },
    {
        quotedText: "The hardest thing in this world is to live in it.", 
        quoteSpeaker: "~ Buffy Summers",
        image: "url('./images/buffy-once-more-1280x720.jpg')",
    },
    {
        quotedText: "Well, a gathering is brie, mellow song stylings; shindig, dip, less mellow song stylings, perhaps a large amount of malt beverage; and hootenanny, well, it\'s chock full of hoot, just a little bit of nanny.", 
        quoteSpeaker: "~ Daniel \"Oz\" Osbourne",
        image: "url('./images/buffy-fullCast.jpg')",
    },
    {
        quotedText: "Out. For. A. Walk ...Bitch.", 
        quoteSpeaker: "~ William \"Spike\" Pratt,<br>AKA William The Bloody",
        image: "url('./images/23-1280x720.jpeg')",
    },
]

//make variable from button
const generateBtn = document.querySelector('.generator-btn');
//Variable for .quote class
let quote = document.querySelector('.quote');
//Variable for .speaker class
let speaker =document.querySelector('.speaker');
//Variable for .image class
let image = document.querySelector('.image');
// variable for quote-container
let quoteContainer = document.querySelector('.quote-container');
//Eventlistener for button
generateBtn.addEventListener('mousedown', generateQuote);
generateBtn.addEventListener('mouseup', slideUp);
    //function to generate a quote
    function generateQuote(event){
        //generate random number and round to whole number based on total number of quotes in array
        let randomNumber = Math.floor(Math.random() * (allQuotes.length));
        //Set random pick into quotedText variable 
        const quotedText = quote.innerHTML = allQuotes[randomNumber];
        //Set object values into values variable
        let values = Object.values(quotedText);
        //Set quote value into quote div 
        quote.innerHTML = values[0];
        //Set speaker value into speaker div
        speaker.innerHTML = values[1];
        //Change backgorund image in image style
        image.style.backgroundImage = values[2];
        quoteContainer.style.bottom = "-16em";
        quoteContainer.style.transition = "all 500ms ease-out";
    }    
    function slideUp(event){
        quoteContainer.style.bottom = "0";
        quoteContainer.style.transition = "all 500ms ease-out";
    }





/*    
    let myClass = document.querySelector('.my-class');
    myBtn.addEventListener('mousedown', function1);
    myBtn.addEventListener('mouseup', function2);

    function function1(event){
        myClass.style.bottom = "-16em";
    }

    function function2(event){
        myClass.style.bottom = "0";
    }

*/