import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone, MessageSquare } from 'lucide-react';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string, payload?: any) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Destinations', view: 'destinations' },
    { label: 'Experiences', view: 'experiences' },
    { label: 'Nile Cruises', view: 'nile-cruises' },
    { label: 'Hot Air Balloon', view: 'hot-air-balloon' },
    { label: 'About Us', view: 'about' },
    { label: 'Contact', view: 'contact' },
  ];

  const handleNavClick = (view: string) => {
    onNavigate(view);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF9F6]/95 backdrop-blur-md border-b border-[#E4DCD3] shadow-xs py-3.5'
          : 'bg-[#FAF9F6]/80 backdrop-blur-xs border-b border-[#E4DCD3]/60 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Strict 3-zone Top Bar Contract */}
        <div className="flex items-center justify-between gap-8">
          
          {/* Zone 1: Single clean text element wordmark */}
          <button
            onClick={() => handleNavClick('home')}
            className="text-left group cursor-pointer focus:outline-hidden"
            aria-label="Palma Travel Home"
          >
            <span className="font-serif text-2xl sm:text-2xl md:text-3xl font-medium tracking-[0.18em] text-[#222222] uppercase whitespace-nowrap shrink-0 group-hover:text-[#49BCE8] transition-colors">
              PALMA TRAVEL
            </span>
          </button>

          {/* Zone 2: Clean single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium tracking-wide">
            {navItems.map((item) => {
              const isActive = currentView === item.view;
              return (
                <button
                  key={item.view}
                  onClick={() => handleNavClick(item.view)}
                  className={`relative py-1 whitespace-nowrap shrink-0 transition-colors focus:outline-hidden ${
                    isActive
                      ? 'text-[#222222] font-semibold'
                      : 'text-[#66625D] hover:text-[#222222]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#49BCE8]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Exactly 1 primary action */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <button
              onClick={() => handleNavClick('tailor-made')}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-white bg-[#222222] hover:bg-[#161514] active:scale-[0.98] transition-all whitespace-nowrap shrink-0 rounded-xs border border-[#222222] shadow-xs"
            >
              <span>Tailor-Made Journey</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#F5C542]" />
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={() => handleNavClick('tailor-made')}
              className="px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-white bg-[#222222] rounded-xs"
            >
              Plan Trip
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#222222] hover:text-[#49BCE8] focus:outline-hidden"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Refined Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bottom-0 bg-[#FAF9F6] border-t border-[#E4DCD3] px-6 py-8 flex flex-col justify-between overflow-y-auto animate-in fade-in duration-200">
          <div className="space-y-6">
            <div className="text-[11px] font-semibold uppercase tracking-widest text-[#888580]">
              Explore Egypt
            </div>
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => {
                const isActive = currentView === item.view;
                return (
                  <button
                    key={item.view}
                    onClick={() => handleNavClick(item.view)}
                    className={`text-left font-serif text-2xl tracking-wide py-1 transition-colors flex items-center justify-between ${
                      isActive ? 'text-[#49BCE8] font-medium' : 'text-[#222222]'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#CCC6BC]" />
                  </button>
                );
              })}
            </nav>

            <div className="pt-4 border-t border-[#E4DCD3]">
              <button
                onClick={() => handleNavClick('tailor-made')}
                className="w-full flex items-center justify-center gap-2 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#222222] rounded-xs"
              >
                <span>Design Custom Itinerary</span>
                <ArrowUpRight className="w-4 h-4 text-[#F5C542]" />
              </button>
            </div>
          </div>

          <div className="pt-8 border-t border-[#E4DCD3] space-y-4">
            <div className="text-xs text-[#888580] uppercase tracking-wider">Concierge Desks</div>
            <div className="flex flex-col gap-2.5 text-sm text-[#222222]">
              <a href="tel:+201000889977" className="flex items-center gap-2 text-xs hover:text-[#49BCE8]">
                <Phone className="w-3.5 h-3.5 text-[#49BCE8]" />
                <span>Cairo Desk: +20 100 088 9977</span>
              </a>
              <a href="https://wa.me/201000889977" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs hover:text-[#49BCE8]">
                <MessageSquare className="w-3.5 h-3.5 text-[#F5C542]" />
                <span>WhatsApp Private Client Line</span>
              </a>
            </div>
            <div className="text-[11px] text-[#888580]">
              Palma Travel · Cairo · Luxor · Aswan
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
