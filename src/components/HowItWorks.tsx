'use client';

import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    id: 1,
    title: 'Deposit',
    description: 'Connect your wallet, subscribe to your preferred risk tier, and deposit funds.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" 
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'AI Trades',
    description: 'Our AI engine continuously monitors market data and executes trades in real-time.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" 
        />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Profit Pool & Claim',
    description: 'Realized gains flow into your Profit Pool. Claim or reinvest at any time.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
        />
      </svg>
    ),
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-black" id="how-it-works">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm mb-6">
            <span className="mr-2">🔍</span>
            Simple & Efficient
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-gradient">
              How It Works
            </span>
          </h2>
          <p className="font-display text-lg text-gray-400 max-w-2xl mx-auto">
            Start earning profits in three simple steps
          </p>
        </motion.div>

        {/* Steps Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Desktop Timeline Line */}
          <div className="hidden lg:block absolute left-0 right-0 top-1/2 h-0.5 bg-gradient-to-r from-purple-500/0 via-purple-500/20 to-purple-500/0 -translate-y-1/2" />

          {/* Steps Grid */}
          <div className="grid lg:grid-cols-3 gap-8 md:gap-12 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative"
              >
                {/* Mobile Step Connector */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden absolute left-1/2 bottom-0 w-px h-8 bg-gradient-to-b from-purple-500/20 to-transparent -mb-8 transform -translate-x-1/2" />
                )}

                {/* Step Card */}
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="group relative bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm border border-purple-500/20 h-full"
                >
                  {/* Step Number */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white text-lg font-bold shadow-lg shadow-purple-500/20"
                  >
                    {step.id}
                  </motion.div>

                  {/* Content Container */}
                  <div className="mt-6">
                    {/* Icon */}
                    <div className="mb-4 text-purple-400 transform transition-transform duration-300 group-hover:scale-110">
                      {step.icon}
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="font-sans text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {step.description}
                    </p>
                  </div>

                  {/* Hover Gradient Overlay */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-pink-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>

                {/* Desktop Step Connector */}
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    className="hidden lg:block absolute top-1/2 -right-6 w-12 h-12 transform -translate-y-1/2 translate-x-1/2"
                  >
                    <div className="w-full h-full rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                      <svg className="w-4 h-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Learn More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/docs"
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 hover:text-white border border-purple-500/30 transition-all duration-300 group font-display"
          >
            Learn More in Docs
            <svg
              className="ml-2 w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
