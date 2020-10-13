window.onload = generateQuote;
//Array of quotes
let allQuotes = [
    {
        quotedText: "In every generation there is a chosen one. She alone will stand against the vampires, the demons and the forces of darkness. She is the slayer.", 
        quoteSpeaker: "~  Narrator",
        image: "url('./images/buffyQuote-00001.png')",        
    },
    {
        quotedText: "Willow, nice dress. Good to know you've seen the softer side of Sears.", 
        quoteSpeaker: "~  Cordelia Chase",
        image: "url('./images/buffyQuote-00002.png')",
    },
    {
        quotedText: "To make you a vampire they have to suck your blood and then you have to suck their blood. It\'s, like, a whole big sucking thing. Mostly they're just gonna kill you.", 
        quoteSpeaker: "~  Buffy Summers",
        image: "url('./images/buffyQuote-00003.png')",
    },
    {
        quotedText: "I believe this whole area is a center of mystical energy, that things gravitate towards it that you might not find elsewhere...zombies, werewolves, incubi, succubi - everything you\'ve ever dreaded was under your bed but told yourself couldn\'t be by the light of day. They\'re all real.", 
        quoteSpeaker: "~  Rupert Giles",
        image: "url('./images/buffyQuote-00004.png')",
    },
    {
        quotedText: "Oh, come on, this is Sunnydale. How bad an evil can there be?", 
        quoteSpeaker: "~ Buffy Summers",
        image: "url('./images/buffyQuote-00005.png')",
    },
    {
        quotedText: "From now on I'm only going to hang out with the living.", 
        quoteSpeaker: "~  Buffy Summers",
        image: "url('./images/buffyQuote-00006.png')",
    },
    {
        quotedText: "Seize the moment \'cause tomorrow you might be dead.", 
        quoteSpeaker: "~  Buffy Summers",
        image: "url('./images/buffyQuote-00007.png')",
    },
    {
        quotedText: "Nobody cool has Epstein-Barr anymore.", 
        quoteSpeaker: "~  Cordelia Chase",
        image: "url('./images/buffyQuote-00008.png')",
    },
    {
        quotedText: "God! What is your childhood trauma?", 
        quoteSpeaker: "~  Cordelia Chase",
        image: "url('./images/buffyQuote-00009.png')",
    },
    {
        quotedText: "You're strong. I'm stronger.", 
        quoteSpeaker: "~  Luke",
        image: "url('./images/buffyQuote-00010.png')",
    },
    {
        quotedText: "I\'m your faithful dog. You bring me scraps.", 
        quoteSpeaker: "~  The Master",
        image: "url('./images/buffyQuote-00011.png')",
    },
    {
        quotedText: "The slayer hunts vampires. Buffy is the slayer. Don\'t tell anyone.", 
        quoteSpeaker: "~  Rupert Giles",
        image: "url('./images/buffyQuote-00012.png')",
    },
    {
        quotedText: "God! I am so mentally challenged.", 
        quoteSpeaker: "~  Buffy Summers",
        image: "url('./images/buffyQuote-00013.png')",
    },
    {
        quotedText: "Yesterday my life is like, \'Uh-Oh, pop quiz\'. Today it\'s rain of toads.", 
        quoteSpeaker: "~  Xander Harris",
        image: "url('./images/buffyQuote-00014.png')",
    },
    {
        quotedText: "Do you know what it\'s like to have a friend? ...That wasn\'t supposed to be a stumper.", 
        quoteSpeaker: "~  Buffy Summers",
        image: "url('./images/buffyQuote-00015.png')",
    },
    {
        quotedText: "There was this time I was pinned down by this guy that played left tackle for varsity. Well, at least he used to, before he was a vampire. Anyway, he had this really, really thick neck, and all I had was this little, little X-acto knife...", 
        quoteSpeaker: "~  Buffy Summers",
        image: "url('./images/buffyQuote-00016.png')",
    },
    {
        quotedText: "You\'ve got something in your eye.", 
        quoteSpeaker: "~  The Master",
        image: "url('./images/buffyQuote-00017.png')",
    },
    {
        quotedText: "Tonight I shall walk the earth and the stars themselves will hide.", 
        quoteSpeaker: "~  The Master",
        image: "url('./images/buffyQuote-00018.png')",
    },
    {
        quotedText: "No. The tapes all say I should get used to saying it. No. ", 
        quoteSpeaker: "~  Joyce Summers",
        image: "url('./images/buffyQuote-00019.png')",
    },
    {
        quotedText: "I am not the type to settle, you know? It\'s like when I go shopping. I have to have the most expensive thing, not because it\'s expensive, but because it costs more.", 
        quoteSpeaker: "~   Cordelia Chase",
        image: "url('./images/buffyQuote-00020.png')",
    },
    {
        quotedText: "Jesse is dead. You have to remember that. When you see him, you\'re not looking at your friend. You\'re looking at the thing that killed him.", 
        quoteSpeaker: "~  Rupert Giles",
        image: "url('./images/buffyQuote-00021.png')",
    },
    {
        quotedText: "We may, in fact, stand between the earth and it's total destruction.", 
        quoteSpeaker: "~  Rupert Giles",
        image: "url('./images/buffyQuote-00022.png')",
    },
    {
        quotedText: "The earth is doomed.", 
        quoteSpeaker: "~  Rupert Giles",
        image: "url('./images/buffyQuote-00023.png')",
    },
    {
        quotedText: "This is madness. What can you have been thinking? You are the slayer. Lives depend upon you. I make allowances for your youth, but I expect a certain amount of responsibility, instead of which you enslave yourself to this - this...cult?", 
        quoteSpeaker: "~  Rupert Giles",
        image: "url('./images/buffyQuote-00024.png')",
    },
    {
        quotedText: "You have a sacred birthright, Buffy. You were chosen to destroy vampires, not to...wave pompoms at people. And as the watcher, I forbit it.", 
        quoteSpeaker: "~  Rupert Giles",
        image: "url('./images/buffyQuote-00025.png')",
    },
    {
        quotedText: "I\'d say he should get a girlfriend if he wasn\'t so old.", 
        quoteSpeaker: "~  Buffy Summers",
        image: "url('./images/buffyQuote-00026.png')",
    },
    {
        quotedText: "You\'re the slayer and we\'re, like, the slayerettes.", 
        quoteSpeaker: "~   Willow Rosenberg",
        image: "url('./images/buffyQuote-00027.png')",
    },
    {
        quotedText: "First vampires, now witches. No wonder you can still afford a house in Sunnydale.", 
        quoteSpeaker: "~  Xander Harris",
        image: "url('./images/buffyQuote-00028.png')",
    },
    {
        quotedText: "You\'re my Xander-shaped friend. Do you have any idea why I love you so, Xander? I\'ll tell you. You\'re not like other boys at all. You are totally and completely one of the girls. I\'m that comfy with him.", 
        quoteSpeaker: "~  Buffy Summers",
        image: "url('./images/buffyQuote-00029.png')",
    },
    {
        quotedText: "Don\'t say dead or decapitated or decomposing. I\'d stay away from \"D\" words altogether.", 
        quoteSpeaker: "~  Principal Flutie",
        image: "url('./images/buffyQuote-00030.png')",
    },
    {
        quotedText: "I\'m always here if you need a hug. but not a real hug, because there is no touching in this school, we\'re sensitive to wrong touching.", 
        quoteSpeaker: "~  Principal Flutie",
        image: "url('./images/buffyQuote-00031.png')",
    },
    {
        quotedText: "Oh, I\'m not saying that we should kill a teacher every day just so I can lose weight.", 
        quoteSpeaker: "~  Cordelia Chase",
        image: "url('./images/buffyQuote-00032.png')",
    },
    {
        quotedText: "I\'m not saying she craned her neck. We\'re talking full-on exorcist twist.", 
        quoteSpeaker: "~  Buffy Summers",
        image: "url('./images/buffyQuote-00033.png')",
    },
    {
        quotedText: "What kind of girly name is Angel, anyway?", 
        quoteSpeaker: "~  Xander Harris",
        image: "url('./images/buffyQuote-00034.png')",
    },
    {
        quotedText: "Xander is...I like his head. It\'s where you find his eyes and his hair and his adorable smile.", 
        quoteSpeaker: "~  Willow Rosenberg",
        image: "url('./images/buffyQuote-00035.png')",
    },
    {
        quotedText: "You were right all along about everything. Well, no, you weren\'t right about your mother coming back as a Pekinese.", 
        quoteSpeaker: "~  Rupert Giles",
        image: "url('./images/buffyQuote-00036.png')",
    },
    {
        quotedText: "He can brood for 40 minutes straight. I\'ve clocked him.", 
        quoteSpeaker: "~  Willow Rosenberg",
        image: "url('./images/buffyQuote-00037.png')",
    },
    {
        quotedText: "I think it\'s kale or possibly string cheese.", 
        quoteSpeaker: "~  Xander Harris",
        image: "url('./images/buffyQuote-00038.png')",
    },
    {
        quotedText: "I\'ll just jump in my time machine, go back to the 12th century and ask the vampires to postpone their ancient prophecy for a few days while you take in dinner and a show.", 
        quoteSpeaker: "~  Rupert Giles",
        image: "url('./images/buffyQuote-00039.png')",
    },
    {
        quotedText: "Well in that case, I won\'t wear my button that says, \"I\'m a slayer, ask me how!\"", 
        quoteSpeaker: "~  Buffy Summers",
        image: "url('./images/buffyQuote-00040.png')",
    },
    {
        quotedText: "A cranky slayer is a careless slayer.", 
        quoteSpeaker: "~  Buffy Summers",
        image: "url('./images/buffyQuote-00041.png')",
    },
    {
        quotedText: "If the apocalypse comes, beep me.", 
        quoteSpeaker: "~  Buffy Summers",
        image: "url('./images/buffyQuote-00042.png')",
    },
    {
        quotedText: "You took a bath...that's ok.", 
        quoteSpeaker: "~  Xander Harris",
        image: "url('./images/buffyQuote-00043.png')",
    },
        {
        quotedText: "And the weird behavior award goes to ...", 
        quoteSpeaker: "~  Buffy Summers",
        image: "url('./images/buffyQuote-00044.png')",
    },
        {
        quotedText: "See the problem is you kids today have no school spirit...Today, it\'s all gangs and drugs and those movies on Showtime with nudity. I don\'t have cable. I only heard.", 
        quoteSpeaker: "~  Principal Flutie",
        image: "url('./images/buffyQuote-00045.png')",
    },
        {
        quotedText: "God, this game is brutal. I love it.", 
        quoteSpeaker: "~  Coach Herrold",
        image: "url('./images/buffyQuote-00046.png')",
    },
        {
        quotedText: "Testosterone is a great equalizer. It turns all men into morons.", 
        quoteSpeaker: "~  Rupert Giles",
        image: "url('./images/buffyQuote-00047.png')",
    },
        {
        quotedText: "I can\'t believe you, of all people, are trying to Scully me.", 
        quoteSpeaker: "~  Buffy Summers",
        image: "url('./images/buffyQuote-00048.png')",
    },
        {
        quotedText: "They ate Principal Flutie?", 
        quoteSpeaker: "~  Buffy Summers",
        image: "url('./images/buffyQuote-00049.png')",
    },
        {
        quotedText: "Shoot me, stuff me, mount me.", 
        quoteSpeaker: "~  Xander Harris",
        image: "url('./images/buffyQuote-00050.png')",
    },
        {
        quotedText: "Oh, look, a cockroach. ", 
        quoteSpeaker: "~ Willow Rosenberg",
        image: "url('./images/buffyQuote-00051.png')",
    },
        {
        quotedText: "Let\'s stop this crazy whirligig of fun. I\'m dizzy. ", 
        quoteSpeaker: "~ Xander Harris",
        image: "url('./images/buffyQuote-00052.png')",
    },
        {
        quotedText: "I\'m older than you, and this can\'t ever... ", 
        quoteSpeaker: "~ Angel",
        image: "url('./images/buffyQuote-00053.png')",
    },
        {
        quotedText: "Is there anything better than a natural disaster? The panic, the people lost in the streets. It\'s like picking fruit off the vine. ", 
        quoteSpeaker: "~ Darla",
        image: "url('./images/buffyQuote-00054.png')",
    },
        {
        quotedText: "So, he is a good vampire. I mean on a scale of 1 to 10, 10 being someone who\'s killing and maiming every night, and 1 being someone who\'s not.", 
        quoteSpeaker: "~  Willow Rosenberg",
        image: "url('./images/buffyQuote-00055.png')",
    },
        {
        quotedText: "He was the most vicious creature I ever met. I miss him. ", 
        quoteSpeaker: "~ The Master",
        image: "url('./images/buffyQuote-00056.png')",
    },
        {
        quotedText: "She lives very much in the now, um, and, uh, well, history, of course, is--is very much about the, uh...the \"then\".", 
        quoteSpeaker: "~ Rupert Giles",
        image: "url('./images/buffyQuote-00057.png')",
    },
        {
        quotedText: "For 100 years I offered an ugly death to everyone I met. And I did it with a song in my heart.", 
        quoteSpeaker: "~ Angel",
        image: "url('./images/buffyQuote-00058.png')",
    },
        {
        quotedText: "Well, when you\'ve been around since Columbus, you are bound to pile up a few exes.", 
        quoteSpeaker: "~ Buffy Summers",
        image: "url('./images/buffyQuote-00059.png')",
    },
        {
        quotedText: "He doesn\'t talk like someone who would have a hairy back.", 
        quoteSpeaker: "~ Willow Rosenberg",
        image: "url('./images/buffyQuote-00060.png')",
    },
        {
        quotedText: "Things involving the computer fill me with a childlike terror. Now, if it were a nice ogre or some such, I\'d be more in my element.", 
        quoteSpeaker: "~ Rupert Giles",
        image: "url('./images/buffyQuote-00061.png')",
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
