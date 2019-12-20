//api.tronalddump.io/random/quote

const base_endpoint = 'https://api.tronalddump.io';

const getRandomTrumpQuote = async () => {
	const APIEndpoint = `${base_endpoint}/random/quote`;
	try {
		const res = await fetch(APIEndpoint, { method: 'GET' });
		console.log(res);
		return await res.json();
	} catch (error) {
		console.log(error);
	}
};

const getRandomTrumpMeme = async () => {
	const APIEndpoint = `${base_endpoint}/random/meme`;
	try {
		const res = await fetch(APIEndpoint, { method: 'GET' });
		console.log(res);
		return await res;
	} catch (error) {
		console.log(error);
	}
};
