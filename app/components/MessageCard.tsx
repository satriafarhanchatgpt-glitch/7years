'use client';

import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';
import { messageData } from '@/data';

export default function MessageCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.2, delay: 1, ease: [0.6, 0.05, 0.01, 0.9] }}
      className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl px-3 sm:px-4 md:px-6 py-4 md:py-6"
    >
      {/* Glassmorphism Card */}
      <motion.div
        className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8 lg:p-10 border border-white/50"
        style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.15) 100%)',
          backdropFilter: 'blur(30px) saturate(180%)',
          WebkitBackdropFilter: 'blur(30px) saturate(180%)',
          boxShadow: '0 8px 32px 0 rgba(104, 181, 94, 0.2), inset 0 1px 2px rgba(255, 255, 255, 0.3)',
        }}
        whileHover={{ 
          boxShadow: '0 12px 48px 0 rgba(104, 181, 94, 0.3), inset 0 1px 2px rgba(255, 255, 255, 0.4)',
          scale: 1.005,
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Glass shine effect */}
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent rounded-t-2xl sm:rounded-t-3xl pointer-events-none" />
        
        {/* Subtle decorative corner accents */}
        <div className="absolute top-0 left-0 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 border-t border-l border-white/30 rounded-tl-2xl sm:rounded-tl-3xl" />
        <div className="absolute bottom-0 right-0 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 border-b border-r border-white/30 rounded-br-2xl sm:rounded-br-3xl" />

        {/* Elegant leaf accents */}
        <div className="absolute -top-1 -right-1 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-gradient-to-br from-ghibli-grass-bright to-ghibli-grass rounded-full opacity-70 shadow-sm" />
        <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-gradient-to-br from-ghibli-grass-bright to-ghibli-grass rounded-full opacity-70 shadow-sm" />

        {/* Header */}
        <motion.div 
          className="text-center mb-4 sm:mb-6 md:mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-ghibli font-bold text-ghibli-text/90 mb-1.5 sm:mb-2 tracking-wide drop-shadow-sm">
            {messageData.title}
          </h1>
          <p className="text-[10px] sm:text-xs md:text-sm text-ghibli-text/50 font-ghibli font-medium">
            {messageData.subtitle}
          </p>
        </motion.div>

        {/* Message Content */}
        <article className="space-y-3 sm:space-y-4 text-ghibli-text/90">
          {/* Greeting */}
          <AnimatedText delay={1.8} className="text-lg sm:text-xl md:text-2xl font-ghibli font-semibold mb-3 sm:mb-5 drop-shadow-sm">
            {messageData.greeting}
          </AnimatedText>

          {/* Paragraphs */}
          {messageData.paragraphs.slice(0, -1).map((paragraph, index) => (
            <AnimatedText 
              key={index} 
              delay={2 + index * 0.15}
              className="text-xs sm:text-sm md:text-base leading-relaxed sm:leading-relaxed md:leading-loose font-sans font-normal text-justify"
            >
              {paragraph}
            </AnimatedText>
          ))}

          {/* Closing line (before signature) */}
          <AnimatedText 
            delay={2 + (messageData.paragraphs.length - 1) * 0.15}
            className="text-xs sm:text-sm md:text-base leading-relaxed sm:leading-relaxed md:leading-loose font-sans font-light italic text-justify mt-4 sm:mt-6"
          >
            {messageData.paragraphs[messageData.paragraphs.length - 1]}
          </AnimatedText>

          {/* Signature */}
          <AnimatedText 
            delay={2.5 + messageData.paragraphs.length * 0.15}
            className="text-right mt-4 sm:mt-6"
          >
            <p className="text-base sm:text-lg md:text-xl font-ghibli font-semibold text-ghibli-foliage drop-shadow-sm">
              {messageData.signature}
            </p>
          </AnimatedText>
        </article>

        {/* Decorative divider at bottom */}
        <motion.div 
          className="mt-6 sm:mt-8 flex justify-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 3 }}
        >
          <div className="w-16 sm:w-20 h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-full shadow-sm" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

