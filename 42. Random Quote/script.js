//generateQuoteBtn
const generateQuoteBtn = document.getElementById("quoteBtn");
//quoteOutput
const quoteOutput = document.getElementById("quoteOutput");
//authorOutput
const authorOutput = document.getElementById("authorOutput");

generateQuoteBtn.addEventListener("click", generateQuote);

const arrayOfQuotes = [
    {
        author: "Krishnamurti",
        quote: "When I kill an Arab, a Jew, a Muslim, a Hindu, a communist, whoever it is, I am killing myself. I wonder if you realise this, basically.",
    },
    {
        author: "Krishnamurti",
        quote: "If you as a human being transform yourself, you affect the consciousness of the rest of the world.",
    },
    {
        author: "Henry David Thoreau",
        quote: "It's not what you look at that matters, it's what you see.",
    },
    {
        author: "Zig Ziglar",
        quote: "You don't have to be great to start, but you have to start to be great.",
    },
    {
        author: "Helen Keller",
        quote: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
    },
    {
        author: "Charles Bukowski",
        quote: "An intellectual says a simple thing in a hard way. An artist says a hard thing in a simple way.",
    },
];

function generateQuote() {
    let random = Number.parseInt(Math.random() * arrayOfQuotes.length + 1);
    quoteOutput.innerHTML = `<span>${arrayOfQuotes[random].quote}</span>`;
    authorOutput.innerHTML = `<small>-${arrayOfQuotes[random].author}-</small>`;
}