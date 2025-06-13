# EigenLayer Restaking API

This is a backend API service built with **Node.js + Express**, simulating and exposing restaking data on the **EigenLayer** protocol, including:

- List of restakers and their delegation targets
- Validator/operator metadata (total stake, status, etc.)
- Reward breakdown per user and per operator

> 🔧 Uses mock data for now; can be extended to fetch real on-chain events or integrate with testnet.

---

## Features

| Endpoint | Description |
|----------|-------------|
| `GET /restakers` | Returns all user delegations to operators |
| `GET /validators` | Aggregates total stake per validator |
| `GET /rewards/:address` | Calculates reward breakdown for a user (5% mock reward logic) |

---

## Technologies Used

- Node.js + Express
- Ethers.js for on-chain querying
- GraphQL (planned integration)
- REST API architecture

---

## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/R-V-Abhishek/eigen-restaking-api.git
cd eigen-restaking-api
```
### 2. Install dependencies
```bash
npm install
```

### 3. Add .env

# .env
RPC_URL=https://mainnet.infura.io/v3/YOUR_INFURA_KEY

### 4. Run the server
```bash
npm start
```

    Example API Calls

    GET /restakers
    Returns:

[
  {
    "user": "0xabc...",
    "operator": "0xdef...",
    "amount": 100
  }
]

    GET /validators
    Returns:

[
  {
    "operator": "0xdef...",
    "totalStake": 100
  }
]

    GET /rewards/0xabc...
    Returns:

{
  "address": "0xabc...",
  "totalRewards": 5,
  "rewardsByValidator": [...]
}

### Future Extensions

    Connect to live Delegated events

    Use real staking amounts per operator

    Add slash history via on-chain Slashed logs

    Add persistent storage (MongoDB/Postgres)

### Author

R V Abhishek – @R-V-Abhishek

