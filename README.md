# 🌐 BlockchainExchange - Multi-Chain NFT & Coin Exchange

A decentralized multi-chain exchange supporting **Flow**, **Ethereum**, and **Polygon** blockchains with NFT marketplace, token swaps, liquidity pools, and real-time analytics.

## ✨ Features

### Must-Have ✅
- **🖼️ NFT Marketplace** - Buy, sell, and trade Flow NFTs with 1% fees
- **💱 Coin/Token Swap** - Instant token exchange with automatic market maker (AMM)
- **💧 Liquidity Pools** - Provide liquidity and earn from transaction fees
- **📊 Analytics Dashboard** - Real-time trading data, volume charts, and top traders

### Governance 🗳️
- **BXEX Governance Token** - 10M Initial Supply for voting
- **Fee Distribution** - 1% trading fees → 0.5% to LPs + 0.5% to Governance Treasury
- **Multi-Chain Support** - Flow, Ethereum, Polygon ready

## 🏗️ Architecture

```
BlockchainExchange/
├── smart-contracts/              # Blockchain contracts
│   ├── cadence/                  # Flow contracts
│   │   ├── GovernanceToken.cdc   # BXEX token
│   │   ├── NFTMarketplace.cdc    # NFT trading
│   │   ├── CoinExchange.cdc      # Token swaps
│   │   └── LiquidityPool.cdc     # LP management
│   └── flow.json                 # Flow config
│
├── backend/                      # REST API
│   ├── src/
│   │   ├── services/             # Business logic
│   │   ├── controllers/          # API endpoints
│   │   ├── routes/               # Route definitions
│   │   └── index.ts              # Entry point
│   ├── package.json
│   └── Dockerfile
│
├── frontend/                     # Next.js app
│   ├── src/app/
│   │   ├── page.tsx              # Home
│   │   ├── marketplace/          # NFT marketplace
│   │   ├── swap/                 # Token swap
│   │   ├── pools/                # Liquidity pools
│   │   └── analytics/            # Dashboard
│   ├── package.json
│   └── Dockerfile
│
├── database/                     # PostgreSQL
│   └── init.sql                  # Schema & migrations
│
├── docker-compose.yml            # Local dev environment
├── package.json                  # Monorepo root
├── README.md                     # This file
├── QUICKSTART.md                 # 5-minute setup
├── ARCHITECTURE.md               # System design
└── DEPLOYMENT.md                 # Production guide
```

## 🚀 Quick Start (5 Minutes)

### Prerequisites
- ✅ Node.js 18+
- ✅ Docker & Docker Compose
- ✅ Git

### Installation

```bash
# 1. Clone repository
git clone https://github.com/Breitjoda/BlockchainExchange.git
cd BlockchainExchange

# 2. Install dependencies
npm install:all

# 3. Setup environment
cp .env.example .env

# 4. Start services
docker-compose up -d

# 5. Start development
npm run dev
```

### Access the Platform

| Component | URL |
|-----------|-----|
| Frontend | http://localhost:3000 |
| Backend API | http://localhost:3001/api/v1/status |
| NFT Marketplace | http://localhost:3000/marketplace |
| Token Swap | http://localhost:3000/swap |
| Liquidity Pools | http://localhost:3000/pools |
| Analytics | http://localhost:3000/analytics |

## 📊 Key Features

### 🖼️ NFT Marketplace
- Browse active NFT listings
- Filter by status (active/sold/cancelled)
- View NFT details and seller info
- Purchase with instant settlement
- List your own NFTs
- 1% trading fee (no listing fee)

### 💱 Token Swap
- Real-time price quotes
- Constant product AMM (x*y=k)
- 1% transaction fee
- Price impact calculation
- Slippage protection
- Multiple token pairs
- 24h volume tracking

### 💧 Liquidity Pools
- Deposit token pairs to earn fees
- Liquidity provider (LP) tokens
- Real-time APY display
- Remove liquidity anytime
- Automatic fee distribution
- Pool statistics & performance

### 📊 Analytics Dashboard
- 24-hour trading volume
- 7-day volume history with charts
- Top traders leaderboard
- Token price history
- NFT marketplace statistics
- Fee collection tracking
- Portfolio value calculation

## 💰 Fee Structure

| Type | Rate | Distribution |
|------|------|--------------|
| Trading Fee | 1% | 0.5% LP + 0.5% Governance |
| NFT Listing | 0% | Free |
| Swap Slippage | Variable | None |

## 🔒 Smart Contracts

### GovernanceToken.cdc
- Symbol: BXEX
- Total Supply: 10,000,000
- Decimals: 8
- Minting: Admin only
- Burning: Supported

### NFTMarketplace.cdc
- List Flow NFTs for sale
- 1% transaction fee collection
- Automatic settlement
- Event logging for auditing

### CoinExchange.cdc
- Constant product formula
- 1% fee mechanism
- Price quote calculation
- Slip protection

## 🛠️ Tech Stack

### Smart Contracts
- **Cadence** - Flow blockchain
- **Solidity** - EVM chains (future)

### Backend
- **Node.js** + **Express** - Server
- **TypeScript** - Type safety
- **PostgreSQL** - Data persistence
- **Redis** - Caching

### Frontend
- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Recharts** - Data visualization
- **wagmi/ethers** - Web3 integration
- **@onflow/fcl** - Flow blockchain

### Infrastructure
- **Docker** - Containerization
- **PostgreSQL** - Database
- **Redis** - Cache layer

## 📚 Documentation

| Document | Purpose |
|----------|---------|
| [QUICKSTART.md](./QUICKSTART.md) | 5-minute setup guide |
| [ARCHITECTURE.md](./ARCHITECTURE.md) | System design & data flow |
| [DEPLOYMENT.md](./DEPLOYMENT.md) | Production deployment |
| [backend/README.md](./backend/README.md) | API reference |
| [frontend/README.md](./frontend/README.md) | Frontend guide |
| [smart-contracts/README.md](./smart-contracts/README.md) | Smart contract docs |

## 🔐 Security

- ✅ Input validation & sanitization
- ✅ SQL injection prevention
- ✅ Rate limiting (100 req/min)
- ✅ CORS protection
- ✅ JWT authentication ready
- ✅ Smart contract auditing recommended
- ✅ Multi-sig wallet support

## 📈 Performance

- Response time: <200ms
- Database connection pooling: 20 connections
- Redis cache (5 min TTL for prices)
- Code splitting & lazy loading
- Image optimization
- CSS minification

## 🚢 Deployment

### Local Development
```bash
docker-compose up -d
npm run dev
```

### Production
```bash
# Build
npm run build

# Deploy backend
docker push <registry>/blockchain-exchange:backend

# Deploy frontend
vercel deploy

# Deploy contracts
flow project deploy --network mainnet
```

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed production setup.

## 🔄 API Endpoints

### NFT Marketplace
```
GET    /api/v1/nft/listings
GET    /api/v1/nft/listings/:id
POST   /api/v1/nft/listings
PUT    /api/v1/nft/listings/:id
DELETE /api/v1/nft/listings/:id
POST   /api/v1/nft/purchase
GET    /api/v1/nft/seller/:address
```

### Token Swap
```
GET    /api/v1/swap/pairs
GET    /api/v1/swap/pairs/:tokenA/:tokenB
GET    /api/v1/swap/price
POST   /api/v1/swap/execute
GET    /api/v1/swap/history
GET    /api/v1/swap/stats
```

### Analytics
```
GET    /api/v1/analytics/volume/24h
GET    /api/v1/analytics/volume/history
GET    /api/v1/analytics/top-traders
GET    /api/v1/analytics/price-history
GET    /api/v1/analytics/nft-stats
GET    /api/v1/analytics/portfolio/:address
GET    /api/v1/analytics/fees
```

## 🧪 Testing

```bash
# All tests
npm test

# Specific test
npm test -- nft.controller

# Coverage
npm run test:coverage

# Watch mode
npm run test:watch
```

## 📊 Database Schema

- **users** - User accounts & wallets
- **nft_listings** - NFT marketplace listings
- **transactions** - All blockchain transactions
- **trading_pairs** - Liquidity pool pairs
- **swaps** - Token swap history
- **liquidity_providers** - LP positions
- **portfolio** - User asset holdings
- **fee_collection** - Fee tracking
- **price_history** - Historical prices

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing`)
5. Open Pull Request

## 📄 License

MIT License - See [LICENSE](./LICENSE) file

## 🆘 Support

- 📖 Check [QUICKSTART.md](./QUICKSTART.md)
- 🐛 View [GitHub Issues](https://github.com/Breitjoda/BlockchainExchange/issues)
- 💬 Discussions available on GitHub

## 👤 Author

[@Breitjoda](https://github.com/Breitjoda)

## 🎯 Roadmap

- [ ] Phase 1: Smart contracts & backend
- [ ] Phase 2: Frontend development
- [ ] Phase 3: Testing & integration
- [ ] Phase 4: Mainnet deployment
- [ ] Phase 5: Cross-chain bridges
- [ ] Phase 6: Advanced features (limit orders, etc.)

---

**Built with ❤️ for the multi-chain future**

**Join the revolution in decentralized trading!** 🚀
