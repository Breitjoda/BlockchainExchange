# Frontend - BlockchainExchange

A modern, responsive Next.js frontend for the multi-chain NFT & Coin Exchange.

## 🎨 Architecture

```
frontend/src/
├── app/
│   ├── page.tsx                 # Home page
│   ├── layout.tsx               # Root layout
│   ├── globals.css              # Global styles
│   ├── marketplace/
│   │   └── page.tsx             # NFT marketplace
│   ├── swap/
│   │   └── page.tsx             # Token swap
│   ├── pools/
│   │   └── page.tsx             # Liquidity pools
│   └── analytics/
│       └── page.tsx             # Analytics dashboard
├── components/                  # Reusable components
├── hooks/                       # Custom React hooks
├── utils/                       # Utility functions
└── styles/                      # Component styles
```

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

Open [http://localhost:3000](http://localhost:3000) to view in browser.

## 📦 Dependencies

### Core
- **Next.js 14** - React framework
- **React 18** - UI library
- **TypeScript** - Type safety

### Web3
- **wagmi** - React hooks for Ethereum
- **ethers** - Blockchain interaction
- **@onflow/fcl** - Flow blockchain
- **@rainbow-me/rainbowkit** - Wallet connection

### UI & Charts
- **Tailwind CSS** - Styling
- **Recharts** - Data visualization
- **clsx** - Conditional classes

### State & Data
- **zustand** - State management
- **axios** - HTTP client
- **react-query** - Data fetching

## 🎯 Features

### 🏠 Home Page
- Overview of platform statistics
- Feature highlights
- Navigation to main features

### 🖼️ NFT Marketplace (`/marketplace`)
- Browse active NFT listings
- Filter by status (active/sold/cancelled)
- View NFT details and prices
- Purchase NFTs
- List your own NFTs

### 💱 Token Swap (`/swap`)
- Real-time price quotes
- Swap calculator with 1% fee
- Price impact display
- Token selection
- Transaction execution

### 💧 Liquidity Pools (`/pools`)
- View available pools
- Pool statistics and APY
- Add/remove liquidity
- Monitor LP positions
- Earn yield on provided liquidity

### 📊 Analytics (`/analytics`)
- 24h trading volume
- Historical volume charts
- Top traders leaderboard
- Token price history
- NFT marketplace stats
- Fee distribution

## 🎨 Styling

Using **Tailwind CSS** for utility-first styling:

```tsx
<div className="bg-white rounded-lg shadow-lg p-6">
  <h1 className="text-2xl font-bold text-blue-600">Title</h1>
</div>
```

## 🔌 API Integration

All API calls use `process.env.NEXT_PUBLIC_API_URL`:

```tsx
const response = await fetch(
  `${process.env.NEXT_PUBLIC_API_URL}/nft/listings`
);
const data = await response.json();
```

## 🔐 Wallet Integration

### Flow Blockchain

```tsx
import * as fcl from '@onflow/fcl';

// Authenticate user
await fcl.authenticate();

// Get current user
fcl.currentUser.subscribe((user) => {
  console.log('User:', user);
});

// Send transaction
const txId = await fcl.mutate({
  cadence: transactionCode,
  args: (arg, t) => [arg(amount, t.UFix64)],
  proposer: fcl.authz,
  payer: fcl.authz,
  authorizations: [fcl.authz],
  limit: 9999,
});
```

### Ethereum/Polygon

Use `wagmi` for wallet connection and `ethers` for transactions.

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Touch-friendly UI elements
- Mobile-optimized navigation

## 🧪 Testing

```bash
# Run tests
npm test

# Watch mode
npm test -- --watch

# Coverage
npm test -- --coverage
```

## 📦 Build & Deploy

### Build for Production

```bash
npm run build
npm run start
```

### Environment Variables

```env
NEXT_PUBLIC_API_URL=https://api.blockchain-exchange.com
NEXT_PUBLIC_FLOW_ACCESS_NODE=https://mainnet.onflow.org
NEXT_PUBLIC_NETWORK=mainnet
```

### Deploy to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

## 🔄 State Management

Using **Zustand** for simple state management:

```tsx
import create from 'zustand';

interface Store {
  user: User | null;
  setUser: (user: User) => void;
}

const useStore = create<Store>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));
```

## 🎨 Component Examples

### NFT Card

```tsx
<div className="bg-white rounded-lg shadow-lg overflow-hidden">
  <div className="bg-gradient-to-br h-48"></div>
  <div className="p-4">
    <h3 className="text-lg font-bold">NFT Title</h3>
    <button className="w-full bg-blue-600 text-white py-2 rounded-lg">
      Buy Now
    </button>
  </div>
</div>
```

### Swap Interface

```tsx
<div className="max-w-md">
  <input placeholder="Amount" className="w-full border rounded-lg" />
  <select className="w-full border rounded-lg">
    <option>Token</option>
  </select>
  <button className="w-full bg-blue-600 text-white py-2">Swap</button>
</div>
```

## 🚀 Performance

- Code splitting with dynamic imports
- Image optimization
- CSS optimization
- Bundle analysis

```bash
npm run build -- --analyze
```

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [wagmi](https://wagmi.sh)
- [Flow FCL](https://developers.flow.com/tools/fcl-js)

## 🐛 Troubleshooting

### Port already in use

```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
npm run dev
```

### Module not found

```bash
rm -rf node_modules package-lock.json
npm install
```

### Build errors

```bash
npm run lint
npm run type-check
```

## 📞 Support

For issues:
1. Check the [GitHub Issues](https://github.com/Breitjoda/BlockchainExchange/issues)
2. Review API logs
3. Check browser console for errors
4. Open new issue with details

---

Built with ❤️ for the multi-chain future
