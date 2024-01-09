function getQuote() {
	const xhr = new XMLHttpRequest();
	const url = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
	xhr.responseType = "json";
	xhr.onreadystatechange = () => {
		if (xhr.readyState === XMLHttpRequest.DONE) {
			const quotes = xhr.response.quotes;
			const i = [Math.floor(Math.random() * quotes.length)];
			renderQuote(quotes[i]);
		};
	};
	xhr.open("GET", url);
	xhr.send();
}
getQuote();

function renderQuote(quote) {
	const quoteDiv = document.getElementById("quote");
	const authorDiv = document.getElementById("author");
	quoteDiv.innerHTML = quote.quote;
	authorDiv.innerHTML = quote.author;
}

const newQuoteButton = document.querySelector("#new_quote");
newQuoteButton.addEventListener("click", getQuote);