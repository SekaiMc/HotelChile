import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const heroRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const combinedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create a timeline for the hero section animations
    const heroTl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: "50% top",
        scrub: 0.5,
        pin: false, // Disable pinning to allow scrolling
        pinSpacing: false,
        anticipatePin: 1,
        onEnter: () => {
          document.body.classList.add('scrolling-down');
        },
        onLeaveBack: () => {
          document.body.classList.remove('scrolling-down');
        }
      }
    });

    // Combined container animation (transform and move right and down)
    heroTl.to(combinedRef.current, {
      width: "50%", // More rectangular
      height: "60vh", 
      x: "70%", // Move to the right
      y: "20%", // Move downward
      borderRadius: "15px", // Rounded borders
      scale: 0.85, // Shrink as it moves
      opacity: 0, // Fade out at the end
      duration: 1,
      ease: "power2.inOut"
    }, 0);

    // Create a separate ScrollTrigger for smooth transition to hotel concept
    ScrollTrigger.create({
      trigger: triggerRef.current,
      start: "top top",
      end: "50% top",
      onLeave: () => {
        // Remove automatic scrolling to allow natural scrolling
        // window.scrollTo({
        //   top: window.innerHeight,
        //   behavior: 'smooth'
        // });
      }
    });

    // Clean up
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={heroRef} className="relative w-full overflow-hidden">
      {/* Trigger element for ScrollTrigger */}
      <div ref={triggerRef} className="h-screen w-full"></div> {/* Restore to full screen height */}
      
      {/* Combined container for image and content that will be animated together */}
      <div 
        ref={combinedRef}
        className="absolute inset-0 flex items-center justify-center z-10 overflow-hidden"
        style={{
          width: "100%",
          height: "100vh", // Restore to full screen height
          transition: "border-radius 0.5s ease-out"
        }}
      >
        {/* Image container */}
        <div 
          ref={imageContainerRef} 
          className="absolute inset-0 z-0 overflow-hidden"
          style={{
            borderRadius: "0px", // Start with no border radius
            transition: "border-radius 0.5s ease-out"
          }}
        >
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{ 
              backgroundImage: 'url("/images/Fondo-Hotel.jpg")',
            }}
          />
          {/* Semi-transparent overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-15"></div>
        </div>

        {/* Content - centered both vertically and horizontally */}
        <div 
          ref={contentRef} 
          className="relative z-20 text-center"
        >
          <div className="text-white space-y-8 px-4 max-w-3xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-light leading-tight tracking-wide">
              {t('hero.title')}
            </h1>
            <p className="text-lg md:text-xl font-sans font-light tracking-widest uppercase">
              {t('hero.subtitle')}
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center">
          <span className="text-white text-xs uppercase tracking-widest mb-2">Scroll</span>
          <div className="w-0.5 h-8 bg-white/50 relative overflow-hidden">
            <div 
              className="w-full h-1/2 bg-white absolute animate-scroll-down"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;