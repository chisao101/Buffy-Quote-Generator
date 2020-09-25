window.onload = generateQuote;
//Array of quotes
let allQuotes = [
    {
        quotedText: "I might be love\'s bitch, but at least I\'m man enough to admit it.", 
        quoteSpeaker: "~ Willam \"Spike\" Pratt"
        
    },
    {
        quotedText: "And If Giles Wants To Go After The, Uh, Fiend That Murdered His Girlfriend, I Say, \"Faster, Pussycat, Kill, Kill.\"", 
        quoteSpeaker: "~ Xander Harris"
    },
]
    //"I might be love\'s bitch, but at least I\'m man enough to admit it.",
    //"You Think You Know What\'s To Come, What You Are. You Haven\'t Even Begun.",]
//    ["speaker": "~ Spike" "quote": ]
//    {speaker: '~ Buffy Summers' quote: ''}
//    {speaker: 'Xander Harris' quote: 'And If Giles Wants To Go After The, Uh, Fiend That Murdered His Girlfriend, I Say, \"Faster, Pussycat, Kill, Kill.\"'}
 //   {speaker: '~ Daniel \"Oz\" Osbourne' quote: 'Well, a gathering is brie, mellow song stylings; shindig, dip, less mellow song stylings, perhaps a large amount of malt beverage; and hootenanny, well, it\'s chock full of hoot, just a little bit of nanny.'}
  //  {speaker: '~ Buffy Summers' quote: 'The hardest thing in this world is to live in it.'}
///    {speaker: 'William \"Spike\" Pratt,<br>AKA William The Bloody' quote: 'Out. For. A. Walk ...Bitch.'}
//    {speaker: 'Willow Rosenberg' quote: 'That\'s me as a vampire? I\'m so skanky. And I think I\'m kind of gay.'}




//make variable from button
const generateBtn = document.querySelector('.generator-btn');
let quote = document.querySelector('.quote');
//let quotedText = allQuotes[0, 1];
//Eventlistener for button
generateBtn.addEventListener('click', generateQuote);
    //function to generate a quote
    function generateQuote(event){
        //generate random number and round to whole number based on total number of quotes in array
        let randomNumber = Math.floor(Math.random() * (allQuotes.length));
        const quotedText = quote.innerHTML = allQuotes[randomNumber];

        console.log(allQuotes[randomNumber]);
    }





    //Too loop through this array:
   // for (var i=0; i<alQuotes.length; i++)
   // {
   // alert(“Item# “ + i + “\nAuthor “ + allQuotes[i].Author + “ Quote “ + allQuotes[i].Quote);
   // }