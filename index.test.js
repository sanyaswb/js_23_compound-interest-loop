const compoundInterest = require('./index');
const solution = require('./system/solution');
const { getRandomInt, findString } = require('./system/environment');

test('Функция должна вернуть число', () => {
	const type = typeof compoundInterest(10000, 5, 4, 200, 5);

	expect(type).toBe('number');
});

test('Необходимо использовать цикл for или цикл while', async () => {
	const whileMatch = await findString('while');
	const forMatch = await findString('for');

	expect(whileMatch || forMatch).toBeTruthy();
});

test('Тест. startDeposit: 10000, annualRate: 5, annualAmount: 4, additionalInvestments: 200, interestPeriod: 5', () => {
	const res = compoundInterest(10000, 5, 4, 200, 5);

	expect(res).toBe(17332.97);
});

test('Тест. startDeposit: 1000, annualRate: 2, annualAmount: 12, additionalInvestments: 0, interestPeriod: 1', () => {
	const res = compoundInterest(1000, 2, 12, 0, 1);

	expect(res).toBe(1020.18);
});

test('Тест. startDeposit: 5000, annualRate: 17, annualAmount: 1, additionalInvestments: 5000, interestPeriod: 5', () => {
	const res = compoundInterest(5000, 17, 1, 5000, 5);

	expect(res).toBe(46034.24);
});

test('Тест. startDeposit: 20000, annualRate: 3, annualAmount: 4, additionalInvestments: 2000, interestPeriod: 10', () => {
	const res = compoundInterest(20000, 3, 4, 2000, 10);

	expect(res).toBe(119859.94);
});

test('Тест. startDeposit: 2000, annualRate: 2.5, annualAmount: 1, additionalInvestments: 200, interestPeriod: 30', () => {
	const res = compoundInterest(2000, 2.5, 1, 200, 30);

	expect(res).toBe(12975.68);
});

test('Auto: random outcomes', () => {
	let failed = false;

	for (let i = 0; i < 100; i++) {
		const randomBoolean = getRandomInt(1, 2) === 1;
		const randDeposit = getRandomInt(1, 50) * 1000;
		let randRate = getRandomInt(1, 20);

		if (randomBoolean) {
			randRate *= 0.5;
		}

		const randAnnualAmount = getRandomInt(1, 12);
		const randAdditionalInvestments = getRandomInt(1, 50) * 100;
		const randInterestPeriod = getRandomInt(1, 30);

		if (solution(randDeposit, randRate, randAnnualAmount, randAdditionalInvestments, randInterestPeriod) !== compoundInterest(randDeposit, randRate, randAnnualAmount, randAdditionalInvestments, randInterestPeriod)) {
			failed = 'failed';
			break;
		}
	}

	expect(failed).not.toBe('failed');
});