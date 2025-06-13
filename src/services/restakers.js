const ethers = require('ethers');
const { RPC_URL } = require('../config/constants');

const delegationManagerAddress = ethers.getAddress('0x8e5693140b662f0A56c2bC1f2eCb71B74B36e77F');
const delegatedEventTopic = ethers.id("Delegated(address,address)");

async function fetchRestakers() {
  try {
    const provider = new ethers.JsonRpcProvider(RPC_URL);

    const currentBlock = await provider.getBlockNumber();
    const fromBlock = 19000000;

    console.log("Scanning logs for Delegated events...");
    console.log("From block:", fromBlock, "To block:", currentBlock);

    const logs = await provider.getLogs({
      address: delegationManagerAddress,
      fromBlock,
      toBlock: currentBlock,
      topics: [delegatedEventTopic]
    });

    console.log(`Found ${logs.length} delegated logs`);

    // TEMP: Return one known restaker for demo purposes
    return [
      {
        user: "0x6F4F2bF08Aa8C3A84bDF37F637a33A04E96A06Db",
        operator: "0x956F2A99d9E2826eDa30B85e7B9E12D63EFaAb61",
        amount: 100.0,
        txHash: "0xabc123...dummy",
        blockNumber: 21000000
      },
      {
        user: "0x6F4F2bF08Aa8C3A84bDF37F637a33A04E96A06Db",
        operator: "0xValidator2",
        amount: 40.0,
        txHash: "0xabc456...dummy",
        blockNumber: 21000001
      }
    ];

    // In future, replace with real logs:
    /*
    const iface = new ethers.Interface([
      "event Delegated(address indexed staker, address indexed operator)"
    ]);

    return logs.map(log => {
      const parsed = iface.parseLog(log);
      return {
        user: parsed.args.staker,
        operator: parsed.args.operator,
        txHash: log.transactionHash,
        blockNumber: log.blockNumber
      };
    });
    */

  } catch (err) {
    console.error("Error scanning Delegated logs:", err.message);
    return [];
  }
}

module.exports = { fetchRestakers };
