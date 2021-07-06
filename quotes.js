
const messages = document.querySelector('#messages');
const button = document.querySelector('button');

const getQuotes = async () => {
  try {
    const res = await axios.get('https://type.fit/api/quotes');
    // console.log(res.data);
    const randomIndex = Math.floor(Math.random() * 1000);
    return res.data[randomIndex];
  } catch (err) {
    return ("NO QUOTES AVAILABLE!");
  } 
};

const addQuote = async () => {
    const quote = await getQuotes();
    const newLi = document.createElement('LI');
    newLi.append(`${quote.text} - ${quote.author}`);
    messages.append(newLi);
    // console.log(quote);
}

button.addEventListener('click', addQuote);


