const quoteContainer = document.querySelector('.quote-container');
const getQuote = document.querySelector('.generate-quote');
const quoteLeft = document.querySelector('.fa-quote-left');
const quoteRight = document.querySelector('.fa-quote-right');
const twitterLink = document.querySelector('.twitter-share-button');
const twitterBtn = document.querySelector('.twitter-btn')

const quotesArray = [
    "To go wrong in one\'s own way is better than to go right in someone else\'s",
    "What is hell? I maintain that it is the suffering of being unable to love.",
    "Talking nonsense is the sole privilege mankind possesses over the other organisms.",
    "To love someone means to see them as God intended them",
    "You can be sincere and still be stupid.",
    "Nowadays almost all capable people are terribly afraid of being ridiculous, and are miserable because of it.",
    "I say let the world go to hell, but I should always have my tea.",
    "Man only likes to count his troubles; he doesn't calculate his happiness",
    "I love mankind, but I find to my amazement that the more I love mankind as a whole, the less I love man in particular.",
    "I am a sick man... I am a spiteful man. I am an unpleasant man. I think my liver is diseased. However, I don't know beans about my disease, and I am not sure what is bothering me.",
    "Don\’t let us forget that the causes of human actions are usually immeasurably more complex and varied than our subsequent explanations of them.",
    "If you want to be respected by others, the great thing is to respect yourself. Only by that, only by self-respect will you compel others to respect you.",
    "Nothing is easier than to denounce the evildoer; nothing is more difficult than to understand him.",
    "The cleverest of all, in my opinion, is the man who calls himself a fool at least once a month.",
    "If you want to overcome the whole world, overcome yourself.",
    "Lack of originality, everywhere, all over the world, from time immemorial, has always been considered the foremost quality and the recommendation of the active, efficient and practical man.",
    "The degree of civilization in a society can be judged by entering its prisons.",
]

getQuote.addEventListener('click', function() {
    newQuote = quotesArray[Math.floor(Math.random() * quotesArray.length)];
    quoteContainer.innerText = newQuote;
    twitterLink.setAttribute("href", "https://twitter.com/intent/tweet?text=" + newQuote);
    quoteLeft.classList.add('activated');
    quoteRight.classList.add('activated');
    twitterBtn.classList.add('activated');
});