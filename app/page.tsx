import Background from './components/Background';
import MessageCard from './components/MessageCard';
import MusicPlayer from './components/MusicPlayer';
import ScrollToTop from './components/ScrollToTop';

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-x-hidden">
      {/* Animated Background */}
      <Background />

      {/* Music Player */}
      <MusicPlayer />

      {/* Main Content - responsive positioning */}
      <div className="relative z-10 min-h-screen flex items-center justify-center sm:justify-center md:justify-start pt-16 sm:pt-20 pb-12 px-2 sm:px-4 md:pl-8 lg:pl-16 xl:pl-20 2xl:pl-24">
        <MessageCard />
      </div>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </main>
  );
}
