# A Message Across Time

A beautiful, animated single-page website built with Next.js and Tailwind CSS, featuring a Japanese savanna-themed landscape with a personal letter preserved in time.

## Features

- 🎨 **Animated Japanese Savanna Background**: Parallax layers with drifting clouds, swaying trees, and gentle grass animations
- 📝 **Elegant Message Display**: Semi-transparent card with beautiful typography and smooth reveal animations
- 🎵 **Optional Background Music**: Toggle ambient music with a floating player
- 📱 **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- ♿ **Accessible**: ARIA labels, keyboard navigation, and reduced motion support
- ⚡ **Performance Optimized**: Built with Next.js 14 App Router and Framer Motion

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Language**: TypeScript
- **Fonts**: Inter & Merriweather (Google Fonts)

## Project Structure

```
after7years/
├── app/
│   ├── components/
│   │   ├── AnimatedText.tsx      # Text reveal animation wrapper
│   │   ├── Background.tsx        # Animated landscape background
│   │   ├── MessageCard.tsx       # Main content card
│   │   ├── MusicPlayer.tsx       # Optional music toggle
│   │   └── ScrollToTop.tsx       # Scroll to top button
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Main page
├── data.ts                       # Message content
├── tailwind.config.ts            # Tailwind configuration
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Updating the Message

Edit the `data.ts` file to customize the message content:

```typescript
export const messageData = {
  title: "Your Title",
  subtitle: "Your Subtitle",
  greeting: "Your Greeting",
  paragraphs: [
    "Your paragraphs...",
  ],
  signature: "— Your Signature",
};
```

### Adding Background Music

1. Add an audio file to `public/music/ambient.mp3`
2. The MusicPlayer component will automatically load it
3. Supported formats: MP3, WAV, OGG

### Customizing Colors

Update the color palette in `tailwind.config.ts`:

```typescript
colors: {
  'savanna-sky': '#87CEEB',
  'savanna-grass': '#D4A574',
  // ... more colors
}
```

## Animation Features

- **Page Load Sequence**: Background → Trees → Card → Text (staggered)
- **Scroll Animations**: Text paragraphs fade in on scroll
- **Interactive Elements**: Hover effects on cards and buttons
- **Parallax Effect**: Background layers move at different speeds
- **Reduced Motion Support**: Respects user's motion preferences

## Performance Optimizations

- Next.js Image component for optimized images
- Lazy loading animations with Intersection Observer
- Minimal CSS with Tailwind's JIT compiler
- Font optimization with Next.js font loader

## Accessibility

- Semantic HTML structure
- Proper ARIA labels on interactive elements
- Keyboard navigation support
- Color contrast ratio: 4.5:1 minimum
- Reduced motion media query support

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Build for Production

```bash
npm run build
npm start
```

## Deployment

This project can be easily deployed to:

- **Vercel** (recommended): `vercel deploy`
- **Netlify**: Connect your Git repository
- **Any Node.js hosting**: Run `npm run build && npm start`

## License

This is a personal project. Feel free to use it as inspiration for your own projects.

## Credits

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animated with [Framer Motion](https://www.framer.com/motion/)
- Fonts by [Google Fonts](https://fonts.google.com/)
