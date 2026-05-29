'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [stats] = useState({
    volume24h: '$2.4M',
    trades: '1.2K',
    nfts: '3.5K',
    pools: '12',
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-600">
      {/* Navigation */}
      <nav className="bg-white shadow-lg">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">BlockchainExchange</h1>
          <div className="space-x-4">
            <Link href="/marketplace" className="text-gray-700 hover:text-blue-600">
              NFT Marketplace
            </Link>
            <Link href="/swap" className="text-gray-700 hover:text-blue-600">
              Swap
            </Link>
            <Link href="/pools" className="text-gray-700 hover:text-blue-600">
              Pools
            </Link>
            <Link href="/analytics" className="text-gray-700 hover:text-blue-600">
              Analytics
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero section */}
      <div className="container mx-auto px-4 py-20 text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-4">Multi-Chain NFT & Coin Exchange</h2>
          <p className="text-xl mb-8 opacity-90">
            Trade NFTs and tokens across Flow, Ethereum, and Polygon with unbeatable rates
          </p>
          <div className="space-x-4">
            <Link
              href="/marketplace"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
            >
              Explore NFTs
            </Link>
            <Link
              href="/swap"
              className="inline-block bg-purple-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-purple-700 transition"
            >
              Start Trading
            </Link>
          </div>
        </div>
      </div>

      {/* Stats section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-600">{stats.volume24h}</p>
              <p className="text-gray-600 mt-2">24h Volume</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-green-600">{stats.trades}</p>
              <p className="text-gray-600 mt-2">Trades</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-purple-600">{stats.nfts}</p>
              <p className="text-gray-600 mt-2">NFTs Listed</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-orange-600">{stats.pools}</p>
              <p className="text-gray-600 mt-2">Liquidity Pools</p>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="container mx-auto px-4 py-20">
        <h3 className="text-3xl font-bold text-white text-center mb-12">
          Why Choose BlockchainExchange?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <p className="text-3xl mb-4">🖼️</p>
            <h4 className="text-xl font-bold mb-4">NFT Marketplace</h4>
            <p className="text-gray-600">
              Browse, list, and trade unique digital assets with transparent pricing
            </p>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <p className="text-3xl mb-4">💱</p>
            <h4 className="text-xl font-bold mb-4">Instant Swaps</h4>
            <p className="text-gray-600">
              Trade tokens instantly with 1% fee and best-in-class execution
            </p>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <p className="text-3xl mb-4">💧</p>
            <h4 className="text-xl font-bold mb-4">Earn Yield</h4>
            <p className="text-gray-600">
              Provide liquidity and earn a share of trading fees
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 BlockchainExchange. Built for the multi-chain future.</p>
        </div>
      </div>
    </div>
  );
}
