const setRandomTrumpQuote = async () => {
	const trumpQuoteList = document.getElementById('para');
	const data = await getRandomTrumpQuote();
	trumpQuoteList.innerHTML = '';
	const paraContent = document.createTextNode(data.value);
	console.log(data.value);
	trumpQuoteList.append(paraContent);
};
const clickTheOrangeApe = function() {
	const tweetButton = document.getElementById('tweetimg');
	tweetButton.addEventListener('click', function() {
		setRandomTrumpQuote();
		setRandomTrumpMeme();
	});
};

const setRandomTrumpMeme = async () => {
	const trumpMeme = document.getElementById('background');
	const trumpMemeImg = document.createElement('img');
	const data = await getRandomTrumpMeme();
	trumpMemeImg.src = data;
	trumpMeme.appendChild(trumpMemeImg);
};

document.addEventListener('DOMContentLoaded', () => {
	console.log('DOM fully loaded and parsed');
	clickTheOrangeApe();
	//setRandomTrumpQuote();
});
