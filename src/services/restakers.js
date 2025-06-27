const { request, gql } = require('graphql-request');
const endpoint = "https://gateway.thegraph.com/api/ce69e7b47e665e5e0bf73c183109d454/subgraphs/id/68g9WSC4QTUJmMpuSbgLNENrcYha4mPmXhWGCoupM7kB";

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
    const data = await request(endpoint, query);

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