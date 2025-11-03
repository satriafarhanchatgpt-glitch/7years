import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-savanna-sky to-savanna-grass">
      <div className="text-center px-4">
        <h1 className="text-6xl md:text-8xl font-bold text-savanna-tree mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-serif text-savanna-text mb-6">
          Page Not Found
        </h2>
        <p className="text-lg text-savanna-text/80 mb-8">
          The page you&apos;re looking for doesn&apos;t exist in this timeline.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-3 bg-savanna-tree text-white rounded-full hover:bg-savanna-tree/90 transition-colors duration-300 shadow-lg"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}

