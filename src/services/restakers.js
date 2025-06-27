const { request, gql } = require('graphql-request');
const { GRAPHQL_ENDPOINT } = require('../config/constants');

const query = gql`
  {
    pools(first: 20, orderBy: totalValueLockedUSD, orderDirection: desc) {
      id
      inputTokens {
        id
        name
        symbol
      }
      totalValueLockedUSD
    }
  }
`;

async function fetchRestakersFromChain() {
  try {
    const data = await request(GRAPHQL_ENDPOINT, query);

    return data.pools.map((p) => ({
      user: p.inputTokens[0]?.id ?? "0x0",
      operator: p.id,
      amount: Number(p.totalValueLockedUSD),
      txHash: p.id,
      blockNumber: 0
    }));
  } catch (err) {
    console.error("GraphQL fetch error:", err.message);
    return [];
  }
}

module.exports = { fetchRestakersFromChain };