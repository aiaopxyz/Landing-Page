'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  AIAnalysisIcon,
  SmartContractIcon,
  AutomatedTradingIcon,
  RiskManagementIcon,
  MarketInsightsIcon,
  SecurityIcon
} from './icons/FeatureIcons';

const features = [
  {
    title: 'AI-Powered Analysis',
    description: 'Advanced machine learning algorithms analyze market trends in real-time, providing predictive insights for optimal trading decisions.',
    Icon: AIAnalysisIcon,
    stats: ['98% Accuracy', '24/7 Analysis'],
    color: 'from-purple-500/20 to-blue-500/20'
  },
  {
    title: 'Smart Contract Integration',
    description: 'Seamless integration with multiple blockchain networks and DeFi protocols, ensuring secure and efficient transactions.',
    Icon: SmartContractIcon,
    stats: ['Multi-chain Support', '100% Automated'],
    color: 'from-blue-500/20 to-cyan-500/20'
  },
  {
    title: 'Automated Trading',
    description: 'Execute trades automatically based on AI-driven insights with customizable strategies and real-time portfolio rebalancing.',
    Icon: AutomatedTradingIcon,
    stats: ['0.1s Response Time', 'Custom Strategies'],
    color: 'from-green-500/20 to-emerald-500/20'
  },
  {
    title: 'Risk Management',
    description: 'Intelligent risk assessment and portfolio optimization with advanced stop-loss mechanisms and diversification strategies.',
    Icon: RiskManagementIcon,
    stats: ['Smart Stop-loss', 'Risk Scoring'],
    color: 'from-red-500/20 to-orange-500/20'
  },
  {
    title: 'Market Insights',
    description: 'Deep market analysis with sentiment tracking, news impact assessment, and trend prediction using advanced AI models.',
    Icon: MarketInsightsIcon,
    stats: ['Real-time Data', 'Sentiment Analysis'],
    color: 'from-yellow-500/20 to-orange-500/20'
  },
  {
    title: 'Security First',
    description: 'Enterprise-grade security with multi-signature support, automated audits, and real-time threat detection systems.',
    Icon: SecurityIcon,
    stats: ['Multi-sig Support', 'Regular Audits'],
    color: 'from-indigo-500/20 to-purple-500/20'
  }
];

const Features: React.FC = () => {
  const [hoveredFeature, setHoveredFeature] = React.useState<number | null>(null);

  return (
    <section className="relative py-20 bg-black overflow-hidden" id="features">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full bg-[url('/grid.svg')] opacity-10"></div>
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
            style={{
              top: `${20 + i * 30}%`,
              left: `${10 + i * 40}%`,
            }}
            animate={{
              y: [0, 50, 0],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 10,
              delay: i * 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm mb-6">
            <span className="animate-pulse mr-2 h-2 w-2 rounded-full bg-purple-400"></span>
            Powered by Advanced Technology
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-gradient">
              Features that Set Us Apart
            </span>
          </h2>
          <p className="font-display text-lg text-gray-400 max-w-2xl mx-auto">
            Experience the future of trading with our cutting-edge AI technology and robust feature set
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              onHoverStart={() => setHoveredFeature(index)}
              onHoverEnd={() => setHoveredFeature(null)}
              className={`group relative bg-gradient-to-br ${feature.color} border border-purple-500/30 p-6 sm:p-8 rounded-2xl backdrop-blur-sm hover:shadow-2xl transition-all duration-300`}
            >
              {/* Feature Content */}
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 rounded-xl bg-white/5">
                    <feature.Icon 
                      className="w-8 h-8 text-purple-400" 
                      isHovered={hoveredFeature === index}
                    />
                  </div>
                  <motion.div
                    className="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center"
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg
                      className="w-4 h-4 text-purple-400 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.div>
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="font-sans text-gray-400 group-hover:text-gray-300 transition-colors duration-300 line-clamp-3">
                  {feature.description}
                </p>
                
                {/* Feature Stats */}
                <div className="flex flex-wrap gap-2">
                  {feature.stats.map((stat, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 text-sm text-purple-300"
                    >
                      {stat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Effect Gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-pink-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <a
            href="#get-started"
            className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-lg font-semibold hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
          >
            Start Trading Now
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
