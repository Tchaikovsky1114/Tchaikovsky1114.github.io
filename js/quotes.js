function getQuotesconst(){ quotes = [
    {
        quote : "Goal setting is the secret to a compelling future - ",
        author : "Tony Robbins",
    },
    {
        quote : "Never stop dreaming -",
        author : "Paulo Coelho",
    },
    {
        quote : "The merit of an action lies in finishing it to the end - ",
        author : "Genghis Khan",
    },
    {
        quote : "Having once decided to achieve a certain task, achieve it at all costs of tedium and distaste. The gain in self-confidence of having accomplished a tiresome labor is immense. - ",
        author :"Arnold Bennett",
    },
    {
        quote : "Well begun is half done - ",
        author : "Aristotles",
    },
    {
        quote : "The journey is the reward - ",
        author : "Steve Jobs",
    },
    {
        quote : "Despair is a narcoitc. It lulls the mid into indifference - ",
        author : "Charlie Chaplin",
    },
    {
        quote : "There is no security on this earth, there is only opportunity - ",
        author : "Douglas MacArthur",
    },
    {
        quote : "A pessimist sees the difficulty in every oppertunity an optimist sees the opportunity in every difficulty - ",
        author : "Winston Churchill",
    },
    {
        quote : "The future depends on what we do in the present - ",
        author : "Mahatma Gandhi",
    },
    {
        quote : "Nothing is a waste of time if you use the experience wisely - ",
        author : "Auguste Rodin",
    },
    {
        quote : "Those who dream by day are cognizant of many things which escape those who dream only by night - ",
        author : "Edgar Allan Poe",
    },
    {
        quote : "Perpetual optimism is a force multiplier - ",
        author : "Colin Powell"
    }
]
const quote = document.querySelector("#quotes span:first-child")
const author = document.querySelector("#quotes span:last-child")
const todaysQuote =quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
}
getQuotesconst();
setInterval(getQuotesconst,11458);