'use client';

import { motion } from 'framer-motion';

// Generate random data outside component to avoid linter errors
const generateTreeAnimations = () => ({
  swayDuration: 6 + Math.random() * 2,
  branches: Array(5).fill(0).map(() => ({
    duration: 4 + Math.random() * 2,
    delay: Math.random() * 2,
  })),
});

const generateBushes = () => 
  Array(20).fill(0).map((_, i) => ({
    left: i * 5 + Math.random() * 3,
    width: 40 + Math.random() * 60,
    height: 30 + Math.random() * 40,
    duration: 3 + Math.random() * 2,
    delay: Math.random() * 2,
  }));

const generateGrassBlades = () => 
  Array(80).fill(0).map((_, i) => ({
    left: i * 1.25,
    height: Math.random() * 40 + 20,
    color: i % 4 === 0 ? '#6FB86F' : i % 4 === 1 ? '#8FD68F' : i % 4 === 2 ? '#5FA857' : '#B8D67F',
    opacity: 0.7 + Math.random() * 0.3,
    duration: 2 + Math.random() * 3,
    delay: Math.random() * 2,
  }));

const generateGrassHighlights = () => 
  Array(15).fill(0).map((_, i) => ({
    left: i * 7,
    width: 100 + Math.random() * 80,
  }));

const generateFlowers = () =>
  Array(12).fill(0).map(() => ({
    duration: 3 + Math.random() * 2,
    delay: Math.random() * 2,
  }));

// Acacia Tree Component (realistic savanna tree)
function AcaciaTree({ 
  size = 'medium', 
  delay = 0,
  animations,
}: { 
  size?: 'small' | 'medium' | 'large'; 
  delay?: number;
  animations: ReturnType<typeof generateTreeAnimations>;
}) {
  const sizes = {
    small: { trunk: 'w-1.5 sm:w-2 h-20 sm:h-24 md:h-32', canopy: 'w-24 sm:w-32 md:w-40' },
    medium: { trunk: 'w-2 sm:w-3 h-24 sm:h-32 md:h-48', canopy: 'w-32 sm:w-40 md:w-56' },
    large: { trunk: 'w-3 sm:w-4 h-32 sm:h-40 md:h-56 lg:h-64', canopy: 'w-40 sm:w-48 md:w-60 lg:w-72' },
  };

  return (
    <motion.div 
      className="relative flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
    >
      {/* Canopy - Wide flat-topped characteristic of acacia */}
      <motion.div 
        className={`relative ${sizes[size].canopy} mb-4 md:mb-6`}
        animate={{ 
          rotate: [-1, 1, -1],
          scale: [1, 1.02, 1]
        }}
        transition={{ 
          duration: animations.swayDuration, 
          repeat: Infinity, 
          ease: 'easeInOut' 
        }}
      >
        {/* Beautiful detailed foliage - Ghibli style */}
        <div className="absolute inset-0">
          <svg viewBox="0 0 200 80" className="w-full h-full drop-shadow-lg">
            <defs>
              <filter id="foliage-shadow">
                <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
                <feOffset dx="0" dy="2" result="offsetblur"/>
                <feComponentTransfer>
                  <feFuncA type="linear" slope="0.3"/>
                </feComponentTransfer>
                <feMerge>
                  <feMergeNode/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Base shadow */}
            <ellipse cx="100" cy="72" rx="92" ry="12" fill="#5D4A2F" opacity="0.2" />
            
            {/* Main canopy - multiple organic layers */}
            <ellipse cx="100" cy="42" rx="98" ry="36" fill="#68B55E" opacity="0.95" filter="url(#foliage-shadow)" />
            <ellipse cx="100" cy="40" rx="96" ry="34" fill="#77B36E" opacity="0.92" />
            <ellipse cx="100" cy="37" rx="92" ry="31" fill="#8DD482" opacity="0.88" />
            
            {/* Left cluster detail */}
            <ellipse cx="65" cy="48" rx="40" ry="28" fill="#68B55E" opacity="0.7" />
            <ellipse cx="60" cy="45" rx="36" ry="25" fill="#77B36E" opacity="0.65" />
            <ellipse cx="58" cy="42" rx="30" ry="20" fill="#8DD482" opacity="0.6" />
            
            {/* Right cluster detail */}
            <ellipse cx="135" cy="48" rx="40" ry="28" fill="#68B55E" opacity="0.7" />
            <ellipse cx="140" cy="45" rx="36" ry="25" fill="#77B36E" opacity="0.65" />
            <ellipse cx="142" cy="42" rx="30" ry="20" fill="#8DD482" opacity="0.6" />
            
            {/* Top highlights - sun catching */}
            <ellipse cx="100" cy="28" rx="65" ry="18" fill="#96D48A" opacity="0.75" />
            <ellipse cx="90" cy="25" rx="35" ry="12" fill="#BCD97E" opacity="0.5" />
            <ellipse cx="115" cy="26" rx="30" ry="11" fill="#BCD97E" opacity="0.45" />
            
            {/* Darker depth shadows */}
            <ellipse cx="75" cy="52" rx="25" ry="18" fill="#5A9B52" opacity="0.4" />
            <ellipse cx="125" cy="52" rx="25" ry="18" fill="#5A9B52" opacity="0.4" />
          </svg>
        </div>
        
        {/* Branch details */}
        {animations.branches.map((anim, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 bg-ghibli-tree-dark/40"
            style={{
              left: `${20 + i * 15}%`,
              top: '50%',
              height: '20%',
              transformOrigin: 'top',
            }}
            animate={{
              rotate: [0, 3, 0, -3, 0],
            }}
            transition={{
              duration: anim.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: anim.delay,
            }}
          />
        ))}
      </motion.div>

      {/* Trunk removed for floating foliage effect */}
    </motion.div>
  );
}

// Flying Bird Component
function Bird({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div
      className="absolute w-4 h-4"
      initial={{ x: '-10vw', y: '20vh', opacity: 0 }}
      animate={{
        x: '110vw',
        y: ['20vh', '15vh', '25vh', '10vh'],
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        duration: 30,
        delay,
        repeat: Infinity,
        repeatDelay: 20,
        ease: 'linear',
      }}
    >
      <svg viewBox="0 0 24 24" className="w-full h-full">
        <path
          d="M12 2C12 2 8 6 4 6C4 6 8 8 12 12C12 12 16 8 20 6C20 6 16 6 12 2Z"
          fill="#2C2416"
          opacity="0.6"
        />
      </svg>
    </motion.div>
  );
}

// Generate data once per module load
const bushesData = generateBushes();
const grassBladesData = generateGrassBlades();
const grassHighlightsData = generateGrassHighlights();
const flowersData = generateFlowers();
const tree1Animations = generateTreeAnimations();
const tree2Animations = generateTreeAnimations();
const tree3Animations = generateTreeAnimations();

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Beautiful Ghibli-style sky with proper gradient */}
      <motion.div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, #6AAFE6 0%, #87CEEB 25%, #B8DCF5 60%, #E8F4FA 100%)'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />

      {/* Gentle Ghibli-style sun - Responsive */}
      <motion.div
        className="absolute top-16 right-12 sm:top-20 sm:right-20 md:top-28 md:right-32 lg:top-32 lg:right-48"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      >
        {/* Sun glow - multiple layers for softness */}
        <div className="absolute -inset-12 sm:-inset-16 md:-inset-20 lg:-inset-28 bg-yellow-200 rounded-full opacity-[0.08] blur-3xl" />
        <div className="absolute -inset-8 sm:-inset-10 md:-inset-12 lg:-inset-16 bg-yellow-300 rounded-full opacity-[0.12] blur-2xl" />
        <div className="absolute -inset-4 sm:-inset-5 md:-inset-6 lg:-inset-8 bg-ghibli-sun rounded-full opacity-[0.15] blur-xl" />
        
        {/* Sun body - soft and warm */}
        <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full relative"
             style={{
               background: 'radial-gradient(circle at 40% 40%, #FFF9E6 0%, #FFE878 30%, #FFD54F 70%, #FFC107 100%)'
             }}>
          <div className="absolute inset-3 sm:inset-4 md:inset-5 lg:inset-6 bg-gradient-to-br from-white/40 to-transparent rounded-full" />
        </div>
      </motion.div>

      {/* Fluffy Ghibli-style clouds */}
      <div className="absolute inset-0">
        {/* Cloud 1 - Large fluffy */}
        <motion.div
          className="absolute top-20 md:top-28"
          animate={{ x: ['-20vw', '120vw'] }}
          transition={{ duration: 100, repeat: Infinity, ease: 'linear' }}
        >
          <svg width="200" height="80" viewBox="0 0 200 80" className="drop-shadow-sm">
            <defs>
              <filter id="cloud1">
                <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
              </filter>
            </defs>
            <ellipse cx="40" cy="50" rx="38" ry="28" fill="white" opacity="0.95" filter="url(#cloud1)" />
            <ellipse cx="75" cy="45" rx="42" ry="32" fill="white" opacity="0.95" filter="url(#cloud1)" />
            <ellipse cx="110" cy="48" rx="40" ry="30" fill="white" opacity="0.95" filter="url(#cloud1)" />
            <ellipse cx="145" cy="52" rx="35" ry="26" fill="white" opacity="0.95" filter="url(#cloud1)" />
            {/* Highlights */}
            <ellipse cx="70" cy="38" rx="30" ry="18" fill="white" opacity="0.6" />
            <ellipse cx="110" cy="40" rx="28" ry="16" fill="white" opacity="0.6" />
          </svg>
        </motion.div>

        {/* Cloud 2 - Medium */}
        <motion.div
          className="absolute top-40 md:top-56"
          animate={{ x: ['-15vw', '115vw'] }}
          transition={{ duration: 85, repeat: Infinity, ease: 'linear', delay: 15 }}
        >
          <svg width="160" height="70" viewBox="0 0 160 70" className="drop-shadow-sm">
            <ellipse cx="35" cy="45" rx="32" ry="24" fill="white" opacity="0.9" />
            <ellipse cx="65" cy="42" rx="36" ry="28" fill="white" opacity="0.9" />
            <ellipse cx="95" cy="46" rx="34" ry="26" fill="white" opacity="0.9" />
            <ellipse cx="120" cy="48" rx="30" ry="22" fill="white" opacity="0.9" />
            <ellipse cx="65" cy="35" rx="24" ry="14" fill="white" opacity="0.5" />
          </svg>
        </motion.div>

        {/* Cloud 3 - Small */}
        <motion.div
          className="absolute top-32 md:top-44"
          animate={{ x: ['-10vw', '110vw'] }}
          transition={{ duration: 70, repeat: Infinity, ease: 'linear', delay: 30 }}
        >
          <svg width="130" height="60" viewBox="0 0 130 60" className="drop-shadow-sm">
            <ellipse cx="30" cy="40" rx="28" ry="20" fill="white" opacity="0.85" />
            <ellipse cx="55" cy="37" rx="30" ry="22" fill="white" opacity="0.85" />
            <ellipse cx="80" cy="40" rx="28" ry="20" fill="white" opacity="0.85" />
            <ellipse cx="100" cy="42" rx="24" ry="18" fill="white" opacity="0.85" />
          </svg>
        </motion.div>

        {/* Cloud 4 - High and distant */}
        <motion.div
          className="absolute top-12 md:top-16 right-0"
          animate={{ x: ['-25vw', '125vw'] }}
          transition={{ duration: 120, repeat: Infinity, ease: 'linear', delay: 45 }}
        >
          <svg width="140" height="55" viewBox="0 0 140 55" className="drop-shadow-sm opacity-80">
            <ellipse cx="25" cy="35" rx="24" ry="18" fill="white" />
            <ellipse cx="50" cy="32" rx="28" ry="20" fill="white" />
            <ellipse cx="75" cy="35" rx="26" ry="19" fill="white" />
            <ellipse cx="95" cy="37" rx="22" ry="16" fill="white" />
          </svg>
        </motion.div>
      </div>

      {/* Flying Birds */}
      <Bird delay={5} />
      <Bird delay={15} />
      <Bird delay={25} />

      {/* Beautiful curved rolling hills - three layers for depth */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-full"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {/* Far hills - different rolling pattern */}
        <svg
          viewBox="0 0 1440 320"
          className="absolute bottom-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            fill="#8DD482"
            opacity="0.6"
            d="M0,180L120,170C240,160,480,140,720,150C960,160,1200,200,1320,220L1440,240L1440,320L0,320Z"
          />
        </svg>

        {/* Mid-range hills - smooth curves */}
        <svg
          viewBox="0 0 1440 320"
          className="absolute bottom-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            fill="#77B36E"
            opacity="0.75"
            d="M0,200L80,190C160,180,320,160,480,165C640,170,800,200,960,210C1120,220,1280,210,1360,205L1440,200L1440,320L0,320Z"
          />
        </svg>

        {/* Closer hills - gentle curves */}
        <svg
          viewBox="0 0 1440 320"
          className="absolute bottom-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            fill="#68B55E"
            opacity="0.85"
            d="M0,240L60,232C120,224,240,208,360,216C480,224,600,256,720,264C840,272,960,256,1080,240C1200,224,1320,208,1380,200L1440,192L1440,320L0,320Z"
          />
        </svg>
      </motion.div>

      {/* Mid-ground with scattered bushes and small trees */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-40 md:h-56"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        {/* Lush Ghibli-style bushes */}
        {bushesData.map((bush, i) => (
          <motion.div
            key={i}
            className="absolute bottom-0 rounded-full"
            style={{
              left: `${bush.left}%`,
              width: `${bush.width}px`,
              height: `${bush.height}px`,
              background: i % 3 === 0 
                ? 'radial-gradient(circle at 30% 30%, #7BC873, #5FA857)' 
                : i % 3 === 1 
                ? 'radial-gradient(circle at 30% 30%, #8FD68F, #6FB86F)'
                : 'radial-gradient(circle at 30% 30%, #6FB86F, #4A9B4A)',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            }}
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: bush.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: bush.delay,
            }}
          />
        ))}
      </motion.div>

      {/* Main Acacia Trees (foreground) - Responsive sizing */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-between items-end px-2 sm:px-4 md:px-8 lg:px-16 pb-0">
        <div className="flex-1 flex justify-start hidden sm:flex">
          <AcaciaTree size="medium" delay={0.7} animations={tree1Animations} />
        </div>
        <div className="flex-1 flex justify-center">
          <AcaciaTree size="large" delay={0.9} animations={tree2Animations} />
        </div>
        <div className="flex-1 flex justify-end">
          <AcaciaTree size="small" delay={0.8} animations={tree3Animations} />
        </div>
      </div>

      {/* Lush Ghibli Grass Field - Responsive height */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-32 sm:h-40 md:h-56 lg:h-64"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        {/* Base earth layer - green */}
        <div className="absolute inset-0 bg-gradient-to-t from-ghibli-earth-dark via-ghibli-earth to-transparent" />
        
        {/* Vibrant grass patches */}
        <div className="absolute inset-0 bg-gradient-to-t from-ghibli-grass via-ghibli-grass-bright to-transparent opacity-90" />
        
        {/* Detailed grass blades */}
        <div className="absolute inset-0 overflow-hidden">
          {grassBladesData.map((blade, i) => (
            <motion.div
              key={i}
              className="absolute bottom-0 w-1 rounded-t-full"
              style={{
                left: `${blade.left}%`,
                height: `${blade.height}px`,
                backgroundColor: blade.color,
                opacity: blade.opacity,
              }}
              animate={{
                scaleY: [1, 1.15, 1],
                rotate: [0, 3, 0, -3, 0],
              }}
              transition={{
                duration: blade.duration,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: blade.delay,
              }}
            />
          ))}
        </div>

        {/* Grass highlights (lighter patches) - bright green Ghibli style */}
        {grassHighlightsData.map((highlight, i) => (
          <div
            key={i}
            className="absolute bottom-0 h-20 md:h-32 rounded-t-full blur-lg"
            style={{
              left: `${highlight.left}%`,
              width: `${highlight.width}px`,
              background: i % 2 === 0 
                ? 'linear-gradient(to top, rgba(143, 214, 143, 0.4), transparent)'
                : 'linear-gradient(to top, rgba(184, 214, 127, 0.3), transparent)',
            }}
          />
        ))}

        {/* Flowers scattered in grass */}
        {flowersData.map((flower, i) => (
          <motion.div
            key={i}
            className="absolute bottom-4"
            style={{
              left: `${5 + i * 8}%`,
            }}
            animate={{
              y: [0, -3, 0],
              rotate: [0, 5, 0, -5, 0],
            }}
            transition={{
              duration: flower.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: flower.delay,
            }}
          >
            <div className={`w-2 h-2 rounded-full ${i % 3 === 0 ? 'bg-pink-300' : i % 3 === 1 ? 'bg-yellow-200' : 'bg-white'}`} 
                 style={{ boxShadow: '0 0 4px rgba(255,255,255,0.5)' }} 
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Atmospheric depth with subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ghibli-grass/5 pointer-events-none" />

      {/* Heat haze effect (subtle waviness) */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-transparent pointer-events-none"
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scaleY: [1, 1.02, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Film grain texture for realism */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] opacity-20 pointer-events-none" />
    </div>
  );
}

