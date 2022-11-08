function compoundInterest(startDeposit, annualRate, annualAmount, additionalInvestments, interestPeriod) {
	let result = startDeposit;

	for (let i = 0; i < annualAmount * interestPeriod; i++) {
		result += result * ((annualRate / annualAmount) / 100) + additionalInvestments;
	}

	return Math.round(result * 100) / 100;
}

module.exports = compoundInterest;