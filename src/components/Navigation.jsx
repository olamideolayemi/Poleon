import { useState } from 'react';
import { Menu, X } from 'lucide-react';
// Navigation Component
const Navigation = ({ currentPage, setCurrentPage, isScrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Blog', id: 'blog' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-[#0a0e27]/90 backdrop-blur-xl shadow-lg shadow-cyan-500/5 py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setCurrentPage('home')}>
          <div className="w-10 h-10 rounded-lg overflow-hidden bg-white/5 border border-white/10 flex items-center justify-center">
            <img src="/logos/poleon-1.png" alt="Poleon logo" className="w-full h-full object-contain" />
          </div>
          <span className="loading-gradient text-2xl font-bold bg-gradient-to-r from-cyan-400 via-white to-violet-400 bg-clip-text text-transparent">
            POLEON
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`text-sm font-medium transition-all duration-300 hover:text-cyan-400 ${
                currentPage === item.id ? 'text-cyan-400' : 'text-gray-300'
              }`}
            >
              {item.name}
            </button>
          ))}
          <button className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-violet-600 rounded-lg text-white font-medium hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#0a0e27]/95 backdrop-blur-xl border-t border-cyan-500/20">
          <div className="px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentPage(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left py-2 transition-colors ${
                  currentPage === item.id ? 'text-cyan-400' : 'text-gray-300'
                }`}
              >
                {item.name}
              </button>
            ))}
            <button className="w-full px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-violet-600 rounded-lg text-white font-medium">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};


export default Navigation;
