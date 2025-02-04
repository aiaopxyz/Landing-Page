'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/40 to-black" />
      
      {/* Crypto Grid Pattern */}
      <div className="absolute inset-0 crypto-grid opacity-40 bg-blend-overlay scale-[2] md:scale-100" />
      
      {/* Neural Network Glow */}
      <div className="absolute inset-0 neural-glow opacity-50 animate-pulse scale-150 md:scale-100" />
      
      {/* Hexagon Pattern */}
      <div className="absolute inset-0 hex-pattern opacity-20 md:opacity-30 bg-blend-soft-light scale-[1.5] md:scale-100" />
      
      {/* Circuit Pattern */}
      <div className="absolute inset-0 circuit-pattern opacity-20 md:opacity-30 bg-blend-overlay scale-[1.5] md:scale-100" />

      {/* Floating Crypto Symbols */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {['₿', 'Ξ', '◈', '∞', '⬡'].map((symbol, i) => (
          <div
            key={i}
            className="absolute floating-element text-purple-500/10 text-4xl md:text-6xl font-bold"
            style={{
              top: `${15 + i * (window.innerWidth > 768 ? 20 : 15)}%`,
              left: `${10 + i * (window.innerWidth > 768 ? 20 : 15)}%`,
              animationDelay: `${i * -2}s`,
            }}
          >
            {symbol}
          </div>
        ))}
      </div>

      {/* Binary Rain Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="binary-rain"
            style={{
              left: `${i * 10}%`,
              animation: `float ${10 + i * 2}s linear infinite`,
              animationDelay: `-${i * 2}s`,
            }}
          >
            {'10'.repeat(20)}
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        {/* Beta Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm mb-8"
        >
          <motion.span
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 5 }}
            className="mr-2"
          >
            ⚡
          </motion.span>
          Beta Access Available Soon
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
        >
          <span className="text-gradient">
            Agent of Profit:
          </span>
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400">
            AI-Powered Crypto Trading
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="font-display text-lg md:text-xl mb-12 max-w-2xl mx-auto"
        >
          <span className="text-gray-300">
            Automate your trading with cutting-edge AI Agents.
          </span>
          <span className="block mt-2 text-gradient font-semibold">
            Earn profits while you sleep.
          </span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300"
          >
            Get Early Access
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full border border-purple-500/30 text-purple-300 hover:bg-purple-500/10 transition-all duration-300"
          >
            Explore the Protocol
          </motion.button>
        </motion.div>

        {/* Powered By Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center"
        >
          <p className="text-gray-500 text-sm mb-6">Powered By</p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {[
              {
                name: 'Monad Chain',
                logo: '/monad-chain-logo.png',
                width: 150,
                height: 40
              },
              {
                name: 'Core Chain',
                logo: '/core-chain-logo2.png',
                width: 150,
                height: 40
              },
            ].map((partner) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative group"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative"
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={partner.width}
                    height={partner.height}
                    className="opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
