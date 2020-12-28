const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const nextBtn = document.querySelector('.next-btn');


let currentValue = 0
const API_QUOTE = "https://type.fit/api/quotes"

  nextBtn.addEventListener('click', ()=>{
        fetch(API_QUOTE)
        .then(function(response) {
        return response.json();
        })
        .then(function(data) {
        showQuote(data);
        // console.log(data);
        });
            currentValue++
  })

  const showQuote = (data) =>{
    const item = data[currentValue]
    quote.innerText = `${item.text}`
    author.innerText = item.author
}