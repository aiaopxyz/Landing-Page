import React from 'react';
import { motion } from 'framer-motion';

interface IconProps {
  className?: string;
  isHovered?: boolean;
}

const pathVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: { 
    pathLength: 1, 
    opacity: 1,
    transition: { 
      duration: 1,
      ease: "easeInOut"
    }
  }
};

const rotateVariants = {
  hover: { 
    rotate: 360,
    transition: { duration: 20, ease: "linear", repeat: Infinity }
  }
};

const pulseVariants = {
  hover: {
    scale: [1, 1.1, 1],
    transition: { 
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export const AIAnalysisIcon: React.FC<IconProps> = ({ className = "w-8 h-8", isHovered }) => (
  <motion.svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    animate={isHovered ? rotateVariants.hover : {}}
  >
    <motion.path 
      d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      variants={pathVariants}
      initial="hidden"
      animate="visible"
    />
    <motion.path 
      d="M13 2.05C13 2.05 16 6 16 12" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      variants={pathVariants}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.2 }}
    />
    <motion.path 
      d="M11 21.95C11 21.95 8 18 8 12" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      variants={pathVariants}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.4 }}
    />
    <motion.path 
      d="M2.63 15.5H12" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      variants={pathVariants}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.6 }}
    />
    <motion.path 
      d="M21.37 8.5H12" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      variants={pathVariants}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.8 }}
    />
  </motion.svg>
);

export const SmartContractIcon: React.FC<IconProps> = ({ className = "w-8 h-8", isHovered }) => (
  <motion.svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    animate={isHovered ? pulseVariants.hover : {}}
  >
    <motion.path 
      d="M7 8L3 12L7 16" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      variants={pathVariants}
      initial="hidden"
      animate="visible"
    />
    <motion.path 
      d="M17 8L21 12L17 16" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      variants={pathVariants}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.2 }}
    />
    <motion.path 
      d="M14 4L10 20" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      variants={pathVariants}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.4 }}
    />
    <motion.rect 
      x="4" 
      y="4" 
      width="16" 
      height="16" 
      rx="2" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeDasharray="2 2"
      variants={pathVariants}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.6 }}
    />
  </motion.svg>
);

export const AutomatedTradingIcon: React.FC<IconProps> = ({ className = "w-8 h-8", isHovered }) => (
  <motion.svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    animate={isHovered ? rotateVariants.hover : {}}
  >
    <motion.path 
      d="M2 12H4M20 12H22M12 2V4M12 20V22" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round"
      variants={pathVariants}
      initial="hidden"
      animate="visible"
    />
    <motion.path 
      d="M4.93 4.93L6.34 6.34M17.66 17.66L19.07 19.07M19.07 4.93L17.66 6.34M6.34 17.66L4.93 19.07" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round"
      variants={pathVariants}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.2 }}
    />
    <motion.path 
      d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" 
      stroke="currentColor" 
      strokeWidth="2"
      variants={pathVariants}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.4 }}
    />
    <motion.path 
      d="M12 7V12L15 15" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round"
      variants={pathVariants}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.6 }}
    />
  </motion.svg>
);

export const RiskManagementIcon: React.FC<IconProps> = ({ className = "w-8 h-8", isHovered }) => (
  <motion.svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    animate={isHovered ? pulseVariants.hover : {}}
  >
    <motion.path 
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      variants={pathVariants}
      initial="hidden"
      animate="visible"
    />
    <motion.path 
      d="M12 8V12" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      variants={pathVariants}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.3 }}
    />
    <motion.path 
      d="M12 16H12.01" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      variants={pathVariants}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.6 }}
    />
    <motion.path 
      d="M8 12L12 8L16 12" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      variants={pathVariants}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.9 }}
    />
  </motion.svg>
);

export const MarketInsightsIcon: React.FC<IconProps> = ({ className = "w-8 h-8", isHovered }) => (
  <motion.svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    animate={isHovered ? { scale: [1, 1.1, 1] } : {}}
    transition={{ duration: 1, repeat: Infinity }}
  >
    <motion.path 
      d="M21 21H4.6C4.03995 21 3.75992 21 3.54601 20.891C3.35785 20.7951 3.20487 20.6422 3.10899 20.454C3 20.2401 3 19.9601 3 19.4V3" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      variants={pathVariants}
      initial="hidden"
      animate="visible"
    />
    <motion.path 
      d="M7 14L12 9L16 13L21 8" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      variants={pathVariants}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.3 }}
    />
    <motion.path 
      d="M21 12V8H17" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      variants={pathVariants}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.6 }}
    />
  </motion.svg>
);

export const SecurityIcon: React.FC<IconProps> = ({ className = "w-8 h-8", isHovered }) => (
  <motion.svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    animate={isHovered ? pulseVariants.hover : {}}
  >
    <motion.path 
      d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      variants={pathVariants}
      initial="hidden"
      animate="visible"
    />
    <motion.path 
      d="M9 12L11 14L15 10" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      variants={pathVariants}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.4 }}
    />
  </motion.svg>
);
