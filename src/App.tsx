import React, { useState, useEffect, useRef } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { LanguageProvider } from './i18n/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Welcome from './components/Welcome';
import Footer from './components/Footer';
import { TopHeader } from './components/TopHeader';
import WhatsAppButton from './components/WhatsAppButton';
import ReservarAlternativoButton from './components/ReservarAlternativoButton';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [currentSection, setCurrentSection] = useState<'hero' | 'rooms' | 'other'>('hero');
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [isRoomsSection, setIsRoomsSection] = useState(false);
  const [showReservarButton, setShowReservarButton] = useState(false);
  const [isPastHeroSection, setIsPastHeroSection] = useState(false);

  const heroRef = useRef<HTMLDivElement>(null);
  const roomsRef = useRef<HTMLDivElement>(null);
  const lastScrollPosition = useRef<number>(0);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.target === heroRef.current && entry.isIntersecting) {
          setCurrentSection('hero');
        } else if (entry.target === roomsRef.current && entry.isIntersecting) {
          setCurrentSection('rooms');
        } else if (!entry.isIntersecting && entry.target === heroRef.current && entry.boundingClientRect.top < 0) {
          // Si salimos del hero hacia abajo
          setCurrentSection('other');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: '0px',
      threshold: 0.1
    });

    if (heroRef.current) observer.observe(heroRef.current);
    if (roomsRef.current) observer.observe(roomsRef.current);

    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
      if (roomsRef.current) observer.unobserve(roomsRef.current);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroHeight = heroRef.current?.offsetHeight || 0;
      const roomsPosition = roomsRef.current?.offsetTop || 0;
      
      // Check if scrolled past hero section
      setIsPastHeroSection(scrollPosition > heroHeight * 0.5);
      
      // Calculate if we're in the rooms section
      const isInRoomsSection = scrollPosition >= roomsPosition - 100 && 
                              scrollPosition < roomsPosition + (roomsRef.current?.offsetHeight || 0) - 100;
      
      // Update navbar visibility
      if (scrollPosition > lastScrollPosition.current) {
        // Scrolling down
        if (scrollPosition > 100) {
          setIsVisible(false);
        }
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      
      // Update scroll state
      setIsScrolled(scrollPosition > 50);
      
      // Update last scroll position
      lastScrollPosition.current = scrollPosition;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <LanguageProvider>
      <ParallaxProvider>
        <div className="App flex flex-col min-h-screen bg-white text-gray-900 font-sans">
          <TopHeader 
            isScrolled={isScrolled} 
            isVisible={isVisible} 
            onLangMenuOpenChange={setIsLangMenuOpen} 
          />
          <Navbar isScrolled={isScrolled} isVisible={isVisible} isLangMenuOpen={isLangMenuOpen} />
          
          <main className="flex-grow">
            <div ref={heroRef} className="relative h-screen">
              <Hero />
            </div>
            
            <div ref={roomsRef} id="rooms" className="scroll-mt-20">
              <Welcome />
            </div>
            
            {/* Add a spacer section to ensure content is scrollable to the footer */}
            <div className="py-32 bg-gray-50">
              <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">Próximamente más secciones</h2>
                <div className="w-20 h-0.5 bg-[#5E0A24] mx-auto mb-8"></div>
                <p className="text-gray-600 max-w-2xl mx-auto mb-12">
                  Estamos trabajando para ofrecerte la mejor experiencia en nuestro sitio web.
                  Pronto encontrarás más información sobre nuestras instalaciones y servicios.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                  <div className="p-6 bg-white rounded-lg shadow-sm">
                    <h3 className="text-xl font-light text-gray-900 mb-3">Gastronomía</h3>
                    <p className="text-gray-600">Descubre nuestra exquisita oferta culinaria con los mejores sabores locales.</p>
                  </div>
                  <div className="p-6 bg-white rounded-lg shadow-sm">
                    <h3 className="text-xl font-light text-gray-900 mb-3">Spa & Bienestar</h3>
                    <p className="text-gray-600">Relájate y rejuvenece con nuestros tratamientos exclusivos de spa.</p>
                  </div>
                  <div className="p-6 bg-white rounded-lg shadow-sm">
                    <h3 className="text-xl font-light text-gray-900 mb-3">Actividades</h3>
                    <p className="text-gray-600">Vive experiencias únicas con nuestras actividades para todos los gustos.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Add another spacer to ensure scrollability */}
            <div className="h-40"></div>
          </main>
          
          <Footer />
          <WhatsAppButton isRoomsSection={false} />
          <ReservarAlternativoButton isVisible={isPastHeroSection} />
        </div>
      </ParallaxProvider>
    </LanguageProvider>
  );
};

export default App;
