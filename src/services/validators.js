const { fetchRestakers } = require('./restakers');

async function fetchValidators() {
  const restakers = await fetchRestakers();

  const operatorMap = new Map();

  for (const restaker of restakers) {
    const { operator, amount } = restaker;

    if (!operatorMap.has(operator)) {
      operatorMap.set(operator, {
        totalStake: 0,
        slashHistory: []
      });
    }

    const data = operatorMap.get(operator);
    data.totalStake += amount || 0;

    // Add a fake slash event if operator matches some dummy value
    if (operator === '0x956F2A99d9E2826eDa30B85e7B9E12D63EFaAb61') {
      data.slashHistory.push({
        timestamp: 1717500000, // example UNIX timestamp
        amount: 10
      });
    }

    operatorMap.set(operator, data);
  }

  return Array.from(operatorMap.entries()).map(([operator, data]) => ({
    operator,
    totalStake: Number(data.totalStake.toFixed(4)),
    status: "active",
    slashHistory: data.slashHistory
  }));
}

module.exports = { fetchValidators };
