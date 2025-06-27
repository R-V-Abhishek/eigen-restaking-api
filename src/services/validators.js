const Restaker = require('../models/Restaker');

async function calculateValidatorsFromDB() {
  const restakers = await Restaker.find();
  const operatorMap = new Map();

  for (const { operator, amount } of restakers) {
    if (!operatorMap.has(operator)) {
      operatorMap.set(operator, {
        totalStake: 0,
        slashHistory: []
      });
    }
    const opData = operatorMap.get(operator);
    opData.totalStake += amount || 0;

    // Simulated slashing (optional)
    if (operator.toLowerCase().includes('dead')) {
      opData.slashHistory.push({ timestamp: Date.now(), amount: 5 });
    }

    operatorMap.set(operator, opData);
  }

  return Array.from(operatorMap.entries()).map(([operator, data]) => ({
    operator,
    totalStake: Number(data.totalStake.toFixed(4)),
    status: "active",
    slashHistory: data.slashHistory
  }));
}

module.exports = { calculateValidatorsFromDB };
