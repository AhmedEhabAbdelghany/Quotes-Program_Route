var quote = document.getElementById("quote")
var writer = document.getElementById("writer")
var ourImg = document.getElementById("ourImg")
var buttonnext = document.querySelector("button")


quote.innerText = `“Be yourself; everyone else is already taken.”`;
writer.innerText = ` -Oscar Wilde-`;
ourImg.innerHTML = `
<img src="./images/Oscar Wilde.jpg" class="d-block Carousel-Image  m-auto" alt="Image Xavi Alonso" id="ourImg">
`

buttonnext.addEventListener("click", function () {

    var i = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[i].quote;
    writer.innerText = quotes[i].person;
    ourImg.innerHTML = `<img src="${quotes[i].img}" class="d-block Carousel-Image  m-auto" alt="Image Xavi Alonso" id="ourImg">`

    console.log(i)

})










const quotes = [{
    quote: `“Be yourself; everyone else is already taken.”`,
    person: ` -Oscar Wilde-`,
    img: `./images/Oscar Wilde.jpg`
},
{
    quote: `“So many books, so little time.”`,
    person: ` -Frank Zappa-`,
    img: `./images/22302._UX200_CR0,0,200,200_.jpg`
},
{
    quote: `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`,
    person: ` -Albert Einstein-`,
    img: `./images/9810._UX200_CR0,14,200,200_.jpg`

},
{
    quote: `“A room without books is like a body without a soul.”`,
    person: `-Marcus Tullius Cicero-`,
    img: `./images/13755._UX200_CR0,47,200,200_.jpg`
},
{
    quote: `
        “Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”`,
    person: `-Confucius-`,
    img: `./images/5768330._UX200_CR0,30,200,200_.jpg`
},
{
    quote: `“You've gotta dance like there's nobody watching,
        Love like you'll never be hurt,
        Sing like there's nobody listening,
        And live like it's heaven on earth.”`,
    person: `-William W. Purkey-`,
    img: `./images/1744830._UX200_CR0,47,200,200_.jpg`

},
{
    quote: `“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”`,
    person: `-Dr. Seuss-`,
    img: `./images/61105._UX200_CR0,30,200,200_.jpg`

},
{
    quote: `“Be the change that you wish to see in the world.”`,
    person: `-Mahatma Gandhi-`,
    img: `./images/5810891._UX200_CR0,21,200,200_.jpg`

},
];