import React from 'react';
import { ArrowUpRight, ShieldCheck, Award, Compass } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: string, payload?: any) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#181716] text-[#DDD9D2] pt-20 pb-12 border-t border-[#2A2826]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Editorial Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-[#2A2826]">
          {/* Brand & Manifesto */}
          <div className="lg:col-span-5 space-y-6">
            <span className="font-serif text-3xl tracking-[0.2em] uppercase text-[#FAF9F6] block">
              PALMA TRAVEL
            </span>
            <p className="text-sm leading-relaxed text-[#9E988F] max-w-md font-light">
              Contemporary Egyptian tourism curated through the lens of architectural majesty, private antiquities access, and slow luxury. Founded to reveal Egypt’s soul beyond the crowds.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-[#88837A]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#49BCE8]" />
                <span>Ministry of Tourism Licensed #2481</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#F5C542]" />
                <span>Condé Nast Traveler Selected</span>
              </div>
            </div>
          </div>

          {/* Navigation Links Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <div className="text-xs uppercase tracking-widest text-[#FAF9F6] font-semibold mb-4">
                Destinations
              </div>
              <ul className="space-y-2.5 text-xs text-[#9E988F]">
                {['Luxor', 'Aswan', 'Cairo', 'Giza', 'Siwa Oasis', 'Red Sea Riviera'].map((name) => (
                  <li key={name}>
                    <button
                      onClick={() => onNavigate('destinations')}
                      className="hover:text-[#49BCE8] transition-colors text-left"
                    >
                      {name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="text-xs uppercase tracking-widest text-[#FAF9F6] font-semibold mb-4">
                Experiences
              </div>
              <ul className="space-y-2.5 text-xs text-[#9E988F]">
                <li>
                  <button onClick={() => onNavigate('hot-air-balloon')} className="hover:text-[#49BCE8] transition-colors text-left">
                    Sunrise Hot Air Balloon
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('nile-cruises')} className="hover:text-[#49BCE8] transition-colors text-left">
                    Royal Dahabiya Cruises
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('experiences')} className="hover:text-[#49BCE8] transition-colors text-left">
                    Private Antiquities Access
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('experiences')} className="hover:text-[#49BCE8] transition-colors text-left">
                    Western Desert Expeditions
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('tailor-made')} className="hover:text-[#F5C542] transition-colors text-left flex items-center gap-1 font-medium text-[#FAF9F6]">
                    <span>Bespoke Itinerary</span>
                    <ArrowUpRight className="w-3 h-3 text-[#F5C542]" />
                  </button>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <div className="text-xs uppercase tracking-widest text-[#FAF9F6] font-semibold mb-4">
                Concierge Desks
              </div>
              <div className="space-y-3 text-xs text-[#9E988F]">
                <div>
                  <span className="text-[#DDD9D2] block font-medium">Cairo Headquarters</span>
                  <span>14 Al-Shams Towers, Corniche El Nil, Garden City</span>
                </div>
                <div>
                  <span className="text-[#DDD9D2] block font-medium">Luxor Operations</span>
                  <span>Winter Palace Pavilion, Corniche Street, Luxor</span>
                </div>
                <div className="pt-2">
                  <a
                    href="mailto:concierge@palmatravel.com"
                    className="inline-block text-[#49BCE8] hover:underline"
                  >
                    concierge@palmatravel.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Baseline Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#736E67]">
          <div>
            © {new Date().getFullYear()} PALMA TRAVEL. All rights reserved. Ultra-luxury Egyptian expeditions.
          </div>
          <div className="flex items-center gap-6">
            <button onClick={() => onNavigate('about')} className="hover:text-[#DDD9D2] transition-colors">
              Our Philosophy
            </button>
            <span aria-hidden="true">·</span>
            <button onClick={() => onNavigate('contact')} className="hover:text-[#DDD9D2] transition-colors">
              Private Inquiries
            </button>
            <span aria-hidden="true">·</span>
            <span className="text-[#88837A]">Export Ready for Hostinger Deployment</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
