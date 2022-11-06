const fs = require('fs');
const path = require('path');

const getRandomInt = (min, max, exclude = []) => {
	const randomInt = Math.floor(min + Math.random() * (max + 1 - min));

	if (exclude.includes(randomInt)) {
		return getRandomInt(min, max, exclude);
	} else {
		return randomInt;
	}
};

const findString = async (str) => {
	const fileData = await new Promise((res, rej) => {
		fs.readFile(path.join('index.js'), 'utf8', (err, data) => {
			if (err) {
				rej(err);
			}

			res(data);
		});
	});

	return fileData.includes(str);
};

module.exports = {
	getRandomInt,
	findString
};